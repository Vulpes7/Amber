'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      aria-label={`View project: ${t(project.title, project.titleKn)}`}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-[#E8E4DF] aspect-[4/3]">
        <Image
          src={project.coverImage}
          alt={t(project.title, project.titleKn)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>

      {/* Meta */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium leading-snug group-hover:text-[#C8965A] transition-colors">
            {t(project.title, project.titleKn)}
          </h3>
          <p className="text-sm text-[#8C8C88] mt-1">
            {t(project.category, project.categoryKn)} · {project.year}
          </p>
        </div>
        <span className="text-xs text-[#8C8C88] uppercase tracking-widest mt-1 shrink-0">
          {project.id}
        </span>
      </div>
    </Link>
  );
}
