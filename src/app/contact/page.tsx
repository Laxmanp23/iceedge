import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { MotionFade } from "@/components/motion-fade";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact IceEdge Refrigeration for cold storage setup, installation, and maintenance services.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 pb-6">
      <MotionFade className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact our refrigeration specialists"
          description="Share your requirements and our team will get back with the right cold storage solution for your business."
        />
      </MotionFade>

      <section className="grid gap-6 lg:grid-cols-2">
        <MotionFade className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-blue-950">Send us a message</h2>
          <form className="mt-5 space-y-4">
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
              { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              { id: "phone", label: "Phone", type: "tel", placeholder: "+91" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="mb-1 block text-sm font-medium text-blue-900">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-hidden transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-blue-900">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your requirement"
                className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-hidden transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Submit Inquiry
            </button>
          </form>
        </MotionFade>

        <MotionFade className="space-y-4">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-blue-950">Contact Details</h2>
            <ul className="mt-4 space-y-2 text-sm text-blue-900/80">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-blue-700" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-blue-700" /> info@iceedge.in
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-blue-700" /> Industrial Area, Ahmedabad, India
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
            <iframe
              title="IceEdge Refrigeration location"
              src="https://maps.google.com/maps?q=Ahmedabad%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </MotionFade>
      </section>
    </div>
  );
}
