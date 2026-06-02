import React from 'react';
import { PawPrint, HeartHandshake, Building2 } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <PawPrint className="w-8 h-8 text-[#92400E]" />,
      number: '1,200+',
      label: 'PETS ADOPTED'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#22C55E]" />,
      number: '450+',
      label: 'ACTIVE VOLUNTEERS'
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#3B82F6]" />,
      number: '15+',
      label: 'PARTNER SHELTERS'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 rounded-3xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-[#0F172A] mb-1">{stat.number}</div>
              <div className="text-xs font-bold text-zinc-400 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
