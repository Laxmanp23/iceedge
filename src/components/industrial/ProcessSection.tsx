"use client";
import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Requirement Analysis", desc: "Deep architectural and thermal load analysis of your specific operational metrics." },
  { id: "02", title: "System Design & Planning", desc: "Drafting proprietary thermodynamic blueprints and infrastructural schematics." },
  { id: "03", title: "Equipment Selection", desc: "Sourcing premium, industrial-grade hardware suited for exact environmental parameters." },
  { id: "04", title: "Installation & Commissioning", desc: "Rigorous onsite deployment utilizing advanced engineering protocols and stress tests." },
  { id: "05", title: "Maintenance & Support", desc: "24/7 AI-monitored lifecycle management ensuring zero unplanned downtime." }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#000510] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Deployment <span className="text-indigo-400">Protocol</span></h2>
          <p className="text-gray-400 font-light">Our rigorous step-by-step methodology ensures flawless execution from concept to commissioning.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#040814] border border-indigo-500/30 flex items-center justify-center text-xl font-black text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all z-10 relative shadow-[0_0_15px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]">
                  {step.id}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 font-light px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
