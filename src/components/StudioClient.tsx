'use client';

import { useLanguage } from '@/context/LanguageContext';

const SERVICES = [
  {
    en: 'Architecture',
    kn: 'ವಾಸ್ತುಶಿಲ್ಪ',
    descEn: 'New builds, extensions, and restorations — from concept to completion.',
    descKn: 'ಹೊಸ ಕಟ್ಟಡಗಳು, ವಿಸ್ತರಣೆಗಳು ಮತ್ತು ಪುನಃಸ್ಥಾಪನೆಗಳು — ಪರಿಕಲ್ಪನೆಯಿಂದ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ.',
  },
  {
    en: 'Interior Design',
    kn: 'ಒಳಾಂಗಣ ವಿನ್ಯಾಸ',
    descEn: 'Spatial planning, material specification, lighting, and furniture curation.',
    descKn: 'ಪ್ರಾದೇಶಿಕ ಯೋಜನೆ, ವಸ್ತು ನಿರ್ದಿಷ್ಟತೆ, ಬೆಳಕು ಮತ್ತು ಪೀಠೋಪಕರಣ ಸಂಗ್ರಹ.',
  },
  {
    en: 'Landscape',
    kn: 'ಭೂದೃಶ್ಯ',
    descEn: 'Considered outdoor environments that extend the interior language to the garden.',
    descKn: 'ಒಳಾಂಗಣ ಭಾಷೆಯನ್ನು ಉದ್ಯಾನಕ್ಕೆ ವಿಸ್ತರಿಸುವ ಹೊರಾಂಗಣ ಪರಿಸರಗಳು.',
  },
  {
    en: 'Consulting',
    kn: 'ಸಲಹೆ',
    descEn: 'Feasibility studies, design reviews, and project advisory for complex briefs.',
    descKn: 'ಸಾಧ್ಯತೆ ಅಧ್ಯಯನಗಳು, ವಿನ್ಯಾಸ ವಿಮರ್ಶೆಗಳು ಮತ್ತು ಸಂಕೀರ್ಣ ಸಂಕ್ಷಿಪ್ತಗಳಿಗೆ ಯೋಜನಾ ಸಲಹೆ.',
  },
];

const APPROACH = [
  {
    num: '01',
    en: 'Listen',
    kn: 'ಆಲಿಸಿ',
    descEn: 'Every brief is a beginning. We invest time understanding how you live, work, and move through space before a single line is drawn.',
    descKn: 'ಪ್ರತಿ ಸಂಕ್ಷಿಪ್ತ ಒಂದು ಆರಂಭ. ಒಂದೇ ಒಂದು ರೇಖೆ ಎಳೆಯುವ ಮೊದಲು ನೀವು ಹೇಗೆ ಬದುಕುತ್ತೀರಿ, ಕೆಲಸ ಮಾಡುತ್ತೀರಿ ಮತ್ತು ಜಾಗದ ಮೂಲಕ ಚಲಿಸುತ್ತೀರಿ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಾವು ಸಮಯ ಹೂಡಿಕೆ ಮಾಡುತ್ತೇವೆ.',
  },
  {
    num: '02',
    en: 'Distil',
    kn: 'ಸ್ವಚ್ಛಗೊಳಿಸಿ',
    descEn: 'We reduce complexity to its essence. Good design is not about addition — it is about knowing what to leave out.',
    descKn: 'ನಾವು ಸಂಕೀರ್ಣತೆಯನ್ನು ಅದರ ಸಾರಕ್ಕೆ ಕಡಿಮೆ ಮಾಡುತ್ತೇವೆ. ಉತ್ತಮ ವಿನ್ಯಾಸ ಸೇರ್ಪಡೆಯ ಬಗ್ಗೆ ಅಲ್ಲ — ಏನನ್ನು ಬಿಡಬೇಕು ಎಂದು ತಿಳಿದುಕೊಳ್ಳುವುದರ ಬಗ್ಗೆ.',
  },
  {
    num: '03',
    en: 'Craft',
    kn: 'ಕೌಶಲ',
    descEn: 'We work closely with skilled artisans, specifying materials and detailing with precision to achieve spaces that feel as good as they look.',
    descKn: 'ನಾವು ಕುಶಲ ಕಾರ್ಮಿಕರೊಂದಿಗೆ ನಿಕಟವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ.',
  },
  {
    num: '04',
    en: 'Endure',
    kn: 'ಶಾಶ್ವತ',
    descEn: 'We design for the long term — spaces that age gracefully, serve for generations, and deepen in meaning with time.',
    descKn: 'ನಾವು ದೀರ್ಘಾವಧಿಗೆ ವಿನ್ಯಾಸ ಮಾಡುತ್ತೇವೆ — ಅನುಗ್ರಹದಿಂದ ವಯಸ್ಸಾಗುವ ಸ್ಥಳಗಳು.',
  },
];

