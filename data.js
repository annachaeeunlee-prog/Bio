// All study content lives here so it is easy to add to or correct.

const REGIONS = {
  frontal: {
    name: "Frontal lobe", kind: "Lobe of the cerebrum", color: "#e8845c",
    summary: "The brain's planner and decision-maker. It also starts every voluntary movement.",
    functions: [
      "Planning, judgment, self-control and personality (prefrontal cortex)",
      "Voluntary movement (primary motor cortex, just in front of the central sulcus)",
      "Producing speech (Broca's area, usually on the left side)"
    ],
    clinical: "Damage can change personality and impulse control. The classic case is Phineas Gage, a railroad worker who survived an iron rod through his frontal lobe in 1848 but became a noticeably different person. Damage to Broca's area causes expressive aphasia: the person understands language but struggles to get words out.",
    trick: "Frontal = Front office. It's the boss making the plans."
  },
  parietal: {
    name: "Parietal lobe", kind: "Lobe of the cerebrum", color: "#5ba7c9",
    summary: "Processes touch and builds your sense of where your body is in space.",
    functions: [
      "Touch, pressure, temperature and pain (primary somatosensory cortex)",
      "Spatial awareness and navigation",
      "Combining information from different senses"
    ],
    clinical: "Damage to the right parietal lobe can cause hemispatial neglect: the person ignores the left half of the world, sometimes eating from only the right half of a plate or shaving only half of the face.",
    trick: "Parietal = Position and Pressure."
  },
  temporal: {
    name: "Temporal lobe", kind: "Lobe of the cerebrum", color: "#7fb46a",
    summary: "Handles hearing, understanding language, and holds key memory structures.",
    functions: [
      "Hearing (primary auditory cortex)",
      "Understanding language (Wernicke's area, usually on the left side)",
      "Memory and recognising faces and objects"
    ],
    clinical: "Damage to Wernicke's area causes receptive aphasia: speech flows easily but doesn't make sense, and the person has trouble understanding others. The temporal lobe is also a common starting point for seizures.",
    trick: "Temporal sits by your temples, right next to your ears — so it hears."
  },
  occipital: {
    name: "Occipital lobe", kind: "Lobe of the cerebrum", color: "#a97cc7",
    summary: "The vision centre. Signals from your eyes travel all the way to the back of your head to be processed here.",
    functions: [
      "Receiving visual signals (primary visual cortex)",
      "Processing colour, shape and motion"
    ],
    clinical: "Damage can cause cortical blindness: the eyes work perfectly, but the brain can't process what they send. A hit to the back of the head can make you 'see stars' because it jostles the visual cortex.",
    trick: "Occipital = Optical."
  },
  cerebellum: {
    name: "Cerebellum", kind: "Hindbrain", color: "#d9a441",
    summary: "The 'little brain'. It fine-tunes movement, balance and posture.",
    functions: [
      "Coordination and smooth, precise movement",
      "Balance and posture",
      "Learning motor skills such as riding a bike or playing piano"
    ],
    clinical: "Damage causes ataxia: clumsy, uncoordinated movement and an unsteady walk. Alcohol affects the cerebellum quickly, which is why coordination tests are used to check for intoxication.",
    trick: "It makes up only about 10% of the brain's volume but holds most of its neurons."
  },
  brainstem: {
    name: "Brainstem", kind: "Midbrain, pons and medulla", color: "#c96a86",
    summary: "Connects the brain to the spinal cord and runs the functions that keep you alive.",
    functions: [
      "Medulla: breathing, heart rate and blood pressure",
      "Pons: relays signals, helps control sleep and facial movement",
      "Midbrain: eye movement and reflexes to sights and sounds",
      "Most of the cranial nerves connect here"
    ],
    clinical: "Because it controls breathing and heartbeat, brainstem injury is the most life-threatening kind of brain injury. Doctors check brainstem reflexes (like the pupils reacting to light) to assess how severe a brain injury is.",
    trick: "Top to bottom: Midbrain, Pons, Medulla — 'My Pet Monkey'."
  },
  thalamus: {
    name: "Thalamus", kind: "Deep structure", color: "#6aa9d8",
    summary: "The brain's relay station. Almost all sensory information stops here before reaching the cortex.",
    functions: [
      "Relays sight, sound, touch and taste to the right cortex area",
      "Helps regulate sleep, alertness and consciousness"
    ],
    clinical: "Smell is the one sense that skips the thalamus on its way to the cortex. A stroke in the thalamus can cause numbness or severe pain on the opposite side of the body.",
    trick: "Think of it as the brain's mail-sorting room."
  },
  hypothalamus: {
    name: "Hypothalamus", kind: "Deep structure", color: "#eda35a",
    summary: "A tiny region that keeps the body in balance (homeostasis).",
    functions: [
      "Body temperature, hunger and thirst",
      "Sleep–wake rhythm (body clock)",
      "Controls the pituitary gland, linking the nervous system to hormones"
    ],
    clinical: "Fever happens when the hypothalamus raises the body's temperature set-point to help fight infection. Medicines like acetaminophen and ibuprofen lower fever by reducing the chemical signals (prostaglandins) that push the set-point up.",
    trick: "Hypo-thalamus = it sits just below the thalamus."
  },
  hippocampus: {
    name: "Hippocampus", kind: "Deep structure (inside the temporal lobe)", color: "#7fb46a",
    summary: "Turns short-term experiences into long-term memories.",
    functions: [
      "Forming new long-term memories",
      "Spatial memory and navigation"
    ],
    clinical: "Patient H.M. had both hippocampi removed in 1953 to treat epilepsy. Afterwards he could no longer form new long-term memories, though his older memories and intelligence stayed. The hippocampus is also one of the first areas damaged in Alzheimer's disease.",
    trick: "Named after the Greek for 'seahorse' because of its shape. If you saw a hippo on campus, you'd remember it."
  },
  amygdala: {
    name: "Amygdala", kind: "Deep structure (inside the temporal lobe)", color: "#d65a4a",
    summary: "The emotion alarm, especially for fear and threat.",
    functions: [
      "Detecting threats and triggering the fear response",
      "Attaching emotion to memories (why emotional events are remembered vividly)"
    ],
    clinical: "The amygdala tends to be overactive in anxiety disorders and PTSD. People with rare damage to both amygdalae have great difficulty feeling or recognising fear.",
    trick: "Almond-shaped ('amygdala' is Greek for almond)."
  },
  basalganglia: {
    name: "Basal ganglia", kind: "Deep structure", color: "#d9a441",
    summary: "A group of nuclei that help start, stop and smooth out movement.",
    functions: [
      "Starting wanted movements and blocking unwanted ones",
      "Habit learning and reward"
    ],
    clinical: "In Parkinson's disease, dopamine-producing neurons in the substantia nigra die, so the basal ganglia can't start movement easily. In Huntington's disease, basal ganglia neurons degenerate and cause uncontrolled, dance-like movements.",
    trick: "The basal ganglia are the movement's 'gatekeeper' — they open the gate for the moves you want."
  },
  corpuscallosum: {
    name: "Corpus callosum", kind: "Deep structure (white matter)", color: "#a97cc7",
    summary: "A thick band of about 200 million nerve fibres connecting the left and right hemispheres.",
    functions: [
      "Lets the two hemispheres share information"
    ],
    clinical: "It was sometimes cut to treat severe epilepsy, producing 'split-brain' patients. Studying them showed that the two hemispheres specialise: in most people the left handles most language.",
    trick: "Corpus callosum = 'tough body' in Latin. It's the bridge between the halves."
  }
};

