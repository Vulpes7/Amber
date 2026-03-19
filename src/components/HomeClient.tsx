'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import { TEAM } from '@/data/team';
export default function HomeClient() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[600px] flex items-end pb-16 overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-[#1A1A18]">
          <Image
            src="/images/projects/double-height-living/01.jpg"
            alt="Amber Collective — Architecture & Interiors"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 w-full">
          {/* TODO: Replace /brand/amber-vector.png with the final exported vector-style PNG asset */}
          <Image
            src="/brand/amber-vector.png"
            alt="Amber Collective"
            width={300}
            height={100}
            className="w-[180px] md:w-[240px] lg:w-[300px] h-auto object-contain mb-6"
            priority
          />
          <p className="text-xs tracking-widest uppercase text-white/60 mb-4">
            {t('Bangalore, India', 'ಬೆಂಗಳೂರು, ಭಾರತ')}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight max-w-2xl">
            {t(
              'Architecture & Interiors for the considered life.',
              'ವಿಚಾರಶೀಲ ಜೀವನಕ್ಕಾಗಿ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಒಳಾಂಗಣ.'
            )}
          </h1>
          <div className="mt-10 flex items-center gap-8">
            <Link
              href="/work"
              className="text-sm tracking-widest uppercase text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors"
            >
              {t('View Work', 'ಕೆಲಸ ನೋಡಿ')}
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors"
            >
              {t('Start a Project', 'ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಾರಂಭಿಸಿ')}
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Statement */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32" aria-label="Studio statement">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-6">
            {t('Amber Collective', 'ಅಂಬರ್ ಕಲೆಕ್ಟಿವ್')}
          </p>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#1A1A18]">
            {t(
              'We design spaces that endure — where materiality, light, and proportion unite to create environments of quiet distinction.',
              'ನಾವು ಬಾಳಿಕೊಳ್ಳುವ ಜಾಗಗಳನ್ನು ವಿನ್ಯಾಸ ಮಾಡುತ್ತೇವೆ — ಅಲ್ಲಿ ವಸ್ತು, ಬೆಳಕು ಮತ್ತು ಅನುಪಾತ ಒಗ್ಗೂಡಿ ಶಾಂತ ವಿಶಿಷ್ಟತೆಯ ಪರಿಸರಗಳನ್ನು ರಚಿಸುತ್ತದೆ.'
            )}
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24" aria-label="Featured projects">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xs tracking-widest uppercase text-[#8C8C88]">
            {t('Selected Work', 'ಆಯ್ದ ಕೆಲಸ')}
          </h2>
          <Link
            href="/work"
            className="text-xs tracking-widest uppercase text-[#8C8C88] hover:text-[#1A1A18] transition-colors border-b border-transparent hover:border-[#1A1A18] pb-0.5"
          >
            {t('All Projects →', 'ಎಲ್ಲಾ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು →')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* Team */}
      <section
        className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24"
        aria-label="Team"
      >
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xs tracking-widest uppercase text-[#8C8C88]">
            {t('Team', 'Team')}
          </h2>
          <Link
            href="/about"
            className="text-xs tracking-widest uppercase text-[#8C8C88] hover:text-[#1A1A18] transition-colors border-b border-transparent hover:border-[#1A1A18] pb-0.5"
          >
            {t('About Us →', 'About Us →')}
          </Link>
        </div>

        <div className="max-w-3xl mb-14 text-base md:text-lg leading-relaxed text-[#1A1A18]/90 space-y-6">
          <p>
            {t(
              'Amber Collective is a dynamic young practice started in 2021 and based in Bangalore.',
              'Amber Collective is a dynamic young practice started in 2021 and based in Bangalore.'
            )}
          </p>
          <p>
            {t(
              'Our designs are contextually inspired with keen focus on the aspirations of the end user.',
              'Our designs are contextually inspired with keen focus on the aspirations of the end user.'
            )}
          </p>
          <p>
            {t(
              'We as a team have a collective work experience of over 15 years and in various cities such as Mumbai, Srilanka and Auroville apart from Bangalore.',
              'We as a team have a collective work experience of over 15 years and in various cities such as Mumbai, Srilanka and Auroville apart from Bangalore.'
            )}
          </p>
          <p>
            {t(
              'Being a multidisciplinary practice we aim at being a one stop solution for every aspect of a project.',
              'Being a multidisciplinary practice we aim at being a one stop solution for every aspect of a project.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="border border-[#1A1A18]/10 bg-white/40"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F1EEE9]">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-light text-[#1A1A18]">
                  {t(member.name, member.name)}
                </h3>
                <p className="mt-2 text-xs tracking-widest uppercase text-[#8C8C88]">
                  {t(member.role, member.role)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A18] text-white py-24 md:py-32" aria-label="Call to action">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-6">
            {t('Begin a Conversation', 'ಸಂಭಾಷಣೆ ಪ್ರಾರಂಭಿಸಿ')}
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-10 max-w-xl mx-auto">
            {t(
              'Have a project in mind?',
              'ಒಂದು ಯೋಜನೆ ಮನಸ್ಸಿನಲ್ಲಿದೆಯೇ?'
            )}
          </h2>
          <Link
            href="/contact"
            className="inline-block text-sm tracking-widest uppercase border border-white/40 px-8 py-4 hover:bg-white hover:text-[#1A1A18] transition-colors duration-300"
          >
            {t('Get in Touch', 'ಸಂಪರ್ಕಿಸಿ')}
          </Link>
        </div>
      </section>
    </>
  );
}

