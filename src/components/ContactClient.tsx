'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const BUDGET_OPTIONS = [
  'Under ₹50L',
  '₹50L – ₹1Cr',
  '₹1Cr – ₹3Cr',
  '₹3Cr – ₹5Cr',
  '₹5Cr+',
  'To be discussed',
];

const TIMELINE_OPTIONS = [
  'Immediate (within 3 months)',
  'Near-term (3–6 months)',
  'Mid-term (6–12 months)',
  'Long-term (12+ months)',
  'Exploratory / not yet decided',
];

export default function ContactClient() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectLocation: '',
    budgetRange: '',
    timeline: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with a backend API or email service (e.g., Resend, Formspree, or a Next.js Route Handler)
    // This is currently front-end only — form data is not transmitted anywhere.
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Heading */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-6">
            {t('Start a Conversation', 'ಸಂಭಾಷಣೆ ಪ್ರಾರಂಭಿಸಿ')}
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8 whitespace-pre-line">
            {t("Let's make something\nremarkable together.", 'ಒಟ್ಟಾಗಿ ಅದ್ಭುತವಾದದ್ದನ್ನು\nಮಾಡೋಣ.')}
          </h1>
          <p className="text-[#8C8C88] leading-relaxed max-w-sm">
            {t(
              'We take on a limited number of projects each year to ensure every commission receives the attention it deserves. Tell us about yours.',
              'ಪ್ರತಿ ಆಯೋಗ ಅರ್ಹ ಗಮನ ಪಡೆಯುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಾವು ಪ್ರತಿ ವರ್ಷ ಸೀಮಿತ ಸಂಖ್ಯೆಯ ಯೋಜನೆಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತೇವೆ.'
            )}
          </p>

          <div className="mt-12 flex flex-col gap-4">
            <div>
              <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-1">
                {t('Email', 'ಇಮೇಲ್')}
              </p>
              <a href="mailto:hello@ambercollective.in" className="text-sm hover:text-[#C8965A] transition-colors">
                hello@ambercollective.in
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-1">
                {t('Location', 'ಸ್ಥಳ')}
              </p>
              <p className="text-sm">{t('Bangalore, India', 'ಬೆಂಗಳೂರು, ಭಾರತ')}</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          {submitted ? (
            <div className="flex items-center justify-center h-full min-h-[400px]">
              <div className="text-center">
                <p className="text-xs tracking-widest uppercase text-[#8C8C88] mb-4">
                  {t('Thank you', 'ಧನ್ಯವಾದಗಳು')}
                </p>
                <p className="text-xl font-light">
                  {t(
                    "We've received your enquiry and will be in touch shortly.",
                    'ನಿಮ್ಮ ವಿಚಾರಣೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಮತ್ತು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸಲಾಗುವುದು.'
                  )}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-[#8C8C88] mb-2">
                  {t('Full Name', 'ಪೂರ್ಣ ಹೆಸರು')} *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-b border-[#1A1A18]/20 bg-transparent py-2 text-sm outline-none focus:border-[#1A1A18] transition-colors placeholder:text-[#8C8C88]"
                  placeholder={t('Your name', 'ನಿಮ್ಮ ಹೆಸರು')}
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest uppercase text-[#8C8C88] mb-2">
                    {t('Email', 'ಇಮೇಲ್')} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-b border-[#1A1A18]/20 bg-transparent py-2 text-sm outline-none focus:border-[#1A1A18] transition-colors placeholder:text-[#8C8C88]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-[#8C8C88] mb-2">
                    {t('Phone', 'ಫೋನ್')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border-b border-[#1A1A18]/20 bg-transparent py-2 text-sm outline-none focus:border-[#1A1A18] transition-colors placeholder:text-[#8C8C88]"
                    placeholder="+91 98000 00000"
                  />
                </div>
              </div>

              {/* Project Location */}
              <div>
                <label htmlFor="projectLocation" className="block text-xs tracking-widest uppercase text-[#8C8C88] mb-2">
                  {t('Project Location', 'ಯೋಜನೆ ಸ್ಥಳ')}
                </label>
                <input
                  id="projectLocation"
                  name="projectLocation"
                  type="text"
                  value={form.projectLocation}
                  onChange={handleChange}
                  className="w-full border-b border-[#1A1A18]/20 bg-transparent py-2 text-sm outline-none focus:border-[#1A1A18] transition-colors placeholder:text-[#8C8C88]"
                  placeholder={t('City, India', 'ನಗರ, ಭಾರತ')}
                />
              </div>

              {/* Budget + Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budgetRange" className="block text-xs tracking-widest uppercase text-[#8C8C88] mb-2">
                    {t('Budget Range', 'ಬಜೆಟ್ ವ್ಯಾಪ್ತಿ')}
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={form.budgetRange}
                    onChange={handleChange}
                    className="w-full border-b border-[#1A1A18]/20 bg-transparent py-2 text-sm outline-none focus:border-[#1A1A18] transition-colors text-[#1A1A18] appearance-none cursor-pointer"
                  >
                    <option value="">{t('Select…', 'ಆಯ್ಕೆ ಮಾಡಿ…')}</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-xs tracking-widest uppercase text-[#8C8C88] mb-2">
                    {t('Timeline', 'ಸಮಯ ರೇಖೆ')}
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="w-full border-b border-[#1A1A18]/20 bg-transparent py-2 text-sm outline-none focus:border-[#1A1A18] transition-colors text-[#1A1A18] appearance-none cursor-pointer"
                  >
                    <option value="">{t('Select…', 'ಆಯ್ಕೆ ಮಾಡಿ…')}</option>
                    {TIMELINE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-[#8C8C88] mb-2">
                  {t('Tell us about your project', 'ನಿಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ ಹೇಳಿ')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border-b border-[#1A1A18]/20 bg-transparent py-2 text-sm outline-none focus:border-[#1A1A18] transition-colors resize-none placeholder:text-[#8C8C88]"
                  placeholder={t(
                    "Describe your project, aspirations, and anything else you'd like us to know.",
                    'ನಿಮ್ಮ ಯೋಜನೆ, ಆಕಾಂಕ್ಷೆಗಳು ಮತ್ತು ನೀವು ನಮಗೆ ತಿಳಿಸಲು ಬಯಸುವ ಯಾವುದನ್ನಾದರೂ ವಿವರಿಸಿ.'
                  )}
                />
              </div>

              <button
                type="submit"
                className="self-start mt-4 text-sm tracking-widest uppercase border border-[#1A1A18] px-8 py-4 hover:bg-[#1A1A18] hover:text-white transition-colors duration-300"
              >
                {t('Send Enquiry', 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