const SURFACE_REGIONS = ["frontal", "parietal", "temporal", "occipital", "cerebellum", "brainstem"];
const DEEP_REGIONS = ["thalamus", "hypothalamus", "hippocampus", "amygdala", "basalganglia", "corpuscallosum"];

const NEURON_PARTS = {
  dendrites: { name: "Dendrites", text: "Branch-like extensions that receive signals from other neurons. One neuron can have thousands of them, which is how it listens to many neighbours at once." },
  soma: { name: "Cell body (soma)", text: "Contains the nucleus and keeps the cell alive. It adds up all the incoming signals from the dendrites." },
  hillock: { name: "Axon hillock", text: "The 'decision point' where the cell body meets the axon. If the combined signal reaches threshold here, an action potential fires." },
  axon: { name: "Axon", text: "A long cable that carries the electrical signal away from the cell body. Some axons are over a metre long, such as those running from your spine to your toes." },
  myelin: { name: "Myelin sheath", text: "Fatty insulation wrapped around the axon. It makes signals travel much faster. It is made by Schwann cells in the body's nerves and oligodendrocytes in the brain and spinal cord. Multiple sclerosis damages myelin." },
  node: { name: "Node of Ranvier", text: "A gap between sections of myelin. The signal 'jumps' from node to node (saltatory conduction), which is why myelinated axons are so fast — up to about 120 m/s." },
  terminal: { name: "Axon terminals", text: "The ends of the axon. When the signal arrives, they release neurotransmitters into the synapse — the tiny gap between this neuron and the next cell." }
};

