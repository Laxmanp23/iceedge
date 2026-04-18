"use client";
import { motion } from "framer-motion";
import { Apple, GlassWater, Pill, Tractor, Truck } from "lucide-react";

const industries = [
  { name: "Food & Beverage", icon: Apple },
  { name: "Dairy Industry", icon: GlassWater },
  { name: "Pharmaceutical", icon: Pill },
  { name: "Agriculture", icon: Tractor },
  { name: "Logistics", icon: Truck }
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-[#040814] relative border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We <span className="text-blue-500">Serve</span></h2>
            <p className="text-gray-400 font-light max-w-xl">
              Our high-grade thermal matrices are trusted by critical sectors demanding absolutely zero margin for error in temperature control.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-[#000510] border border-white/5 rounded-2xl hover:border-blue-500/30 hover:bg-blue-900/10 transition-all group"
            >
              <ind.icon className="w-10 h-10 text-gray-500 group-hover:text-blue-400 mb-4 transition-colors" />
              <span className="text-sm font-bold text-gray-300 group-hover:text-white uppercase tracking-wider text-center">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
