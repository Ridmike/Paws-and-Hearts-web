'use client';

import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import type { PetFiltersState } from '@/data/pets';
import { defaultPetFilters } from '@/data/pets';

interface PetFiltersProps {
  filters: PetFiltersState;
  breeds: string[];
  resultCount: number;
  onFiltersChange: (filters: PetFiltersState) => void;
}

const inputClassName =
  'w-full rounded-xl border border-zinc-300 bg-white py-3 pl-12 pr-4 text-sm font-medium text-[#0F172A] placeholder:text-zinc-500 shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

const selectClassName =
  'appearance-none rounded-xl border border-zinc-300 bg-white py-3 pl-4 pr-10 text-sm font-medium text-[#0F172A] shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer';

const PetFilters = ({
  filters,
  breeds,
  resultCount,
  onFiltersChange,
}: PetFiltersProps) => {
  const updateFilter = <K extends keyof PetFiltersState>(
    key: K,
    value: PetFiltersState[K]
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange(defaultPetFilters);
  };

  const hasActiveFilters =
    filters.search.trim() ||
    filters.species ||
    filters.ageGroup ||
    filters.gender ||
    filters.breed;

  return (
    <div className="flex flex-col gap-6 [color-scheme:light]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative min-w-[300px] flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-600" />
          <input
            type="search"
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            placeholder="Search by name, breed, or location..."
            className={inputClassName}
            aria-label="Search pets"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              value={filters.species}
              onChange={(e) =>
                updateFilter('species', e.target.value as PetFiltersState['species'])
              }
              className={`${selectClassName} min-w-[120px]`}
              aria-label="Filter by species"
            >
              <option value="">All species</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
          </div>

          <div className="relative">
            <select
              value={filters.ageGroup}
              onChange={(e) =>
                updateFilter('ageGroup', e.target.value as PetFiltersState['ageGroup'])
              }
              className={`${selectClassName} min-w-[140px]`}
              aria-label="Filter by age"
            >
              <option value="">All ages</option>
              <option value="puppy-kitten">Puppy / Kitten</option>
              <option value="young">Young (1–2 years)</option>
              <option value="adult">Adult (3–7 years)</option>
              <option value="senior">Senior (8+ years)</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
          </div>

          <div className="relative">
            <select
              value={filters.gender}
              onChange={(e) =>
                updateFilter('gender', e.target.value as PetFiltersState['gender'])
              }
              className={`${selectClassName} min-w-[120px]`}
              aria-label="Filter by gender"
            >
              <option value="">All genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
          </div>

          <div className="relative">
            <select
              value={filters.breed}
              onChange={(e) => updateFilter('breed', e.target.value)}
              className={`${selectClassName} min-w-[160px]`}
              aria-label="Filter by breed"
            >
              <option value="">All breeds</option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-[#92400E] transition-colors hover:bg-zinc-50"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      <p className="text-sm font-semibold text-[#334155]">
        Showing {resultCount} {resultCount === 1 ? 'pet' : 'pets'}
      </p>

      <div className="h-px w-full bg-zinc-100" />
    </div>
  );
};

export default PetFilters;
