import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/common';

interface PetCardProps {
  name: string;
  breed: string;
  age: string;
  imageUrl: string;
  tags?: Array<{ label: string; color: 'green' | 'blue' | 'orange' | 'gray' }>;
  status?: string;
  isFavorite?: boolean;
}

const PetCard: React.FC<PetCardProps> = ({
  name,
  breed,
  age,
  imageUrl,
  tags = [],
  status,
  isFavorite = false,
}) => {
  const tagColors = {
    green: 'bg-[#22C55E] text-white',
    blue: 'bg-[#3B82F6] text-white',
    orange: 'bg-[#F97316] text-white',
    gray: 'bg-zinc-100 text-zinc-600',
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-zinc-100 flex flex-col h-full p-3">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Top left tag */}
        {tags.length > 0 && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold ${tagColors[tags[0].color]}`}>
            {tags[0].label}
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute bottom-3 right-3 p-2 rounded-full bg-white text-zinc-900 transition-colors shadow-sm">
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-zinc-600'}`} />
        </button>
      </div>

      {/* Content */}
      <div className="pt-4 px-2 pb-2 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#0F172A]">{name}</h3>
        <p className="text-zinc-500 text-xs font-medium mb-4">
          {age} • {breed}
        </p>

        {/* Action Button */}
        <div className="mt-auto">
          <Button variant="outline" className="w-full rounded-xl border-zinc-200 text-[#92400E] hover:bg-[#92400E]/5 py-2 text-xs font-semibold h-9">
            Meet {name}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
