import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Factory,
  Leaf,
  ShieldCheck,
  Snowflake,
  Truck,
  Warehouse,
} from "lucide-react";
import { MotionFade } from "@/components/motion-fade";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    title: "Cold Storage Setup",
    description: "Warehouse-grade storage solutions for fruits, vegetables, dairy, and perishables.",
    Icon: Warehouse,
  },
  {
    title: "Industrial Refrigeration",
    description: "High-performance systems engineered for manufacturing and processing facilities.",
    Icon: Factory,
  },
  {
    title: "Chillers & Freezers Installation",
    description: "Energy-efficient chillers and deep freezers installed by certified professionals.",
    Icon: Snowflake,
  },
];

const reasons = [
  { title: "Quality Engineering", text: "Built with premium components for long-term reliability." },
  { title: "24/7 Support", text: "Fast maintenance and emergency response from expert technicians." },
  { title: "Industry Experience", text: "Trusted experience across cold chain and temperature control." },
];

const industries = [
  { label: "Food Processing", Icon: Leaf },
  { label: "Pharmaceutical", Icon: ShieldCheck },
  { label: "Cold Chain Logistics", Icon: Truck },
  { label: "Storage Warehousing", Icon: Building2 },
];

const testimonials = [
  {
    quote:
      "IceEdge redesigned our facility with a reliable cold chain setup that cut product spoilage significantly.",
    author: "Operations Head, FreshHarvest Foods",
  },
  {
    quote:
      "Excellent AMC support and quick issue resolution. Their team is highly professional and responsive.",
    author: "Plant Manager, ArcticDairy Pvt. Ltd.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-6">
      <MotionFade className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-950 via-blue-800 to-cyan-700 px-6 py-16 text-white shadow-xl sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">IceEdge Refrigeration</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
          Advanced Cold Storage & Refrigeration Solutions
        </h1>
        <p className="mt-5 max-w-2xl text-sm text-blue-100 sm:text-base">
          We design, supply, install, and maintain modern refrigeration infrastructure for mission-critical
          temperature-controlled operations.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-cyan-100"
          >
            Get a Consultation
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-blue-200/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </MotionFade>

      <section id="services" className="space-y-8">
        <SectionHeading
          eyebrow="Core Services"
          title="Integrated Refrigeration Solutions"
          description="From initial system planning to long-term maintenance, we provide complete support at every stage."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <MotionFade key={service.title}>
              <ServiceCard {...service} />
            </MotionFade>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm md:grid-cols-3">
        {reasons.map((reason) => (
          <MotionFade key={reason.title} className="space-y-3">
            <CheckCircle2 className="size-6 text-blue-700" />
            <h3 className="text-lg font-semibold text-blue-950">{reason.title}</h3>
            <p className="text-sm text-blue-900/70">{reason.text}</p>
          </MotionFade>
        ))}
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Industries" title="Industries We Serve" center />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ label, Icon }) => (
            <MotionFade
              key={label}
              className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Icon className="size-5" />
              </div>
              <p className="mt-3 text-sm font-medium text-blue-900">{label}</p>
            </MotionFade>
          ))}
        </div>
      </section>

      <MotionFade className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm">
        <SectionHeading
          eyebrow="Call To Action"
          title="Ready to upgrade your refrigeration infrastructure?"
          description="Partner with IceEdge to build reliable cold storage systems tailored to your operations."
          center
        />
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Talk to Our Experts
        </Link>
      </MotionFade>

      <section className="space-y-8">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" center />
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <MotionFade key={item.author} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-blue-900/80">“{item.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue-700">{item.author}</p>
            </MotionFade>
          ))}
        </div>
      </section>
    </div>
  );
}