const AP_STEPS = [
  { name: "1. Resting potential", text: "The neuron is at rest, about −70 mV. The inside is negative compared with the outside. The sodium–potassium pump keeps it this way by moving 3 Na⁺ out for every 2 K⁺ in." },
  { name: "2. Stimulus reaches threshold", text: "Incoming signals make the inside less negative. If it reaches about −55 mV (threshold), the neuron commits to firing. This is 'all-or-none': there is no such thing as half an action potential." },
  { name: "3. Depolarization", text: "Voltage-gated sodium channels snap open and Na⁺ rushes in. The inside of the cell shoots up to about +30 mV." },
  { name: "4. Repolarization", text: "Sodium channels close and voltage-gated potassium channels open. K⁺ flows out, bringing the voltage back down." },
  { name: "5. Hyperpolarization", text: "Potassium channels are slow to close, so the voltage briefly dips below resting level. During this refractory period it is harder for the neuron to fire again, which keeps the signal moving in one direction." },
  { name: "6. Back to rest", text: "Channels reset and the sodium–potassium pump restores the original balance. The neuron is ready to fire again. The whole event took only a few milliseconds." }
];

const TRANSMITTERS = [
  {
    name: "Dopamine", tag: "Reward and movement",
    does: "Motivation, reward, and smooth control of movement.",
    wrong: "Too little in the movement pathway causes Parkinson's disease. Dopamine signalling is also involved in addiction, ADHD and schizophrenia.",
    meds: "Levodopa is turned into dopamine in the brain to treat Parkinson's. Antipsychotics block dopamine D2 receptors. Stimulants such as methylphenidate boost dopamine and norepinephrine signalling for ADHD."
  },
  {
    name: "Serotonin", tag: "Mood and sleep",
    does: "Helps regulate mood, sleep, appetite and digestion. Most of the body's serotonin is actually in the gut.",
    wrong: "Serotonin signalling is linked to depression and anxiety, though the real picture is more complicated than just 'low serotonin'.",
    meds: "SSRIs (selective serotonin reuptake inhibitors) such as fluoxetine and sertraline block serotonin from being reabsorbed, leaving more in the synapse. Triptans act on serotonin receptors to treat migraine."
  },
  {
    name: "GABA", tag: "Main 'brake'",
    does: "The brain's main inhibitory neurotransmitter. It calms neurons down and makes them less likely to fire.",
    wrong: "Too little inhibition can contribute to seizures and anxiety.",
    meds: "Benzodiazepines such as diazepam make GABA-A receptors work more strongly. They are used for seizures and severe anxiety, but can cause dependence. Alcohol also boosts GABA's effects."
  },
  {
    name: "Glutamate", tag: "Main 'accelerator'",
    does: "The brain's main excitatory neurotransmitter. Essential for learning and memory because it strengthens synapses (long-term potentiation).",
    wrong: "Too much glutamate over-excites and kills neurons (excitotoxicity). This happens during a stroke.",
    meds: "Memantine partly blocks NMDA glutamate receptors and is used in moderate-to-severe Alzheimer's disease."
  },
  {
    name: "Acetylcholine", tag: "Muscles and memory",
    does: "Tells muscles to contract at the neuromuscular junction. In the brain it supports attention and memory.",
    wrong: "Acetylcholine-producing neurons are lost in Alzheimer's disease. In myasthenia gravis the immune system attacks acetylcholine receptors on muscle, causing weakness.",
    meds: "Donepezil blocks the enzyme that breaks down acetylcholine (acetylcholinesterase) and is used in Alzheimer's. Botulinum toxin (Botox) blocks acetylcholine release, relaxing muscles."
  },
  {
    name: "Norepinephrine", tag: "Alertness",
    does: "Drives alertness and the 'fight or flight' response: faster heart rate, higher blood pressure, sharper attention.",
    wrong: "Involved in stress, anxiety, attention problems and depression.",
    meds: "SNRIs raise both serotonin and norepinephrine. Beta blockers such as propranolol block its effects on the heart."
  },
  {
    name: "Endorphins", tag: "Natural painkillers",
    does: "The body's own opioids. They reduce pain and are released during exercise, injury and stress.",
    wrong: "Opioid drugs hijack this system, which is why they relieve pain so well but carry a high risk of addiction and slowed breathing.",
    meds: "Morphine and other opioids activate the same receptors. Naloxone (Narcan) blocks those receptors and can reverse an opioid overdose."
  }
];

