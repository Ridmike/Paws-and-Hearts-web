import React from 'react';
import Link from 'next/link';
import { Mail, Camera, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[#92400E]">Paws & Hearts</h2>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
              Giving every tail a reason to wag since 2014. Join us in our mission to rescue and rehome pets in need.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-[#0F172A]">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/pets" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Find a Pet</Link></li>
              <li><Link href="/stories" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Success Stories</Link></li>
              <li><Link href="/shelters" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Shelter Directory</Link></li>
              <li><Link href="/how-to-adopt" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">How to Adopt</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-[#0F172A]">Get Involved</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/volunteer" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Volunteer</Link></li>
              <li><Link href="/donate" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Donate</Link></li>
              <li><Link href="/foster" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Foster a Pet</Link></li>
              <li><Link href="/sponsor" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Sponsor a Kennel</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-[#0F172A]">Legal</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/privacy" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-zinc-600 hover:text-[#92400E] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-zinc-400">
            © 2024 Paws & Hearts Shelter System. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-zinc-400 hover:text-[#92400E] transition-colors">
              <Award className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-[#92400E] transition-colors">
              <Camera className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-[#92400E] transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
