'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/work', en: 'Work', kn: 'ಕೆಲಸ' },
  { href: '/studio', en: 'Studio', kn: 'ಸ್ಟುಡಿಯೋ' },
  { href: '/contact', en: 'Contact', kn: 'ಸಂಪರ್ಕ' },
];

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F7F4]/90 backdrop-blur-sm border-b border-[#1A1A18]/[0.08]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Amber Collective Home">
          <Image
            src="/brand/amber.png"
            alt="Amber Collective"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-[#1A1A18] font-medium'
                    : 'text-[#8C8C88] hover:text-[#1A1A18]'
                }`}
              >
                {t(link.en, link.kn)}
              </Link>
            );
          })}

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
            className="text-xs tracking-widest uppercase border border-[#8C8C88] px-3 py-1 rounded-full text-[#8C8C88] hover:border-[#1A1A18] hover:text-[#1A1A18] transition-colors duration-200"
            aria-label={lang === 'en' ? 'Switch to Kannada' : 'Switch to English'}
          >
            {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px bg-[#1A1A18] transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-[#1A1A18] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#1A1A18] transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-[#F9F7F4] border-t border-[#1A1A18]/10 px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl tracking-widest uppercase text-[#1A1A18]"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.en, link.kn)}
            </Link>
          ))}
          <button
            onClick={() => { setLang(lang === 'en' ? 'kn' : 'en'); setMenuOpen(false); }}
            className="self-start text-xs tracking-widest uppercase border border-[#8C8C88] px-3 py-1 rounded-full text-[#8C8C88]"
          >
            {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
          </button>
        </div>
      )}
    </header>
  );
}
