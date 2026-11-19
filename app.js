const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// ---------- saved progress ----------
const store = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem("neuro." + key)) ?? fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem("neuro." + key, JSON.stringify(value)); } catch { /* private mode: progress just won't persist */ }
  }
};
let explored = new Set(store.get("explored", []));
let mastered = new Set(store.get("mastered", []));
let bestQuiz = store.get("bestQuiz", null);

// ---------- tabs ----------
function showTab(id) {
  $$(".tab").forEach(t => t.classList.toggle("active", t.id === id));
  $$("#nav button").forEach(b => b.classList.toggle("active", b.dataset.tab === id));
  if (id === "home") renderStats();
  window.scrollTo(0, 0);
}
$("#nav").addEventListener("click", e => { if (e.target.dataset.tab) showTab(e.target.dataset.tab); });
document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) showTab(go.dataset.go);
});

// ---------- home ----------
function renderStats() {
  const totalRegions = Object.keys(REGIONS).length;
  const stat = (big, label, frac) =>
    `<div class="stat"><b>${big}</b><span>${label}</span><div class="bar"><i style="width:${Math.round(frac * 100)}%"></i></div></div>`;
  $("#stats").innerHTML =
    stat(`${explored.size} / ${totalRegions}`, "brain regions explored", explored.size / totalRegions) +
    stat(`${mastered.size} / ${DECK.length}`, "flashcards mastered", mastered.size / DECK.length) +
    stat(bestQuiz === null ? "—" : `${bestQuiz} / 10`, "best quiz score", (bestQuiz ?? 0) / 10);
}

// ---------- brain atlas ----------
// The ear-to-ear view is symmetrical, so one half is drawn in the HTML and mirrored here.
(function mirrorHalf() {
  const half = $("#corHalf"), copy = half.cloneNode(true);
  copy.removeAttribute("id");
  copy.setAttribute("transform", "translate(600 0) scale(-1 1)");
  half.after(copy);
})();

function showView(name) {
  $$("#atlas .view").forEach(v => v.hidden = v.dataset.view !== name);
  $$("#viewToggle button").forEach(b => b.classList.toggle("sel", b.dataset.view === name));
}
$("#viewToggle").addEventListener("click", e => { if (e.target.dataset.view) showView(e.target.dataset.view); });

function selectRegion(id) {
  const r = REGIONS[id];
  // if the part is not drawn in the view on screen, switch to a view that shows it
  const current = $("#atlas .view:not([hidden])");
  if (!$(`[data-region="${id}"]`, current)) {
    const other = $$("#atlas .view").find(v => $(`[data-region="${id}"]`, v));
    if (other) showView(other.dataset.view);
  }
  $$("#atlas svg .region").forEach(p => p.classList.toggle("sel", p.dataset.region === id));
  $$("#atlas button[data-region]").forEach(b => b.classList.toggle("sel", b.dataset.region === id));
  $("#regionInfo").innerHTML = `
    <span class="kind">${r.kind}</span>
    <h2>${r.name}</h2>
    <p>${r.summary}</p>
    <h4>What it does</h4><ul>${r.functions.map(f => `<li>${f}</li>`).join("")}</ul>
    <h4>Clinical connection</h4><p>${r.clinical}</p>
    <div class="trick"><b>Memory tip:</b> ${r.trick}</div>`;
  explored.add(id);
  store.set("explored", [...explored]);
}
$$("#atlas svg .region").forEach(p => {
  p.setAttribute("tabindex", "0");
  p.setAttribute("role", "button");
  p.setAttribute("aria-label", REGIONS[p.dataset.region].name);
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title"); // name shown on hover
  title.textContent = REGIONS[p.dataset.region].name;
  p.append(title);
  p.addEventListener("click", () => selectRegion(p.dataset.region));
  p.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectRegion(p.dataset.region); }
  });
});
$("#surfaceChips").innerHTML = [...SURFACE_REGIONS, ...DEEP_REGIONS].map(id => `<button data-region="${id}"><i class="dot" style="background:${REGIONS[id].color}"></i>${REGIONS[id].name}</button>`).join("");
$("#atlas").addEventListener("click", e => {
  const chip = e.target.closest("button[data-region]");
  if (chip) selectRegion(chip.dataset.region);
});
$("#regionInfo").innerHTML = `<h2>Pick a part</h2><p>Click any coloured part of a diagram, or a name in the list below it, to see what it does. Parts that are hidden inside the brain appear in the two cut-open views.</p>`;

