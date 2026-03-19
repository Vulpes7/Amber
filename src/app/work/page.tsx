import type { Metadata } from 'next';
import WorkClient from '@/components/WorkClient';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Explore all projects by Amber Collective — contemporary architecture and interior design in Bangalore, India.',
};

export default function WorkPage() {
  return <WorkClient />;
}
