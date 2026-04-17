export const emotionThemes = {
  calm: {
    gradient: 'from-[#090f32] via-[#2d236d] to-[#130d26]',
    glow: '#7e8dff',
    accent: '#71d6ff',
    speed: 22,
    orbScale: 1,
  },
  joy: {
    gradient: 'from-[#2e123a] via-[#692f7a] to-[#2a1948]',
    glow: '#ff77cb',
    accent: '#ffd071',
    speed: 16,
    orbScale: 1.12,
  },
  fear: {
    gradient: 'from-[#051322] via-[#0c3254] to-[#071025]',
    glow: '#67f0ff',
    accent: '#8ba7ff',
    speed: 11,
    orbScale: 0.95,
  },
  anger: {
    gradient: 'from-[#29070b] via-[#5f0f17] to-[#2a090e]',
    glow: '#ff6948',
    accent: '#ffb070',
    speed: 9,
    orbScale: 1.2,
  },
};

export const thoughts = [
  { id: 't1', title: 'Luminous Echo', subtitle: 'Visual Thought', description: 'A recurring image of city lights under rain, often tied to relief after uncertainty.', mood: 'calm', intensity: 58, x: 17, y: 27, size: 135, depth: 1.2, blur: 0, linkIds: ['t4', 't8'], tags: ['visual', 'memory'] },
  { id: 't2', title: 'Unsent Voice', subtitle: 'Lingering Signal', description: 'Words rehearsed but never spoken, generating social hesitation and caution.', mood: 'fear', intensity: 76, x: 36, y: 54, size: 120, depth: 1.4, blur: 1, linkIds: ['t11', 't7'], tags: ['social', 'verbal'] },
  { id: 't3', title: 'Sunburst Laugh', subtitle: 'Emotional Spark', description: 'A sudden burst of joy triggered by shared humor and a feeling of belonging.', mood: 'joy', intensity: 82, x: 61, y: 33, size: 150, depth: 1.1, blur: 0, linkIds: ['t9', 't14'], tags: ['joy', 'connection'] },
  { id: 't4', title: 'Red Static', subtitle: 'Stress Fragment', description: 'An overloaded sequence where priorities collide and impatience rises sharply.', mood: 'anger', intensity: 88, x: 26, y: 69, size: 128, depth: 1.35, blur: 2, linkIds: ['t1', 't6'], tags: ['stress', 'pressure'] },
  { id: 't5', title: 'Ocean Silence', subtitle: 'Deep Drift', description: 'Breathing slows in this scene; attention narrows to gentle waves and stillness.', mood: 'calm', intensity: 44, x: 50, y: 18, size: 118, depth: 1.5, blur: 1, linkIds: ['t12'], tags: ['calm', 'sensory'] },
  { id: 't6', title: 'Fracture Loop', subtitle: 'Conflict Replay', description: 'An argument replayed with altered outcomes, intensifying urgency and frustration.', mood: 'anger', intensity: 93, x: 73, y: 62, size: 160, depth: 1.05, blur: 0, linkIds: ['t4', 't13'], tags: ['conflict', 'loop'] },
  { id: 't7', title: 'Cold Corridor', subtitle: 'Threat Model', description: 'A narrow hallway dream where every sound feels amplified and uncertain.', mood: 'fear', intensity: 71, x: 82, y: 40, size: 112, depth: 1.6, blur: 2, linkIds: ['t2'], tags: ['dream', 'threat'] },
  { id: 't8', title: 'Soft Archive', subtitle: 'Memory Cluster', description: 'Faces and objects blend into a warm collage of safe, quiet afternoons.', mood: 'joy', intensity: 52, x: 14, y: 52, size: 140, depth: 1.1, blur: 0, linkIds: ['t1', 't10'], tags: ['memory', 'family'] },
  { id: 't9', title: 'Pulse Equation', subtitle: 'Analytical Thread', description: 'Logic and intuition align for a brief moment of confident clarity.', mood: 'joy', intensity: 67, x: 43, y: 76, size: 122, depth: 1.35, blur: 1, linkIds: ['t3', 't15'], tags: ['logic', 'clarity'] },
  { id: 't10', title: 'Mist Window', subtitle: 'Reflective Lens', description: 'An introspective thought stream where identity feels malleable and fluid.', mood: 'calm', intensity: 47, x: 66, y: 16, size: 134, depth: 1.24, blur: 1, linkIds: ['t8'], tags: ['reflection', 'identity'] },
  { id: 't11', title: 'Alarm Bloom', subtitle: 'Body Signal', description: 'Sudden tension in chest and shoulders, signaling heightened uncertainty.', mood: 'fear', intensity: 79, x: 30, y: 36, size: 116, depth: 1.5, blur: 2, linkIds: ['t2'], tags: ['anxiety', 'somatic'] },
  { id: 't12', title: 'Quiet Orbit', subtitle: 'Attention Field', description: 'Awareness rotates around one meaningful memory and steadies emotional noise.', mood: 'calm', intensity: 39, x: 54, y: 56, size: 145, depth: 1.08, blur: 0, linkIds: ['t5', 't16'], tags: ['focus', 'anchor'] },
  { id: 't13', title: 'Scorched Reply', subtitle: 'Defensive Reflex', description: 'A protective reaction that appears before reason can intervene.', mood: 'anger', intensity: 85, x: 89, y: 68, size: 121, depth: 1.45, blur: 1, linkIds: ['t6'], tags: ['defense', 'reactive'] },
  { id: 't14', title: 'Skyline Bloom', subtitle: 'Future Projection', description: 'An optimistic projection of tomorrow with vivid color and expansive space.', mood: 'joy', intensity: 74, x: 76, y: 24, size: 152, depth: 1.16, blur: 0, linkIds: ['t3'], tags: ['future', 'hope'] },
  { id: 't15', title: 'Distant Siren', subtitle: 'Alert Echo', description: 'Threat anticipation ripples under focus, creating intermittent distraction.', mood: 'fear', intensity: 64, x: 58, y: 84, size: 112, depth: 1.53, blur: 2, linkIds: ['t9'], tags: ['alert', 'caution'] },
  { id: 't16', title: 'Velvet Dawn', subtitle: 'Recovery Thread', description: 'A healing sensation appears after release, restoring warmth and balance.', mood: 'calm', intensity: 51, x: 20, y: 82, size: 138, depth: 1.22, blur: 1, linkIds: ['t12'], tags: ['recovery', 'balance'] },
];

