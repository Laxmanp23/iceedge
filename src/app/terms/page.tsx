import { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Usage Directives | IceEdge Tech',
  description: 'Operational parameters and contractual bindings for the IceEdge Tech infrastructure.',
};

export default function TermsPage() {
  return <TermsClient />;
}
