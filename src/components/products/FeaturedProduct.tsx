"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, ThermometerSnowflake, Zap } from "lucide-react";

export default function FeaturedProduct() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#040814] to-[#000510] border border-cyan-500/20 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Background FX */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-blue-600/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
        
        {/* Content Side */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full w-max mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Flagship System</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Leviathan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Series 9X Chiller</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light leading-relaxed mb-10 text-lg"
          >
            The pinnacle of industrial temperature control. Engineered for massive food processing plants and distribution hubs, the Series 9X delivers unparalleled thermodynamic efficiency with built-in AI predictive maintenance monitoring.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
          >
            {[
              { icon: ThermometerSnowflake, label: "Max Output", val: "500 TR" },
              { icon: Zap, label: "Efficiency", val: "A++ Class" },
              { icon: Cpu, label: "Control", val: "Neural AI" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <stat.icon className="w-6 h-6 text-cyan-400 mb-3" />
                <span className="text-white font-bold text-xl">{stat.val}</span>
                <span className="text-gray-500 text-xs uppercase tracking-wider font-mono mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold uppercase tracking-wider text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all">
              Initialize Protocol
            </button>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000510] via-transparent to-transparent z-10 hidden lg:block"></div>
          <Image
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop"
            alt="Flagship Chiller System"
            fill
            className="object-cover mix-blend-luminosity opacity-70"
          />
        </div>

      </div>
    </div>
  );
}
