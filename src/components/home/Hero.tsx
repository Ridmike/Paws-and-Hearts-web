import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/common';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1444212477490-ca407925329e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwaW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]">
      <Image
        src={HERO_IMAGE}
        alt="Golden retriever puppy and kitten ready for adoption"
        fill
        priority
        className="object-cover object-[center_30%] sm:object-center"
        sizes="100vw"
      />

      {/* Light overlay on the left so text stays readable over the photo */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/20 via-[#F8FAFC]/60 to-[#F8FAFC]/25 sm:via-[#F8FAFC]/75 sm:to-transparent"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto flex min-h-[520px] items-center px-4 sm:min-h-[580px] lg:min-h-[640px]">
        <div className="flex max-w-xl flex-col gap-6 py-16 sm:py-20">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl">
            Find Your New Best Friend
          </h1>
          <p className="text-base leading-relaxed text-[#334155] md:text-lg">
            Connecting loving families with pets in need of a forever home. Start your
            adoption journey today with trusted local shelters.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/pets">
              <Button
                variant="primary"
                size="lg"
                className="rounded-xl px-8 font-bold shadow-md"
              >
                View All Pets
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-2 border-[#0F172A] bg-white/40 px-8 font-semibold text-[#0F172A] backdrop-blur-sm hover:bg-white/70"
              >
                How it Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
