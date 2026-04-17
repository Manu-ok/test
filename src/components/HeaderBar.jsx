function HeaderBar({ emotion, intensity }) {
  return (
    <header className="pointer-events-none absolute left-4 right-4 top-4 z-30 md:left-8 md:right-8">
      <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.25em] text-slate-200 md:px-6">
        <span className="font-mono">Mind Explorer · Consciousness Lab</span>
        <span className="font-mono">Emotion: {emotion} · Intensity: {Math.round(intensity)}</span>
      </div>
    </header>
  );
}

export default HeaderBar;
