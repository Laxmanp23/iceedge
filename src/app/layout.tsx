import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iceedge.example.com"),
  title: {
    default: "IceEdge Refrigeration | Cold Storage & Refrigeration Solutions",
    template: "%s | IceEdge Refrigeration",
  },
  description:
    "IceEdge Refrigeration provides end-to-end cold storage setup, industrial refrigeration systems, installation, and maintenance services for food, pharma, and logistics industries.",
  keywords: [
    "cold storage",
    "industrial refrigeration",
    "chiller installation",
    "freezer setup",
    "AMC refrigeration",
  ],
  openGraph: {
    title: "IceEdge Refrigeration",
    description:
      "Advanced cold storage and refrigeration solutions for warehouses, dairy, fruits, vegetables, pharma, and logistics.",
    type: "website",
    url: "https://iceedge.example.com",
    siteName: "IceEdge Refrigeration",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f8fbff] text-blue-950">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-10 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
