import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Share2, Waypoints } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-blue-100 bg-blue-950 text-blue-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold">IceEdge Refrigeration</h2>
          <p className="mt-3 text-sm text-blue-100/85">
            Trusted cold storage and refrigeration experts delivering reliable, efficient,
            and scalable temperature-controlled solutions.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-100">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/contact", "Contact"],
              ["/privacy-policy", "Privacy Policy"],
              ["/terms-and-conditions", "Terms & Conditions"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-blue-50/85 transition hover:text-cyan-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-100">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-50/85">
            <li className="flex items-center gap-2">
              <Phone className="size-4" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4" /> info@iceedge.in
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4" /> Industrial Area, Ahmedabad, India
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3 text-blue-100">
            {[Globe, Share2, Waypoints].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-full border border-blue-200/30 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
                aria-label="Social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900 py-4 text-center text-xs text-blue-200/80">
        © {new Date().getFullYear()} IceEdge Refrigeration. All rights reserved.
      </div>
    </footer>
  );
}