// ---------- neuron ----------
function selectPart(id) {
  const p = NEURON_PARTS[id];
  $$("#neuronSvg .np").forEach(g => g.classList.toggle("sel", g.dataset.part === id));
  $$("#neuronChips button").forEach(b => b.classList.toggle("sel", b.dataset.part === id));
  $("#neuronInfo").innerHTML = `<h2>${p.name}</h2><p>${p.text}</p>`;
}
$("#neuronChips").innerHTML = Object.entries(NEURON_PARTS).map(([id, p]) => `<button data-part="${id}">${p.name}</button>`).join("");
$("#neuronChips").addEventListener("click", e => { if (e.target.dataset.part) selectPart(e.target.dataset.part); });
$$("#neuronSvg .np").forEach(g => g.addEventListener("click", () => selectPart(g.dataset.part)));
selectPart("dendrites");

let apStep = 0;
function renderAP() {
  $$("#apSvg .seg").forEach(s => {
    const i = +s.dataset.seg;
    s.classList.toggle("on", i === apStep);
    s.classList.toggle("done", i < apStep);
  });
  $("#apInfo").innerHTML = `<h2>${AP_STEPS[apStep].name}</h2><p>${AP_STEPS[apStep].text}</p>`;
  $("#apCount").textContent = `${apStep + 1} / ${AP_STEPS.length}`;
  $("#apPrev").disabled = apStep === 0;
  $("#apNext").textContent = apStep === AP_STEPS.length - 1 ? "Start over" : "Next →";
}
$("#apPrev").addEventListener("click", () => { apStep = Math.max(0, apStep - 1); renderAP(); });
$("#apNext").addEventListener("click", () => { apStep = (apStep + 1) % AP_STEPS.length; renderAP(); });
renderAP();

// ---------- chemistry & conditions ----------
$("#ntGrid").innerHTML = TRANSMITTERS.map(t => `
  <article class="card"><span class="tag">${t.tag}</span><h3>${t.name}</h3>
    <h4>What it does</h4><p>${t.does}</p>
    <h4>When it goes wrong</h4><p>${t.wrong}</p>
    <h4>Medicines that act on it</h4><p>${t.meds}</p></article>`).join("");
$("#condGrid").innerHTML = CONDITIONS.map(c => `
  <article class="card"><span class="tag">${c.tag}</span><h3>${c.name}</h3>
    <h4>What happens</h4><p>${c.what}</p>
    <h4>Signs</h4><p>${c.signs}</p>
    <h4>Treatment</h4><p>${c.treat}</p></article>`).join("");

// ---------- flashcards ----------
const DECK = [
  ...Object.entries(REGIONS).map(([id, r]) => ({ id: "r-" + id, deck: "Anatomy", q: `What does the ${r.name.toLowerCase()} do?`, a: r.summary })),
  ...Object.entries(NEURON_PARTS).map(([id, p]) => ({ id: "n-" + id, deck: "Neuron", q: p.name, a: p.text })),
  ...AP_STEPS.map((s, i) => ({ id: "ap-" + i, deck: "Neuron", q: `Action potential — ${s.name.replace(/^\d+\.\s*/, "")}: what is happening?`, a: s.text })),
  ...TRANSMITTERS.map(t => ({ id: "t-" + t.name, deck: "Chemistry", q: `${t.name}: what does it do, and name a medicine that acts on it.`, a: `${t.does} ${t.meds}` })),
  ...CONDITIONS.map(c => ({ id: "c-" + c.name, deck: "Conditions", q: `${c.name}: what is happening in the brain?`, a: c.what })),
  ...GLOSSARY.map(([term, def]) => ({ id: "g-" + term, deck: "Terms", q: term, a: def }))
];
const DECK_NAMES = ["All", "Anatomy", "Neuron", "Chemistry", "Conditions", "Terms"];
let deckName = "All", queue = [], flipped = false;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function buildQueue() {
  queue = shuffle(DECK.filter(c => (deckName === "All" || c.deck === deckName) && !mastered.has(c.id)));
  flipped = false;
  renderCard();
}
function renderCard() {
  const inDeck = DECK.filter(c => deckName === "All" || c.deck === deckName).length;
  const card = queue[0];
  const el = $("#flash");
  el.classList.toggle("back", flipped && !!card);
  if (!card) {
    el.innerHTML = `<span class="side">Deck complete</span><span class="txt">You've mastered every card in this deck. Reset below to study them again.</span>`;
  } else {
    el.innerHTML = `<span class="side">${card.deck} · ${flipped ? "answer" : "question"}</span><span class="txt">${flipped ? card.a : card.q}</span>`;
  }
  $("#cardCount").textContent = `${inDeck - queue.length} / ${inDeck} mastered`;
  $("#cardGot").disabled = $("#cardAgain").disabled = !card;
}
$("#deckChips").innerHTML = DECK_NAMES.map(n => `<button data-deck="${n}" class="${n === "All" ? "sel" : ""}">${n}</button>`).join("");
$("#deckChips").addEventListener("click", e => {
  if (!e.target.dataset.deck) return;
  deckName = e.target.dataset.deck;
  $$("#deckChips button").forEach(b => b.classList.toggle("sel", b === e.target));
  buildQueue();
});
$("#flash").addEventListener("click", () => { flipped = !flipped; renderCard(); });
$("#cardGot").addEventListener("click", () => {
  mastered.add(queue.shift().id);
  store.set("mastered", [...mastered]);
  flipped = false; renderCard();
});
$("#cardAgain").addEventListener("click", () => { queue.push(queue.shift()); flipped = false; renderCard(); });
$("#cardReset").addEventListener("click", () => {
  DECK.filter(c => deckName === "All" || c.deck === deckName).forEach(c => mastered.delete(c.id));
  store.set("mastered", [...mastered]);
  buildQueue();
});
buildQueue();

