import { motion } from 'framer-motion';

const particles = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: 8 + Math.random() * 16,
  delay: Math.random() * 4,
}));

function ParticleLayer({ theme }) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: theme.accent,
            boxShadow: `0 0 14px ${theme.glow}`,
          }}
          animate={{ y: [-12, 15, -12], opacity: [0.15, 0.8, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default ParticleLayer;
