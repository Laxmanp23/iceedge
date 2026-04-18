"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#000510]">
      {/* Background with an industrial overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#000510]/80 z-10 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000510] via-transparent to-[#000510] z-10"></div>
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=2000&auto=format&fit=crop')" }}
        />
        {/* Glow Effects */}
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[150px] rounded-full z-10"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-cyan-500/20 blur-[150px] rounded-full z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Enterprise Infrastructure</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight max-w-5xl mx-auto"
        >
          Industrial Refrigeration Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Power Your Business</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-10"
        >
          High-performance thermodynamic systems designed for absolute efficiency, extreme durability, and precision cooling at a massive scale.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center w-full sm:w-auto overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Quote <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link 
            href="#solutions"
            className="group px-8 py-4 bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 text-white rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center w-full sm:w-auto transition-all"
          >
            Explore Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
