import type { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Amber Collective to discuss your project. We work across architecture, interior design, and landscape in Bangalore, India.',
};

export default function ContactPage() {
  return <ContactClient />;
}
