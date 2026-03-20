'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

const CATEGORIES = ['All', 'Interior', 'Architecture', 'Landscapes'];

export default function WorkClient() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const categoryKn: Record<string, string> = {
    All: 'ಎಲ್ಲಾ',
    Interior: 'ಒಳಾಂಗಣ',
    Architecture: 'ವಾಸ್ತುಶಿಲ್ಪ',
    Landscapes: 'ಭೂದೃಶ್ಯ',
  };

  return (
    <div className="pt-24">
      {/* Page Header */}
      <header className="max-w-screen-xl mx-auto px-6 md:px-12 pt-12 pb-12">
        <h1 className="text-4xl md:text-6xl font-light mb-8">
          {t('Work', 'ಕೆಲಸ')}
        </h1>

        {/* Category Filter */}
        <div className="flex items-center gap-6" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-widest uppercase pb-1 border-b transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-[#1A1A18] text-[#1A1A18]'
                  : 'border-transparent text-[#8C8C88] hover:text-[#1A1A18]'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {t(cat, categoryKn[cat])}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24" aria-label="Project grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} priority={i < 3} />
          ))}
        </div>
      </section>
    </div>
  );
}
