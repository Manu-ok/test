import { motion } from 'framer-motion';

function BackgroundScene({ theme, parallax }) {
  return (
    <div className={`pointer-events-none fixed inset-0 bg-gradient-to-br ${theme.gradient} transition-[background] duration-1000`}>
      <motion.div
        className="absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: theme.glow, opacity: 0.4 }}
        animate={{ x: parallax.x * 30, y: parallax.y * 30, scale: [1, 1.2, 1] }}
        transition={{ duration: theme.speed, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-6 top-24 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: theme.accent, opacity: 0.35 }}
        animate={{ x: -parallax.x * 25, y: -parallax.y * 25, scale: [1.2, 1, 1.2] }}
        transition={{ duration: theme.speed + 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.09),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
  );
}

export default BackgroundScene;
