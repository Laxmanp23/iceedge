import type { Metadata } from "next";
import { MotionFade } from "@/components/motion-fade";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy practices followed by IceEdge Refrigeration.",
};

export default function PrivacyPolicyPage() {
  return (
    <MotionFade className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
      <SectionHeading title="Privacy Policy" description="Effective date: April 18, 2026" />
      <div className="mt-6 space-y-4 text-sm leading-7 text-blue-900/80">
        <p>
          IceEdge Refrigeration respects your privacy. We collect only the information required to respond to
          inquiries, provide services, and improve customer communication.
        </p>
        <p>
          Information submitted through our contact form, including your name, email, phone number, and message,
          is used solely for business communication and service support.
        </p>
        <p>
          We do not sell personal information. We may share limited data with trusted service providers when needed
          to deliver requested services and comply with legal obligations.
        </p>
        <p>
          You may request access, correction, or deletion of your submitted information by contacting us at
          info@iceedge.in.
        </p>
      </div>
    </MotionFade>
  );
}