export const memories = [
  { id: 'm1', title: 'Neon Rain Platform', timestamp: '2 hours ago', mood: 'calm', age: 0.05, summary: 'Waiting under station lights with no rush to be anywhere.', dream: false, painful: false, visual: true },
  { id: 'm2', title: 'Festival Flash', timestamp: '1 day ago', mood: 'joy', age: 0.1, summary: 'Fireworks reflected in glass and everyone shouting with delight.', dream: false, painful: false, visual: true },
  { id: 'm3', title: 'Night Corridor Dream', timestamp: '3 days ago', mood: 'fear', age: 0.16, summary: 'A looping hallway and distant metallic footsteps.', dream: true, painful: false, visual: true },
  { id: 'm4', title: 'Broken Call', timestamp: '1 week ago', mood: 'anger', age: 0.26, summary: 'An interrupted conversation that became a misunderstanding.', dream: false, painful: true, visual: false },
  { id: 'm5', title: 'Quiet Rooftop', timestamp: '2 weeks ago', mood: 'calm', age: 0.35, summary: 'Wind, skyline, and a long breath after a heavy day.', dream: false, painful: false, visual: true },
  { id: 'm6', title: 'Amber Classroom', timestamp: '1 month ago', mood: 'joy', age: 0.45, summary: 'A mentor’s words unlocked confidence.', dream: false, painful: false, visual: false },
  { id: 'm7', title: 'Hospital Corridor', timestamp: '4 months ago', mood: 'fear', age: 0.62, summary: 'Cold lights and the ache of uncertainty.', dream: false, painful: true, visual: true },
  { id: 'm8', title: 'Scarlet Argument', timestamp: '8 months ago', mood: 'anger', age: 0.73, summary: 'Too much pressure, not enough listening.', dream: false, painful: true, visual: false },
  { id: 'm9', title: 'Childhood Garden Dream', timestamp: '2 years ago', mood: 'joy', age: 0.85, summary: 'Flowers that glowed and spoke in soft tones.', dream: true, painful: false, visual: true },
  { id: 'm10', title: 'Blue Room Memory', timestamp: '5 years ago', mood: 'calm', age: 0.95, summary: 'A still room, old books, and the sound of rain.', dream: false, painful: false, visual: true },
];
