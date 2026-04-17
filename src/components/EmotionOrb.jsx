import { motion } from 'framer-motion';

function EmotionOrb({ theme, intensity, selectedMood }) {
  const scaleBoost = 0.9 + intensity / 140;

  return (
    <div className="pointer-events-none absolute left-1/2 top-[44%] z-10 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="relative h-48 w-48 rounded-full md:h-64 md:w-64"
        style={{ background: `radial-gradient(circle at 30% 30%, ${theme.accent}, ${theme.glow} 55%, transparent 75%)` }}
        animate={{ scale: [scaleBoost, scaleBoost * theme.orbScale, scaleBoost], rotate: [0, 4, -4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-6 rounded-full border border-white/25 backdrop-blur-sm" />
        <div className="absolute inset-10 rounded-full border border-white/20" />
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/85">
          {selectedMood || 'neutral'}
        </div>
      </motion.div>
    </div>
  );
}

export default EmotionOrb;
