import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Amber Collective — Architecture & Interiors, Bangalore',
    template: '%s | Amber Collective',
  },
  description:
    'Amber Collective is a contemporary architecture and interior design studio based in Bangalore, India. We create considered, high-quality spaces for discerning clients.',
  keywords: ['architecture', 'interior design', 'Bangalore', 'India', 'luxury', 'contemporary'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ambercollective.in',
    siteName: 'Amber Collective',
    title: 'Amber Collective — Architecture & Interiors, Bangalore',
    description:
      'Amber Collective is a contemporary architecture and interior design studio based in Bangalore, India.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amber Collective — Architecture & Interiors, Bangalore',
    description:
      'Contemporary architecture and interior design studio based in Bangalore, India.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F9F7F4] text-[#1A1A18]">
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
