'use client';

import React, { useState } from 'react';
import { PetCard, PetFilters, Pagination } from '@/components/pets';

const PetsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allPets = [
    {
      name: 'Cooper',
      age: '2 Years',
      breed: 'Golden Retriever',
      imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Luna',
      age: '4 Years',
      breed: 'Domestic Shorthair',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Oliver',
      age: '1 Year',
      breed: 'Terrier Mix',
      imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Duke',
      age: '8 Years',
      breed: 'Yellow Lab',
      imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Milo',
      age: '4 Months',
      breed: 'Tabby Kitten',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Bella',
      age: '3 Years',
      breed: 'Border Collie',
      imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Buster & Pip',
      age: '3 Months',
      breed: 'Beagle Mix',
      imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Cleo',
      age: '5 Years',
      breed: 'Siamese',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Shalow',
      age: '8 Years',
      breed: 'Yellow Lab',
      imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Miko',
      age: '4 Months',
      breed: 'Tabby Kitten',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Ana',
      age: '3 Years',
      breed: 'Border Collie',
      imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Buster',
      age: '3 Months',
      breed: 'Beagle Mix',
      imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    },
    {
      name: 'Soro',
      age: '5 Years',
      breed: 'Siamese',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
      tags: [{ label: 'Available', color: 'green' as const }],
    }
  ];

  const totalCount = allPets.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visiblePets = allPets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-4 py-16 flex flex-col gap-12">
        {/* Header content */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-[#0F172A]">Find Your New Best Friend</h1>
          <p className="text-zinc-500 leading-relaxed font-medium">
            Every pet here has a story and a heart full of love waiting to be shared. 
            Browse our residents and find the one that completes your family.
          </p>
        </div>

        {/* Filters */}
        <PetFilters />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visiblePets.map((pet, index) => (
            <PetCard key={index} {...pet} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination 
          currentPage={currentPage}
          totalCount={totalCount}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PetsPage;
