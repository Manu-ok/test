import { AnimatePresence, motion } from 'framer-motion';

function DetailModal({ item, onClose, thoughtsById }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            className="glass-panel relative w-full max-w-xl rounded-3xl p-6 text-white"
          >
            <button type="button" className="absolute right-4 top-4 rounded-full border border-white/30 px-2 py-1 text-xs" onClick={onClose}>Close</button>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/55">{item.subtitle || item.timestamp}</p>
            <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm text-white/80">{item.description || item.summary}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/60">Emotional state · {item.mood}</p>
            {'linkIds' in item && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.linkIds.map((id) => (
                  <span key={id} className="rounded-full border border-white/25 bg-white/10 px-2 py-1 text-xs text-white/75">{thoughtsById[id]?.title || id}</span>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DetailModal;
