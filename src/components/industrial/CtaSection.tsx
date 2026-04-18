"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 bg-[#000510] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 via-[#040814] to-[#040814] border border-cyan-500/20 p-12 md:p-20 text-center shadow-[0_0_50px_rgba(6,182,212,0.1)]"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need a Reliable Industrial Refrigeration Partner?</h2>
            <p className="text-gray-400 text-lg mb-10 font-light max-w-2xl mx-auto">
              Secure your operations with our elite thermal infrastructure. Contact our engineering directors today to map out your custom cooling matrix.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold uppercase tracking-wider text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
            >
              Contact Our Experts
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
