'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project, projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const { t } = useLanguage();

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="pt-16">
      {/* Hero */}
      <div className="relative w-full h-[70vh] min-h-[480px] bg-[#1A1A18]">
        <Image
          src={project.coverImage}
          alt={t(project.title, project.titleKn)}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A18]/40" />
      </div>

      {/* Title Block */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-12 pb-8">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-3">
              {t(project.category, project.categoryKn)} · {project.year} · {project.status === 'built' ? t('Built', 'ನಿರ್ಮಿತ') : t('Unbuilt', 'ಅನಿರ್ಮಿತ')}
            </p>
            <h1 className="text-3xl md:text-5xl font-light">
              {t(project.title, project.titleKn)}
            </h1>
          </div>
          <Link
            href="/work"
            className="text-xs tracking-widest uppercase text-[#8C8C88] hover:text-[#1A1A18] transition-colors mt-2"
          >
            ← {t('All Projects', 'ಎಲ್ಲಾ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು')}
          </Link>
        </div>
      </div>

      {/* Narrative + Facts */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pb-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2">
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#1A1A18]">
            {t(project.narrative, project.narrativeKn)}
          </p>
        </div>

        <aside aria-label="Project facts">
          <ul className="flex flex-col gap-6">
            {project.facts.map((fact) => (
              <li key={fact.label}>
                <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-1">{fact.label}</p>
                <p className="text-sm text-[#1A1A18]">{fact.value}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-16" aria-label="Project gallery">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.slice(1).map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-[#E8E4DF] overflow-hidden">
                <Image
                  src={src}
                  alt={`${t(project.title, project.titleKn)} — image ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <nav
        className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 border-t border-[#1A1A18]/10 flex justify-between items-center"
        aria-label="Project navigation"
      >
        {prevProject ? (
          <Link href={`/work/${prevProject.slug}`} className="group flex flex-col gap-1">
            <span className="text-xs tracking-widest uppercase text-[#8C8C88]">← {t('Previous', 'ಹಿಂದಿನ')}</span>
            <span className="text-base font-light group-hover:text-[#C8965A] transition-colors">
              {t(prevProject.title, prevProject.titleKn)}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {nextProject ? (
          <Link href={`/work/${nextProject.slug}`} className="group flex flex-col gap-1 text-right">
            <span className="text-xs tracking-widest uppercase text-[#8C8C88]">{t('Next', 'ಮುಂದಿನ')} →</span>
            <span className="text-base font-light group-hover:text-[#C8965A] transition-colors">
              {t(nextProject.title, nextProject.titleKn)}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
