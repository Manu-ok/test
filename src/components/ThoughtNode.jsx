import { motion } from 'framer-motion';

function ThoughtNode({ thought, active, dimmed, theme, onSelect, onHover }) {
  return (
    <motion.button
      type="button"
      onHoverStart={() => onHover(thought.id)}
      onHoverEnd={() => onHover(null)}
      onClick={() => onSelect(thought)}
      className="group absolute rounded-full border border-white/20 bg-white/10 text-left backdrop-blur-xl transition-all"
      style={{
        left: `${thought.x}%`,
        top: `${thought.y}%`,
        width: thought.size,
        height: thought.size,
        filter: `blur(${thought.blur}px)`,
        opacity: dimmed ? 0.35 : 0.92,
        boxShadow: active ? `0 0 34px ${theme.glow}` : `0 0 14px ${theme.accent}66`,
      }}
      animate={{ y: [0, -8 * thought.depth, 0], x: [0, 5 * thought.depth, 0], scale: active ? 1.09 : 1 }}
      transition={{ duration: 8 + thought.depth * 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white/80 transition group-hover:text-white">
        <p className="text-xs uppercase tracking-[0.15em] text-white/60">{thought.subtitle}</p>
        <p className="mt-1 text-sm font-semibold leading-tight">{thought.title}</p>
      </div>
    </motion.button>
  );
}

export default ThoughtNode;
