import Link from 'next/link';
import { teamMembers } from '@/data/about';
import TeamCard from './TeamCard';

const TeamSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-[#0F172A] md:text-4xl">
              Hearts Behind the Paws
            </h2>
            <p className="text-base leading-relaxed text-zinc-500 md:text-lg">
              Our team of dedicated animal lovers, medical professionals, and behavioral
              experts work day and night to ensure our residents are happy and healthy.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-base font-semibold text-primary hover:underline lg:pt-2"
          >
            Join Our Team →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
