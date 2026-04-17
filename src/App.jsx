import { useEffect, useMemo, useState } from 'react';
import { emotionThemes, memories, thoughts } from './data/mindData';
import BackgroundScene from './components/BackgroundScene';
import ParticleLayer from './components/ParticleLayer';
import HeaderBar from './components/HeaderBar';
import EmotionOrb from './components/EmotionOrb';
import ThoughtNetwork from './components/ThoughtNetwork';
import MemoryStream from './components/MemoryStream';
import ControlPanel from './components/ControlPanel';
import DetailModal from './components/DetailModal';

const defaultFilters = { hideBad: false, dreamOnly: false, visualOnly: false, softMode: true };

function App() {
  const [currentEmotion, setCurrentEmotion] = useState('calm');
  const [selectedThought, setSelectedThought] = useState(null);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(defaultFilters);
  const [hoveredThoughtId, setHoveredThoughtId] = useState(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const theme = emotionThemes[currentEmotion];

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x, y });
    };
    const onEsc = (e) => e.key === 'Escape' && (setSelectedThought(null), setSelectedMemory(null));
    window.addEventListener('mousemove', onMove);
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('keydown', onEsc);
    };
  }, []);

  const filteredThoughts = useMemo(() => {
    return thoughts.filter((t) => {
      const queryPass = !searchQuery || [t.title, t.subtitle, ...t.tags].join(' ').toLowerCase().includes(searchQuery.toLowerCase());
      const visualPass = !filters.visualOnly || t.tags.includes('visual');
      return queryPass && visualPass;
    });
  }, [searchQuery, filters.visualOnly]);

  const filteredMemories = useMemo(() => {
    return memories.filter((m) => {
      const queryPass = !searchQuery || [m.title, m.summary].join(' ').toLowerCase().includes(searchQuery.toLowerCase());
      const hideBadPass = !filters.hideBad || !m.painful;
      const dreamPass = !filters.dreamOnly || m.dream;
      return queryPass && hideBadPass && dreamPass;
    });
  }, [searchQuery, filters.hideBad, filters.dreamOnly]);

  const intensityLevel = useMemo(() => {
    const source = selectedThought?.intensity || (selectedMemory ? 30 + (1 - selectedMemory.age) * 70 : 52);
    return filters.softMode ? source * 0.85 : source;
  }, [selectedThought, selectedMemory, filters.softMode]);

  const thoughtsById = useMemo(() => Object.fromEntries(thoughts.map((t) => [t.id, t])), []);

  const handleSelectThought = (thought) => {
    setSelectedMemory(null);
    setSelectedThought(thought);
    setCurrentEmotion(thought.mood);
  };

  const handleSelectMemory = (memory) => {
    setSelectedThought(null);
    setSelectedMemory(memory);
    setCurrentEmotion(memory.mood);
  };

  const resetEmotion = () => {
    setCurrentEmotion('calm');
    setSelectedThought(null);
    setSelectedMemory(null);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setFilters(defaultFilters);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <BackgroundScene theme={theme} parallax={parallax} />
      <ParticleLayer theme={theme} />
      <div
        className="relative z-10 min-h-screen"
        style={{ transform: `translate3d(${parallax.x * 7}px, ${parallax.y * 7}px, 0)` }}
      >
        <HeaderBar emotion={currentEmotion} intensity={intensityLevel} />

        <ControlPanel
          filters={filters}
          setFilters={setFilters}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onResetEmotion={resetEmotion}
          onClearFilters={clearFilters}
        />

        <EmotionOrb theme={theme} intensity={intensityLevel} selectedMood={selectedThought?.mood || selectedMemory?.mood || currentEmotion} />

        <section className="relative px-2 pb-48 pt-24 md:px-8">
          <ThoughtNetwork
            thoughts={filteredThoughts}
            selectedThought={selectedThought}
            onSelectThought={handleSelectThought}
            hoveredThoughtId={hoveredThoughtId}
            onHoverThought={setHoveredThoughtId}
            theme={theme}
          />
        </section>

        <MemoryStream memories={filteredMemories} onSelectMemory={handleSelectMemory} />
      </div>

      <DetailModal item={selectedThought || selectedMemory} onClose={() => { setSelectedThought(null); setSelectedMemory(null); }} thoughtsById={thoughtsById} />
    </main>
  );
}

export default App;
