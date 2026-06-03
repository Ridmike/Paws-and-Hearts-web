'use client';

import React, { useState } from 'react';
import { PetCard, PetFilters, Pagination } from '@/components/pets';
import { allPets } from '@/data/pets';

const PetsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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
