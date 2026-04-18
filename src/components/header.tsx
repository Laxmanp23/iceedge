"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Snowflake, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="rounded-full bg-gradient-to-tr from-cyan-500 to-blue-700 p-2 text-white">
            <Snowflake className="size-4" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-blue-950 sm:text-base">
            IceEdge Refrigeration
          </span>
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-blue-900 transition hover:bg-blue-50 md:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-blue-950 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-blue-100 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-blue-600 text-white" : "text-blue-950 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
