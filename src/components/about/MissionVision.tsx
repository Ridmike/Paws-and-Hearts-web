import MissionCard from './MissionCard';
import VisionCard from './VisionCard';

const MissionVision = () => {
  return (
    <section className="bg-[#EFF6FF] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <MissionCard />
          <VisionCard />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