const CONDITIONS = [
  {
    name: "Stroke", tag: "Blood supply",
    what: "Part of the brain loses its blood supply. About 87% are ischemic (a clot blocks an artery); the rest are hemorrhagic (a vessel bursts).",
    signs: "BE FAST: Balance loss, Eye/vision changes, Face drooping, Arm weakness, Speech difficulty, Time to call emergency services. Symptoms usually appear on the side of the body opposite the damaged hemisphere.",
    treat: "For ischemic stroke, clot-dissolving medicine (such as alteplase, a form of tPA) can be given within about 4.5 hours, and some clots can be physically removed. 'Time is brain' — every minute counts."
  },
  {
    name: "Alzheimer's disease", tag: "Neurodegenerative",
    what: "The most common cause of dementia. Amyloid plaques build up between neurons and tau tangles form inside them. The hippocampus is affected early, which is why memory goes first.",
    signs: "Forgetting recent events, repeating questions, getting lost, and later trouble with language and daily tasks.",
    treat: "Cholinesterase inhibitors (donepezil) and memantine can ease symptoms. Newer antibody drugs target amyloid. There is no cure yet."
  },
  {
    name: "Parkinson's disease", tag: "Neurodegenerative",
    what: "Dopamine-producing neurons in the substantia nigra die, so the basal ganglia can't control movement properly.",
    signs: "Tremor at rest, stiffness (rigidity), slow movement (bradykinesia), and balance problems.",
    treat: "Levodopa, which the brain converts into dopamine, is the main treatment. Dopamine itself can't cross the blood–brain barrier, but levodopa can. Deep brain stimulation helps some patients."
  },
  {
    name: "Epilepsy", tag: "Electrical",
    what: "A tendency to have repeated seizures, which are bursts of abnormal, synchronised electrical activity in the brain.",
    signs: "Seizures vary: staring spells, jerking movements, loss of awareness or convulsions. An EEG records the brain's electrical activity to help diagnose it.",
    treat: "Anti-seizure medicines calm over-excitable neurons, for example by acting on sodium channels or boosting GABA. Surgery is an option for some people."
  },
  {
    name: "Multiple sclerosis (MS)", tag: "Autoimmune",
    what: "The immune system attacks myelin in the brain and spinal cord. Without insulation, signals slow down or fail.",
    signs: "Vision problems, numbness or tingling, weakness, fatigue and balance trouble. Symptoms often come and go.",
    treat: "Disease-modifying therapies calm the immune attack to reduce relapses. MRI scans show the damaged areas (lesions)."
  },
  {
    name: "Concussion", tag: "Injury",
    what: "A mild traumatic brain injury. A blow or jolt makes the brain move inside the skull and temporarily disrupts how neurons work.",
    signs: "Headache, confusion, dizziness, nausea, sensitivity to light, memory gaps. You do not have to be knocked out to have one.",
    treat: "Brief rest, then a gradual, step-by-step return to school and sport guided by a clinician. A second hit before recovery is especially dangerous."
  },
  {
    name: "Migraine", tag: "Headache disorder",
    what: "More than a bad headache: a neurological condition involving the trigeminal nerve and blood vessels of the brain's coverings.",
    signs: "Throbbing head pain, often one-sided, with nausea and sensitivity to light and sound. Some people get an 'aura' first, such as zigzag lights.",
    treat: "Triptans act on serotonin receptors to stop an attack. Newer medicines block a signalling molecule called CGRP."
  }
];

