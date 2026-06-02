import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

const PetFilters = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search by name or breed..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-white pl-4 pr-10 py-3 rounded-xl border border-zinc-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[120px]">
              <option>Species</option>
              <option>Dog</option>
              <option>Cat</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="appearance-none bg-white pl-4 pr-10 py-3 rounded-xl border border-zinc-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[100px]">
              <option>Age</option>
              <option>Puppy/Kitten</option>
              <option>Young</option>
              <option>Adult</option>
              <option>Senior</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="appearance-none bg-white pl-4 pr-10 py-3 rounded-xl border border-zinc-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[100px]">
              <option>Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors text-sm font-bold text-[#92400E]">
            <SlidersHorizontal className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>
      <div className="h-px bg-zinc-100 w-full" />
    </div>
  );
};

export default PetFilters;
