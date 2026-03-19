'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { TEAM } from '@/data/team';

const ABOUT_TEXT = [
  'Amber Collective is a dynamic young practice started in 2021 and based in Bangalore.',
  'Our designs are contextually inspired with keen focus on the aspirations of the end user.',
  'We as a team have a collective work experience of over 15 years and in various cities such as Mumbai, Srilanka and Auroville apart from Bangalore.',
  'Being a multidisciplinary practice we aim at being a one stop solution for every aspect of a project.',
];

export default function AboutClient() {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* About */}
      <section
        className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28"
        aria-label="About Amber Collective"
      >
        <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-6">
          {t('About', 'About')}
        </p>

        <h1 className="text-3xl md:text-5xl font-light text-[#1A1A18] leading-tight max-w-3xl">
          {t('Amber Collective', 'Amber Collective')}
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-[#1A1A18]/90">
          {ABOUT_TEXT.map((line) => (
            <p key={line}>{t(line, line)}</p>
          ))}
        </div>
      </section>

      {/* Team */}
      <section
        className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24 md:pb-32"
        aria-label="Team"
      >
        <h2 className="text-xs tracking-widest uppercase text-[#8C8C88] mb-12">
          {t('Team', 'Team')}
        </h2>

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
    </div>
  );
}