// ---------- quiz ----------
let quiz = null;
function startQuiz() {
  quiz = { items: shuffle([...QUIZ]).slice(0, 10), i: 0, score: 0, picked: null, missed: [] };
  renderQuiz();
}
function renderQuiz() {
  const box = $("#quizBox");
  if (!quiz) {
    box.innerHTML = `<h2>Ready?</h2><p>Ten random questions from a bank of ${QUIZ.length}, covering anatomy, neurons, chemistry and conditions. You'll get an explanation after each answer.</p>
      ${bestQuiz !== null ? `<p>Your best score so far: <b>${bestQuiz} / 10</b></p>` : ""}
      <button class="primary" id="quizStart">Start quiz</button>`;
    $("#quizStart").addEventListener("click", startQuiz);
    return;
  }
  if (quiz.i >= quiz.items.length) {
    if (bestQuiz === null || quiz.score > bestQuiz) { bestQuiz = quiz.score; store.set("bestQuiz", bestQuiz); }
    const msg = quiz.score >= 9 ? "Excellent work." : quiz.score >= 7 ? "Solid. Review the ones you missed." : "Good start. Revisit the sections below and try again.";
    box.innerHTML = `<span class="tag">Result</span><div class="score">${quiz.score} / 10</div><p>${msg}</p>
      ${quiz.missed.length ? `<h4>Review</h4><ul>${quiz.missed.map(m => `<li><b>${m.q}</b><br>${m.a[m.c]} — ${m.why}</li>`).join("")}</ul>` : ""}
      <button class="primary" id="quizStart">Try again</button>`;
    $("#quizStart").addEventListener("click", startQuiz);
    return;
  }
  const item = quiz.items[quiz.i], answered = quiz.picked !== null;
  box.innerHTML = `<span class="tag">Question ${quiz.i + 1} of 10 · ${item.cat}</span>
    <p class="q">${item.q}</p>
    <div class="opts">${item.a.map((opt, k) => {
      const cls = !answered ? "" : k === item.c ? "right" : k === quiz.picked ? "wrong" : "";
      return `<button data-k="${k}" class="${cls}" ${answered ? "disabled" : ""}>${opt}</button>`;
    }).join("")}</div>
    ${answered ? `<div class="why"><b>${quiz.picked === item.c ? "Correct." : "Not quite."}</b> ${item.why}</div>
      <button class="primary" id="quizNext">${quiz.i === 9 ? "See result" : "Next question"}</button>` : ""}`;
  if (answered) $("#quizNext").addEventListener("click", () => { quiz.i++; quiz.picked = null; renderQuiz(); });
}
$("#quizBox").addEventListener("click", e => {
  const k = e.target.dataset.k;
  if (k === undefined || !quiz || quiz.picked !== null) return;
  const item = quiz.items[quiz.i];
  quiz.picked = +k;
  if (quiz.picked === item.c) quiz.score++; else quiz.missed.push(item);
  renderQuiz();
});
renderQuiz();

// ---------- glossary ----------
function renderGlossary(filter = "") {
  const f = filter.trim().toLowerCase();
  const rows = GLOSSARY.filter(([t, d]) => !f || t.toLowerCase().includes(f) || d.toLowerCase().includes(f));
  $("#glossList").innerHTML = rows.length
    ? rows.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join("")
    : `<dd>No terms match "${f.replace(/[<>&]/g, "")}".</dd>`;
}
$("#glossSearch").addEventListener("input", e => renderGlossary(e.target.value));
renderGlossary();

renderStats();
