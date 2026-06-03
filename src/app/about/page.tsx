import {
  AboutHero,
  AboutStatsBar,
  AdoptionJourney,
  MissionVision,
  TeamSection,
} from '@/components/about';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <MissionVision />
      <AdoptionJourney />
      <AboutStatsBar />
      <TeamSection />
    </div>
  );
}
