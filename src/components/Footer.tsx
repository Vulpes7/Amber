'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1A1A18]/10 bg-[#F9F7F4] mt-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-3">Amber Collective</p>
          <p className="text-sm text-[#8C8C88]">
            {t('Architecture & Interior Design', 'ವಾಸ್ತುಶಿಲ್ಪ & ಒಳಾಂಗಣ ವಿನ್ಯಾಸ')}
          </p>
          <p className="text-sm text-[#8C8C88] mt-1">
            {t('Bangalore, India', 'ಬೆಂಗಳೂರು, ಭಾರತ')}
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-3">
            {t('Navigate', 'ನ್ಯಾವಿಗೇಟ್')}
          </p>
          <ul className="flex flex-col gap-2">
            {[
              { href: '/work', en: 'Work', kn: 'ಕೆಲಸ' },
              { href: '/studio', en: 'Studio', kn: 'ಸ್ಟುಡಿಯೋ' },
              { href: '/contact', en: 'Contact', kn: 'ಸಂಪರ್ಕ' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#8C8C88] hover:text-[#1A1A18] transition-colors"
                >
                  {t(link.en, link.kn)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-3">
            {t('Enquiries', 'ವಿಚಾರಣೆಗಳು')}
          </p>
          <a
            href="mailto:hello@ambercollective.in"
            className="text-sm text-[#8C8C88] hover:text-[#1A1A18] transition-colors"
          >
            hello@ambercollective.in
          </a>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pb-8 flex items-center justify-between text-xs text-[#8C8C88]">
        <span>© {year} Amber Collective</span>
        <span className="tracking-widest uppercase">{t('Bangalore, India', 'ಬೆಂಗಳೂರು, ಭಾರತ')}</span>
      </div>
    </footer>
  );
}
