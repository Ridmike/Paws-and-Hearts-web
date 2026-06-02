import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/common';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#92400E]">Paws & Hearts</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-[#92400E] border-b-2 border-[#92400E] pb-1">Home</Link>
          <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-[#92400E] transition-colors">About</Link>
          <Link href="/pets" className="text-sm font-medium text-zinc-600 hover:text-[#92400E] transition-colors">Pets</Link>
          <Link href="/shelter" className="text-sm font-medium text-zinc-600 hover:text-[#92400E] transition-colors">Shelter Info</Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-600 hover:text-[#92400E] transition-colors">Contact</Link>
        </nav>

        {/* Action */}
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" className="rounded-xl px-5 text-sm font-bold">
            Adopt Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
