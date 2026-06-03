const VisionCard = () => {
  return (
    <article className="relative overflow-hidden rounded-3xl bg-primary p-8 shadow-sm">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
      <h2 className="mb-4 text-2xl font-bold text-white">Our Vision</h2>
      <p className="relative leading-relaxed text-white/95">
        To create a world where every companion animal is respected and cherished, and
        where the bond between pets and people is recognized as a fundamental pillar of a
        healthy community.
      </p>
    </article>
  );
};

export default VisionCard;
