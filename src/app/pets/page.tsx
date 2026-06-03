'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { PetCard, PetFilters, Pagination } from '@/components/pets';
import {
  allPets,
  defaultPetFilters,
  filterPets,
  getUniqueBreeds,
  type PetFiltersState,
} from '@/data/pets';

const PetsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<PetFiltersState>(defaultPetFilters);
  const itemsPerPage = 8;

  const breeds = useMemo(() => getUniqueBreeds(), []);

  const filteredPets = useMemo(
    () => filterPets(allPets, filters),
    [filters]
  );

  const totalCount = filteredPets.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / itemsPerPage));

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visiblePets = filteredPets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto flex flex-col gap-12 px-4 py-16">
        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="text-4xl font-bold text-[#0F172A]">Find Your New Best Friend</h1>
          <p className="font-medium leading-relaxed text-zinc-500">
            Every pet here has a story and a heart full of love waiting to be shared.
            Browse our residents and find the one that completes your family.
          </p>
        </div>

        <PetFilters
          filters={filters}
          breeds={breeds}
          resultCount={totalCount}
          onFiltersChange={setFilters}
        />

        {visiblePets.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visiblePets.map((pet) => (
              <PetCard key={pet.slug} {...pet} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-16 text-center">
            <p className="text-lg font-bold text-[#0F172A]">No pets match your filters</p>
            <p className="mt-2 text-sm text-zinc-500">
              Try a different search term or clear your filters to see more residents.
            </p>
          </div>
        )}

        {totalCount > 0 && (
          <Pagination
            currentPage={currentPage}
            totalCount={totalCount}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default PetsPage;
