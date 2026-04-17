function ToggleSwitch({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between gap-3 text-sm text-white/80">
      <span>{label}</span>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-12 rounded-full border transition ${checked ? 'border-white/50 bg-white/30' : 'border-white/20 bg-black/30'}`}
      >
        <span className={`absolute top-0.5 h-4.5 w-4.5 rounded-full bg-white transition ${checked ? 'left-7' : 'left-1'}`} />
      </button>
    </label>
  );
}

export default ToggleSwitch;
