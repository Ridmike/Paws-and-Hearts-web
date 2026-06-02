import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/common';

const Mission = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Badge */}
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=1000&auto=format&fit=crop"
                alt="Shelter Mission"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            {/* 10+ Years Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-primary p-6 rounded-3xl shadow-xl flex flex-col gap-1 min-w-[180px]">
              <span className="text-3xl font-extrabold text-white">10+ Years</span>
              <span className="text-sm font-medium text-white/90 leading-tight">Of Dedicated Service</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Our Mission</span>
              <h2 className="text-4xl font-bold text-[#0F172A] leading-tight">
                More Than Just a Shelter
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                At Paws & Hearts, we believe every animal deserves a second chance. 
                Founded in 2014, our mission has been to provide a safe haven for 
                displaced pets while working tirelessly to find them the permanent homes 
                they deserve. We focus on medical care, behavioral rehabilitation, and 
                finding the perfect match for every family.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                'Comprehensive Veterinary Screening',
                'Behavioral Training & Assessments',
                'Lifetime Support for Adopters'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                  <span className="text-base font-bold text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Button variant="secondary" className="px-8 py-4 rounded-xl font-bold">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
