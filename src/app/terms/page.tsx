import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | IceEdge Refrigeration',
  description: 'Terms and Conditions of IceEdge Refrigeration.',
};

export default function TermsPage() {
  return (
    <main className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Services Rendered</h2>
          <p className="mb-6">
            IceEdge Refrigeration provides industrial cold storage installation, maintenance, repair services, and AMC contracts. All service agreements established via this website are subject to separate written contracts that detail scope, timeline, and warranties.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Quotations</h2>
          <p className="mb-6">
            Any quotes or estimates requested and provided through the website are non-binding until confirmed in writing upon an official site inspection and requirement gathering meeting.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Intellectual Property</h2>
          <p className="mb-6">
            The site and its original content, features, and functionality are owned by IceEdge Refrigeration and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            IceEdge Refrigeration shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Changes to This Agreement</h2>
          <p className="mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.
          </p>
        </div>
      </div>
    </main>
  );
}
