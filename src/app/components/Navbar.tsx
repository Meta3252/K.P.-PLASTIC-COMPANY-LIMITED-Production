'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#f8f5f0]/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-[#f8ca91]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img src="/LogoBesustain.png" className="h-20 w-auto object-contain" alt="Logo" />
          <div>
            <h1 className="text-[32px] md:text-[26px] font-serif font-bold text-[#5c4433]">Besustain</h1>
            <p className="text-[14px] md:text-[16px] text-[#d4af7f] uppercase ml-1 mt-1 tracking-[0.15em]">Company Limited</p>
          </div>
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu size={28} />
        </button>

        <div className={`flex-col md:flex md:flex-row md:items-center gap-y-3 md:gap-x-10 ${open ? 'flex' : 'hidden'}`}>
          {[
            { href: '/', label: 'หน้าแรก' },
            { href: '/about', label: 'เกี่ยวกับเรา' },
            { href: '/services', label: 'บริการ' },
            { href: '/contact', label: 'ติดต่อเรา' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-2 pb-1 text-lg font-medium tracking-wide transition-all duration-300
                ${pathname === item.href ? 'text-[#a37d58]' : 'text-[#6a4d38]'}
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
                ${pathname === item.href
                  ? 'after:w-full after:bg-[#ffd28a] after:shadow-[0_0_8px_#ffd28a]'
                  : 'after:w-0 after:bg-transparent hover:after:w-full hover:after:bg-[#ffd28a] hover:after:shadow-[0_0_8px_#ffd28a]'}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