const GLOSSARY = [
  ["Neuron", "A nerve cell that sends and receives electrical and chemical signals. The brain has roughly 86 billion."],
  ["Glial cells", "Support cells of the nervous system. They insulate, feed, and clean up around neurons. Types include astrocytes, oligodendrocytes and microglia."],
  ["Synapse", "The tiny gap where one neuron passes a signal to the next cell, usually using neurotransmitters."],
  ["Neurotransmitter", "A chemical messenger released by a neuron to signal another cell."],
  ["Reuptake", "When a neuron reabsorbs its neurotransmitter from the synapse. Many medicines work by blocking reuptake."],
  ["Blood–brain barrier", "Tightly sealed blood vessel walls that control what can pass from the blood into the brain. It is a major challenge when designing brain medicines."],
  ["Central nervous system (CNS)", "The brain and spinal cord."],
  ["Peripheral nervous system (PNS)", "All the nerves outside the brain and spinal cord."],
  ["Cerebral cortex", "The wrinkled outer layer of the cerebrum where higher thinking happens. It is made of grey matter."],
  ["Grey matter", "Tissue made mostly of neuron cell bodies."],
  ["White matter", "Tissue made mostly of myelinated axons; the myelin makes it look white."],
  ["Gyrus / sulcus", "A gyrus is a ridge on the brain's surface; a sulcus is a groove. Folding fits more cortex into the skull."],
  ["Contralateral", "On the opposite side. Each hemisphere mostly controls and senses the opposite side of the body."],
  ["Neuroplasticity", "The brain's ability to change its connections with learning, experience, or after injury."],
  ["Cerebrospinal fluid (CSF)", "Clear fluid that cushions the brain and spinal cord. It is made in the brain's ventricles."],
  ["Meninges", "Three protective layers covering the brain and spinal cord: dura mater, arachnoid mater, pia mater."],
  ["Agonist / antagonist", "An agonist is a drug that activates a receptor; an antagonist blocks it."],
  ["MRI", "A scan that uses strong magnets and radio waves to make detailed images of soft tissue such as the brain."],
  ["EEG", "A test that records the brain's electrical activity through electrodes on the scalp."]
];

