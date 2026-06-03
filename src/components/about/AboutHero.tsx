import Image from 'next/image';
import { Button } from '@/components/common';
import { aboutHeroImage } from '@/data/about';

const AboutHero = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0D9488]">
              Our Mission
            </span>
            <h1 className="text-4xl font-bold leading-tight text-[#0F172A] md:text-5xl">
              Every heartbeat deserves a{' '}
              <span className="text-primary">loving home.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#334155] md:text-lg">
              At Paws & Hearts, we believe that the bond between humans and animals changes
              lives. We are dedicated to rescuing, rehabilitating, and rehoming pets in need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" className="rounded-xl font-bold">
                Support Our Cause
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-[#3B82F6] font-bold text-[#3B82F6] hover:bg-[#3B82F6]/5"
              >
                Watch Our Story
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:aspect-[5/4]">
            <Image
              src={aboutHeroImage}
              alt="Volunteer holding a rescue dog"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
