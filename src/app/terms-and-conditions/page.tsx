import type { Metadata } from "next";
import { MotionFade } from "@/components/motion-fade";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the terms and conditions for using IceEdge Refrigeration website and services.",
};

export default function TermsPage() {
  return (
    <MotionFade className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
      <SectionHeading title="Terms & Conditions" description="Effective date: April 18, 2026" />
      <div className="mt-6 space-y-4 text-sm leading-7 text-blue-900/80">
        <p>
          By using this website, you agree to use it for lawful purposes only and acknowledge that service details
          are subject to project-specific scope and quotation.
        </p>
        <p>
          All content on this website, including branding, text, and visual assets, is the property of IceEdge
          Refrigeration unless otherwise stated.
        </p>
        <p>
          Estimates, timelines, and service commitments are finalized only after formal agreement and site
          assessment. Emergency and maintenance support availability may vary by location.
        </p>
        <p>
          IceEdge Refrigeration is not liable for indirect losses arising from website use, interruptions, or
          reliance on informational content without formal consultation.
        </p>
      </div>
    </MotionFade>
  );
}
