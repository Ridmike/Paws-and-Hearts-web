import { Heart } from 'lucide-react';

const MissionCard = () => {
  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Heart className="h-5 w-5 fill-[#92400E] text-[#92400E]" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#92400E]">
          The Why
        </span>
      </div>
      <h2 className="mb-4 text-2xl font-bold text-[#0F172A]">Our Mission</h2>
      <p className="leading-relaxed text-[#334155]">
        Founded on the principle of &ldquo;Compassion in Action,&rdquo; our mission is to
        provide immediate medical care, behavioral training, and community education. We
        work tirelessly to ensure every animal in our care receives the dignity, safety,
        and love they deserve while we search for their forever families.
      </p>
    </article>
  );
};

export default MissionCard;
