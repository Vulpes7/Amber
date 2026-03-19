import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'Amber Collective — Architecture & Interiors, Bangalore',
  description:
    'Amber Collective is a contemporary architecture and interior design studio based in Bangalore, India. We create considered spaces for discerning clients.',
};

export default function HomePage() {
  return <HomeClient />;
}
