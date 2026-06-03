import { journeySteps } from '@/data/about';
import JourneyStep from './JourneyStep';

const AdoptionJourney = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0F172A] md:text-4xl">
            Your Journey to Joy
          </h2>
          <p className="text-base leading-relaxed text-zinc-500 md:text-lg">
            Finding your new best friend is an exciting adventure. Here is how we make it
            happen, step by simple step.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-[#BFDBFE] md:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {journeySteps.map((step) => (
              <JourneyStep key={step.title} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionJourney;
