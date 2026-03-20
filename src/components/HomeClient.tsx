'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeClient() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 pt-24 pb-20 flex flex-col items-start gap-10">
        <div className="-ml-1">
          <Image
            src="/brand/amber-vector.png"
            alt="Amber Collective"
            width={300}
            height={120}
            className="w-[180px] md:w-[240px] lg:w-[300px] h-auto object-contain mb-6"
            priority
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            {t(
              'Architecture & Interiors, Bangalore',
              'ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಒಳಾಂಗಣ, ಬೆಂಗಳೂರು',
            )}
          </h1>
          <p className="text-lg md:text-xl font-light text-[#8C8C88] leading-relaxed">
            {t(
              'A contemporary studio creating considered spaces for discerning clients.',
              'ವಿವೇಕಶೀಲ ಗ್ರಾಹಕರಿಗಾಗಿ ಸೂಕ್ತ ಜಾಗಗಳನ್ನು ರಚಿಸುವ ಆಧುನಿಕ ಸ್ಟುಡಿಯೋ.',
            )}
          </p>
        </div>
        <Link
          href="/work"
          className="text-xs tracking-widest uppercase border-b border-[#1A1A18] pb-1 hover:text-[#C8965A] hover:border-[#C8965A] transition-colors duration-200"
        >
          {t('View Work', 'ಕೆಲಸ ವೀಕ್ಷಿಸಿ')} →
        </Link>
      </section>

      {/* Featured Projects */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24">
        <h2 className="text-xs tracking-widest uppercase text-[#8C8C88] mb-12">
          {t('Selected Work', 'ಆಯ್ದ ಕೆಲಸ')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} priority={i < 3} />
          ))}
        </div>
      </section>
    </div>
  );
}
