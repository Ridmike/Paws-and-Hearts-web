import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const reviews = [
    {
      name: 'David Chen',
      role: "Adopted 'Duke'",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      quote: "The adoption process was so seamless. The staff really knew Duke's personality and made sure he was the right fit for my apartment. We couldn't be happier!"
    },
    {
      name: 'Sarah Miller',
      role: "Adopted 'Bella'",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      quote: "Bella has brought so much joy to our home. Paws & Hearts provided all her medical history and even called to check in a week later. They truly care."
    },
    {
      name: 'Mark Thompson',
      role: "Adopted 'Oliver'",
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      quote: "Volunteering here first gave me the chance to meet Oliver. This shelter is incredibly well-run and clean. A model for all rescue organizations."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-[#0F172A]">Happy Tails</h2>
          <p className="text-zinc-500">See the beautiful connections made through our shelter system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-50 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 leading-tight">{review.name}</h4>
                  <p className="text-xs text-[#92400E] font-medium">{review.role}</p>
                </div>
              </div>
              <p className="text-zinc-600 italic leading-relaxed text-sm">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
