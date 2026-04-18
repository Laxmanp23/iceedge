import type { Metadata } from "next";
import { Target, Telescope, TimerReset } from "lucide-react";
import { MotionFade } from "@/components/motion-fade";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about IceEdge Refrigeration, our mission, vision, and experience delivering industrial cold storage systems.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-6">
      <MotionFade className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="About IceEdge"
          title="Cold chain experts focused on reliability"
          description="IceEdge Refrigeration is a specialized cold storage and refrigeration solutions company that designs, supplies, installs, and maintains high-performance cooling systems for modern industries."
        />
      </MotionFade>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Our Mission",
            description:
              "Deliver dependable and efficient refrigeration infrastructure that protects product integrity and operational continuity.",
            Icon: Target,
          },
          {
            title: "Our Vision",
            description:
              "Become the most trusted partner for scalable and sustainable cold chain systems across industries.",
            Icon: Telescope,
          },
          {
            title: "Our Experience",
            description:
              "With extensive project delivery across food, dairy, pharma, and logistics sectors, we bring proven execution and long-term service excellence.",
            Icon: TimerReset,
          },
        ].map(({ title, description, Icon }) => (
          <MotionFade key={title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
              <Icon className="size-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-blue-950">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-blue-900/70">{description}</p>
          </MotionFade>
        ))}
      </section>
    </div>
  );
}
