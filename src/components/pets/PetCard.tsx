import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/common';

interface PetCardProps {
  name: string;
  breed: string;
  age: string;
  imageUrl: string;
  tags?: string[];
  status?: 'Available' | 'Adopted' | 'Playful';
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
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-zinc-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Status Badge */}
        {status && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
            status === 'Available' ? 'bg-[#22C55E] text-white' : 
            status === 'Playful' ? 'bg-[#F97316] text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            {status === 'Available' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
            {status}
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm text-zinc-900 hover:bg-white transition-colors shadow-sm">
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-zinc-600'}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-[#0F172A]">{name}</h3>
        </div>
        
        <p className="text-[#92400E] text-sm font-medium mb-4">
          {breed} • {age}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-[#EFF6FF] text-[#1E40AF] text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <Button variant="outline" className="w-full rounded-2xl border-[#92400E] text-[#92400E] hover:bg-[#92400E]/5">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
