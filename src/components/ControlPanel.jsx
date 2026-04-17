import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ToggleSwitch from './ToggleSwitch';

function ControlPanel({ filters, setFilters, searchQuery, setSearchQuery, onResetEmotion, onClearFilters }) {
  const [open, setOpen] = useState(false);

  const panelBody = (
    <div className="space-y-4 p-4 text-white/85">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search thoughts / memories"
        className="w-full rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/50"
      />
      <ToggleSwitch label="Hide bad memories" checked={filters.hideBad} onChange={(v) => setFilters((s) => ({ ...s, hideBad: v }))} />
      <ToggleSwitch label="Show dreams only" checked={filters.dreamOnly} onChange={(v) => setFilters((s) => ({ ...s, dreamOnly: v }))} />
      <ToggleSwitch label="Isolate visual thoughts" checked={filters.visualOnly} onChange={(v) => setFilters((s) => ({ ...s, visualOnly: v }))} />
      <ToggleSwitch label="Soft mode" checked={filters.softMode} onChange={(v) => setFilters((s) => ({ ...s, softMode: v }))} />
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button type="button" onClick={onResetEmotion} className="rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-xs uppercase tracking-wider">Reset emotion</button>
        <button type="button" onClick={onClearFilters} className="rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-xs uppercase tracking-wider">Clear filters</button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="glass-panel absolute right-6 top-24 z-30 hidden w-80 rounded-2xl lg:block">
        <div className="px-4 pt-4 text-xs font-mono uppercase tracking-[0.3em] text-white/60">Deep Dive Controls</div>
        {panelBody}
      </aside>

      <div className="absolute bottom-36 right-4 z-30 lg:hidden">
        <button type="button" onClick={() => setOpen((o) => !o)} className="glass-panel rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">Controls</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="glass-panel absolute inset-x-4 bottom-24 z-40 rounded-2xl lg:hidden"
          >
            <div className="px-4 pt-4 text-xs font-mono uppercase tracking-[0.3em] text-white/60">Deep Dive Controls</div>
            {panelBody}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ControlPanel;
