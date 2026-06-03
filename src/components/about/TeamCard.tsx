import Image from 'next/image';
import type { TeamMember } from '@/data/about';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#0F172A]">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500">{member.bio}</p>
      </div>
    </article>
  );
};

export default TeamCard;
