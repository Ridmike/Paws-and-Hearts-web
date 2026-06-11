'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/common';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pets', href: '/pets' },
    // { name: 'Shelter Info', href: '/shelter' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#92400E]">Paws & Hearts</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  isActive 
                    ? 'text-[#92400E] border-[#92400E] font-semibold' 
                    : 'text-zinc-600 border-transparent hover:text-[#92400E]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
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
