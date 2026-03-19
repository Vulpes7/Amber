import type { Metadata } from 'next';
import StudioClient from '@/components/StudioClient';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Learn about Amber Collective — our approach, services, and values as a contemporary architecture and interior design practice.',
};

export default function StudioPage() {
  return <StudioClient />;
}
