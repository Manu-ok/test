import ThoughtNode from './ThoughtNode';

function ThoughtNetwork({ thoughts, selectedThought, onSelectThought, hoveredThoughtId, onHoverThought, theme }) {
  return (
    <section className="relative h-[58vh] w-full md:h-[65vh]">
      {thoughts.map((thought) => {
        const isActive = selectedThought?.id === thought.id || hoveredThoughtId === thought.id;
        const dimmed = hoveredThoughtId && hoveredThoughtId !== thought.id && !thought.linkIds.includes(hoveredThoughtId);
        return (
          <ThoughtNode
            key={thought.id}
            thought={thought}
            active={isActive}
            dimmed={dimmed}
            onSelect={onSelectThought}
            onHover={onHoverThought}
            theme={theme}
          />
        );
      })}
    </section>
  );
}

export default ThoughtNetwork;
