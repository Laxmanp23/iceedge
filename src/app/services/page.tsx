import type { Metadata } from "next";
import { Settings2, Snowflake, Wrench, Factory, Warehouse, Wind } from "lucide-react";
import { MotionFade } from "@/components/motion-fade";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore IceEdge Refrigeration services including cold storage setup, industrial refrigeration, installation, AMC, and maintenance.",
};

const serviceList = [
  {
    title: "Cold Storage Setup",
    description: "Complete setup for warehouses, fruits, vegetables, and dairy storage facilities.",
    Icon: Warehouse,
  },
  {
    title: "Industrial Refrigeration Systems",
    description: "Custom-designed systems for process plants, manufacturing, and industrial operations.",
    Icon: Factory,
  },
  {
    title: "Indoor & Outdoor Units Installation",
    description: "Professional installation of indoor evaporators and outdoor condensing units.",
    Icon: Wind,
  },
  {
    title: "Chillers & Freezers Installation",
    description: "Efficient chiller and freezer installation with optimized thermal performance.",
    Icon: Snowflake,
  },
  {
    title: "AMC (Annual Maintenance Contracts)",
    description: "Preventive service plans to keep systems running with maximum uptime.",
    Icon: Settings2,
  },
  {
    title: "Repair & Maintenance Services",
    description: "Rapid diagnostics, repairs, and on-site maintenance by trained technicians.",
    Icon: Wrench,
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-10 pb-6">
      <MotionFade className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive refrigeration services"
          description="Our end-to-end offerings are designed to support performance, compliance, and long-term reliability."
        />
      </MotionFade>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {serviceList.map((service) => (
          <MotionFade key={service.title}>
            <ServiceCard {...service} />
          </MotionFade>
        ))}
      </section>
    </div>
  );
}