const QUIZ = [
  { cat: "Anatomy", q: "Which lobe is mainly responsible for processing vision?", a: ["Frontal", "Parietal", "Occipital", "Temporal"], c: 2, why: "The primary visual cortex is in the occipital lobe at the back of the head." },
  { cat: "Anatomy", q: "A patient understands speech but struggles to produce words. Which area is most likely damaged?", a: ["Wernicke's area", "Broca's area", "Cerebellum", "Amygdala"], c: 1, why: "Broca's area in the frontal lobe controls speech production. Damage causes expressive aphasia." },
  { cat: "Anatomy", q: "Which structure is essential for forming new long-term memories?", a: ["Hippocampus", "Pons", "Corpus callosum", "Hypothalamus"], c: 0, why: "Patient H.M. lost the ability to form new long-term memories after his hippocampi were removed." },
  { cat: "Anatomy", q: "Which part of the brainstem controls breathing and heart rate?", a: ["Midbrain", "Thalamus", "Medulla", "Cerebellum"], c: 2, why: "The medulla oblongata regulates vital automatic functions." },
  { cat: "Anatomy", q: "A person walks unsteadily and has clumsy, uncoordinated movements. Which structure is most likely affected?", a: ["Occipital lobe", "Cerebellum", "Amygdala", "Hippocampus"], c: 1, why: "The cerebellum coordinates movement and balance. Damage causes ataxia." },
  { cat: "Anatomy", q: "Which sense does NOT pass through the thalamus on the way to the cortex?", a: ["Vision", "Hearing", "Touch", "Smell"], c: 3, why: "Smell signals go from the olfactory bulb to the cortex without first relaying in the thalamus." },
  { cat: "Anatomy", q: "What connects the left and right hemispheres?", a: ["Corpus callosum", "Brainstem", "Basal ganglia", "Central sulcus"], c: 0, why: "The corpus callosum is a band of about 200 million nerve fibres." },
  { cat: "Anatomy", q: "Which structure keeps body temperature, hunger and thirst in balance?", a: ["Thalamus", "Hypothalamus", "Parietal lobe", "Pons"], c: 1, why: "The hypothalamus maintains homeostasis and controls the pituitary gland." },
  { cat: "Neuron", q: "Which part of a neuron receives incoming signals?", a: ["Axon", "Myelin sheath", "Dendrites", "Axon terminals"], c: 2, why: "Dendrites receive signals; the axon carries them away." },
  { cat: "Neuron", q: "What is the typical resting membrane potential of a neuron?", a: ["+30 mV", "0 mV", "−55 mV", "−70 mV"], c: 3, why: "At rest the inside of a neuron is about −70 mV. Threshold is about −55 mV." },
  { cat: "Neuron", q: "Which ion rushes INTO the neuron during depolarization?", a: ["Sodium (Na⁺)", "Potassium (K⁺)", "Chloride (Cl⁻)", "Calcium (Ca²⁺)"], c: 0, why: "Voltage-gated sodium channels open and Na⁺ floods in, making the inside positive." },
  { cat: "Neuron", q: "What does the myelin sheath do?", a: ["Makes neurotransmitters", "Speeds up signal conduction", "Receives signals", "Stores memories"], c: 1, why: "Myelin insulates the axon so the signal jumps between nodes of Ranvier." },
  { cat: "Neuron", q: "Which ion leaving the cell causes repolarization?", a: ["Sodium (Na⁺)", "Calcium (Ca²⁺)", "Potassium (K⁺)", "Magnesium (Mg²⁺)"], c: 2, why: "Voltage-gated potassium channels open and K⁺ flows out, returning the voltage toward rest." },
  { cat: "Chemistry", q: "Which neurotransmitter is the brain's main inhibitory ('brake') signal?", a: ["Glutamate", "GABA", "Dopamine", "Acetylcholine"], c: 1, why: "GABA makes neurons less likely to fire. Glutamate is the main excitatory signal." },
  { cat: "Chemistry", q: "Parkinson's disease involves the loss of neurons that make which neurotransmitter?", a: ["Serotonin", "GABA", "Acetylcholine", "Dopamine"], c: 3, why: "Dopamine neurons in the substantia nigra die, disrupting the basal ganglia." },
  { cat: "Chemistry", q: "How do SSRIs work?", a: ["They block serotonin reuptake", "They destroy serotonin", "They block dopamine receptors", "They make more myelin"], c: 0, why: "By blocking reuptake, SSRIs leave more serotonin available in the synapse." },
  { cat: "Chemistry", q: "Which neurotransmitter tells skeletal muscles to contract?", a: ["Serotonin", "Norepinephrine", "Acetylcholine", "GABA"], c: 2, why: "Acetylcholine is released at the neuromuscular junction." },
  { cat: "Chemistry", q: "Why is levodopa given for Parkinson's instead of dopamine itself?", a: ["Levodopa is cheaper", "Dopamine can't cross the blood–brain barrier", "Dopamine is toxic", "Levodopa lasts for years"], c: 1, why: "Levodopa crosses the blood–brain barrier and is then converted to dopamine." },
  { cat: "Chemistry", q: "Naloxone reverses an opioid overdose by…", a: ["Boosting GABA", "Breaking down opioids in the blood", "Raising serotonin", "Blocking opioid receptors"], c: 3, why: "Naloxone is an opioid receptor antagonist: it knocks opioids off the receptor and blocks it." },
  { cat: "Conditions", q: "In multiple sclerosis, the immune system attacks…", a: ["Myelin", "Dendrites", "Dopamine neurons", "The skull"], c: 0, why: "Loss of myelin in the brain and spinal cord slows or blocks nerve signals." },
  { cat: "Conditions", q: "What is the most common type of stroke?", a: ["Hemorrhagic (burst vessel)", "Ischemic (blocked artery)", "Traumatic", "Infectious"], c: 1, why: "About 87% of strokes are ischemic, caused by a clot blocking blood flow." },
  { cat: "Conditions", q: "Amyloid plaques and tau tangles are hallmarks of which disease?", a: ["Epilepsy", "Parkinson's disease", "Alzheimer's disease", "Migraine"], c: 2, why: "These abnormal protein deposits damage and kill neurons in Alzheimer's." },
  { cat: "Conditions", q: "A stroke in the LEFT hemisphere would most likely cause weakness on which side of the body?", a: ["Left", "Both", "Neither", "Right"], c: 3, why: "Motor pathways cross over, so each hemisphere controls the opposite (contralateral) side." },
  { cat: "Conditions", q: "Which test records the brain's electrical activity and helps diagnose epilepsy?", a: ["EEG", "X-ray", "ECG", "Blood test"], c: 0, why: "An EEG (electroencephalogram) uses scalp electrodes. An ECG records the heart." }
];
