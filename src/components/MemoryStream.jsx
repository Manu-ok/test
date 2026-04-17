import { motion } from 'framer-motion';

function MemoryCard({ memory, onSelect }) {
  const scale = 1.05 - memory.age * 0.35;
  const opacity = 1 - memory.age * 0.55;
  const blur = Math.round(memory.age * 2.5);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(memory)}
      className="relative min-w-64 rounded-2xl border border-white/20 bg-white/10 p-4 text-left backdrop-blur-xl"
      style={{ transform: `scale(${scale})`, opacity, filter: `blur(${blur}px)` }}
      whileHover={{ y: -6, scale: scale + 0.03 }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">{memory.timestamp}</p>
      <h3 className="mt-2 text-sm font-semibold text-white">{memory.title}</h3>
      <p className="mt-1 text-xs text-white/70">{memory.summary}</p>
      <span className="mt-3 inline-block rounded-full border border-white/20 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">{memory.mood}</span>
    </motion.button>
  );
}

function MemoryStream({ memories, onSelectMemory }) {
  return (
    <section className="absolute bottom-0 left-0 right-0 z-20 px-3 pb-4 md:px-6">
      <div className="glass-panel rounded-3xl p-3">
        <div className="mb-2 px-2 text-xs font-mono uppercase tracking-[0.3em] text-white/50">Memory Stream</div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} onSelect={onSelectMemory} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemoryStream;
