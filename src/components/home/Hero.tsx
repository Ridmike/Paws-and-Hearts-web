import React from 'react';
import { Button } from '@/components/common';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center bg-[#F8FAFC]">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="z-10 flex flex-col gap-6 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight">
            Find Your New <br />
            <span className="text-primary">Best Friend</span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Connecting loving families with pets in need of a forever home. 
            Start your adoption journey today with trusted local shelters.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button variant="primary" size="lg">
              View All Pets
            </Button>
            <Button variant="outline" size="lg" className="border-zinc-300 text-zinc-700 hover:bg-zinc-50">
              How it Works
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[500px] lg:h-[600px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop"
            alt="Happy Pets"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
