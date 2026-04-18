"use client";
import { motion } from "framer-motion";
import { Users, Settings, Clock, Zap, TrendingDown } from "lucide-react";

export default function WhyChooseSection() {
  const reasons = [
    { icon: Users, title: "Elite Engineers", desc: "Decades of combined expertise in thermodynamic architectures." },
    { icon: Settings, title: "Custom Solutions", desc: "No generic builds. Every system is bespoke to your thermal loads." },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock monitoring and rapid-response emergency protocols." },
    { icon: Zap, title: "Energy Efficient", desc: "Drastically reduced power grids leveraging modern compressors." },
    { icon: TrendingDown, title: "Cost Optimization", desc: "Lower total cost of ownership (TCO) over the system's lifespan." }
  ];

  return (
    <section className="py-24 bg-[#000510] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose <span className="text-cyan-400">IceEdge?</span></h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">We don't just build refrigerators; we architect mission-critical infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <item.icon className="w-8 h-8 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">{item.title}</h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
