"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function FeaturedSystemSection() {
  const benefits = [
    "Maximum Energy Efficiency (A++ Rating)",
    "Extended Operational Lifespan",
    "Fully Scalable Modular Design",
    "Environmentally Conscious Refrigerants",
    "AI-Integrated Diagnostics"
  ];

  return (
    <section className="py-24 bg-[#040814] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full mb-6 relative overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse relative z-10" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 relative z-10">Featured Architecture</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Industrial <span className="text-cyan-400">Ammonia</span> Refrigeration System
            </h2>
            
            <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
              The gold standard for heavy-duty industrial cooling. Our premier ammonia-based matrices offer unparalleled thermodynamic properties, drastically reducing operational energy costs while providing infinite scalability for massive logistical hubs and food processing mega-facilities.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((text, i) => (
                <li key={i} className="flex items-center text-gray-300 font-light">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            <button className="px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-[#000510] rounded-full font-bold uppercase tracking-wider text-sm transition-colors border border-white/20 hover:border-transparent">
              View Technical Specs
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[#000510]">
              <Image 
                src="https://images.unsplash.com/photo-1574621100236-d25bb5cb47ce?q=80&w=1000&auto=format&fit=crop"
                alt="Industrial Ammonia System"
                fill
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-transparent to-transparent"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
