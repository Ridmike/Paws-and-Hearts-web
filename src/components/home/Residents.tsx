import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PetCard } from '@/components/pets';

const Residents = () => {
  const pets = [
    {
      name: 'Cooper',
      age: '2 Years',
      breed: 'Golden Retriever',
      imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Healthy', color: 'green' as const }],
    },
    {
      name: 'Luna',
      age: '1 Year',
      breed: 'Tabby Cat',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Friendly', color: 'blue' as const }],
    },
    {
      name: 'Buster',
      age: '4 Years',
      breed: 'Beagle',
      imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Playful', color: 'orange' as const }],
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-[#0F172A]">Meet Our Residents</h2>
            <p className="text-zinc-500">These lovable pets are ready to go home with you today.</p>
          </div>
          <Link href="/pets" className="flex items-center text-xs font-bold text-[#92400E] hover:underline">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet, index) => (
            <PetCard key={index} {...pet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Residents;
