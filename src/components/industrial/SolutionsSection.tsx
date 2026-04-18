"use client";
import { motion } from "framer-motion";
import { Snowflake, Wind, ThermometerSnowflake, Database, Server, Activity } from "lucide-react";

const solutions = [
  {
    title: "Cold Storage Setup",
    desc: "End-to-end warehouse architectures designed for optimal thermal retention and spatial efficiency.",
    icon: Database
  },
  {
    title: "Ammonia & Freon Systems",
    desc: "Heavy-duty industrial cooling utilizing both traditional and advanced eco-friendly refrigerants.",
    icon: Wind
  },
  {
    title: "Blast Freezing Solutions",
    desc: "Rapid temperature reduction chambers engineered for the food processing and medical sectors.",
    icon: Snowflake
  },
  {
    title: "Industrial Chillers",
    desc: "Massive scale liquid cooling systems for manufacturing facilities and continuous-plant operations.",
    icon: Server
  },
  {
    title: "Compressor Rack Systems",
    desc: "Intelligent, multi-compressor matrices ensuring redundancies and adaptive load balancing.",
    icon: Activity
  },
  {
    title: "Temperature Automation",
    desc: "Smart digital thermostats and IoT integrated control panels for autonomous system regulation.",
    icon: ThermometerSnowflake
  }
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-[#000510] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineered <span className="text-cyan-400">Capabilities</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            We deploy a comprehensive suite of industrial-grade refrigeration technologies engineered to protect your critical assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#040814]/80 backdrop-blur-md border border-cyan-500/10 hover:border-cyan-500/40 p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 flex items-center justify-center mb-6 transition-colors">
                <item.icon className="w-7 h-7 text-cyan-400 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