export default function StudioClient() {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Page Header */}
      <header className="max-w-screen-xl mx-auto px-6 md:px-12 pt-12 pb-24">
        <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-6">
          {t('Amber Collective', 'ಅಂಬರ್ ಕಲೆಕ್ಟಿವ್')}
        </p>
        <h1 className="text-4xl md:text-6xl font-light max-w-3xl leading-tight">
          {t(
            'A studio defined by restraint, craft, and enduring design.',
            'ಸಂಯಮ, ಕೌಶಲ ಮತ್ತು ಶಾಶ್ವತ ವಿನ್ಯಾಸದಿಂದ ವ್ಯಾಖ್ಯಾನಿಸಲಾದ ಸ್ಟುಡಿಯೋ.'
          )}
        </h1>
      </header>

      {/* Positioning Statement */}
      <section className="bg-[#1A1A18] text-white py-20 md:py-28" aria-label="Positioning statement">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-6">
              {t('Who We Are', 'ನಾವು ಯಾರು')}
            </p>
            <p className="text-xl font-light leading-relaxed">
              {t(
                'Amber Collective is a Bangalore-based architecture and interior design studio. Founded on the belief that exceptional environments require exceptional patience, we work across residential, hospitality, and cultural typologies — with a shared dedication to material honesty and spatial clarity.',
                'ಅಂಬರ್ ಕಲೆಕ್ಟಿವ್ ಬೆಂಗಳೂರು ಮೂಲದ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಒಳಾಂಗಣ ವಿನ್ಯಾಸ ಸ್ಟುಡಿಯೋ.'
              )}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-6">
              {t('Our Position', 'ನಮ್ಮ ಸ್ಥಾನ')}
            </p>
            <p className="text-xl font-light leading-relaxed">
              {t(
                'We align ourselves with internationally regarded practices who pursue architecture as a cultural act — not merely a commercial one. Every project, regardless of scale, receives the same rigour.',
                'ನಾವು ಅಂತರರಾಷ್ಟ್ರೀಯವಾಗಿ ಗೌರವಾನ್ವಿತ ಅಭ್ಯಾಸಗಳೊಂದಿಗೆ ಜೋಡಿಸಿಕೊಳ್ಳುತ್ತೇವೆ.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-24" aria-label="Services">
        <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-12">
          {t('Services', 'ಸೇವೆಗಳು')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A18]/10">
          {SERVICES.map((service) => (
            <div key={service.en} className="bg-[#F9F7F4] p-8 md:p-12">
              <h3 className="text-xl font-light mb-3">{t(service.en, service.kn)}</h3>
              <p className="text-sm text-[#8C8C88] leading-relaxed">{t(service.descEn, service.descKn)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24" aria-label="Approach">
        <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-12">
          {t('Approach', 'ವಿಧಾನ')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {APPROACH.map((step) => (
            <div key={step.num} className="flex gap-8">
              <span className="text-xs text-[#8C8C88] mt-1 shrink-0">{step.num}</span>
              <div>
                <h3 className="text-lg font-light mb-3">{t(step.en, step.kn)}</h3>
                <p className="text-sm text-[#8C8C88] leading-relaxed">{t(step.descEn, step.descKn)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
