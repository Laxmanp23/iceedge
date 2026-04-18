import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | IceEdge Refrigeration',
  description: 'Privacy Policy of IceEdge Refrigeration.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            We collect information that you manually provide to us on our website, including your name, email address, phone number, and any other details provided in the contact form. We also collect non-identifiable usage data to improve our services and user experience.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            The information you provide is primarily used to respond to your service inquiries, provide you with quotes, schedule site visits, and coordinate any ongoing maintenance services (AMC). We do not sell or rent your personal data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Data Protection</h2>
          <p className="mb-6">
            We implement reasonable technical safeguards to protect the confidentiality and integrity of your data. While we strive to protect your personal information, no method of transmission over the internet or electronic storage is entirely secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Cookies</h2>
          <p className="mb-6">
            Our website uses cookies to enhance user experience, analyze site traffic, and optimize our marketing efforts. You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have questions about this Privacy Policy, please contact us at privacy@iceedgerefrigeration.com.
          </p>
        </div>
      </div>
    </main>
  );
}
