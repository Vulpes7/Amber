import type { Metadata } from 'next';
import AboutClient from '@/components/AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Amber Collective is a dynamic young practice started in 2021 and based in Bangalore.',
};

export default function AboutPage() {
  return <AboutClient />;
}