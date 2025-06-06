'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top >= -100 && top < 200) {
            setActiveHash(`#${id}`);
            break;
          }
        }
      }
    };

    // Set on first load
    setActiveHash(window.location.hash || '#hero');

    // Listen on scroll
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-[#f8f5f0]/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-[#f8ca91]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/LogoBesustain.png"
            alt="SoftLuxury Logo"
            className="h-20 w-auto object-contain drop-shadow-md"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-[32px] md:text-[26px] font-serif font-bold text-[#5c4433] tracking-wide drop-shadow-sm">
              Besustain
            </h1>
            <p className="text-[14px] md:text-[16px] text-[#d4af7f] font-light tracking-[0.15em] uppercase ml-1 mt-1 drop-shadow-sm">
              Company Limited
            </p>
          </div>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#6a4d38] text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>

        {/* Menu */}
        <div className={`flex-col md:flex md:flex-row md:items-center gap-y-3 md:gap-x-10 ${open ? 'flex' : 'hidden'}`}>
          {[
            { href: '#hero', label: 'หน้าแรก' },
            { href: '#about', label: 'เกี่ยวกับเรา' },
            { href: '#services', label: 'บริการ' },
            { href: '#projects', label: 'ผลงานลูกค้า' },
            { href: '#contact', label: 'ติดต่อเรา' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative px-2 pb-1 text-lg font-medium tracking-wide transition-all duration-300
    ${activeHash === item.href ? 'text-[#a37d58]' : 'text-[#6a4d38]'}
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
    ${activeHash === item.href
                  ? 'after:w-full after:bg-[#ffd28a] after:shadow-[0_0_8px_#ffd28a]'
                  : 'after:w-0 after:bg-transparent hover:after:w-full hover:after:bg-[#ffd28a] hover:after:shadow-[0_0_8px_#ffd28a]'
                }
  `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
