"use client";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Warehouse, ThermometerSnowflake, Settings2, PenTool, CheckCircle, Factory, Cpu, Zap } from "lucide-react";
import Link from "next/link";

export default function ServicesClient() {
  const services = [
    {
      id: "cold-storage",
      title: "Cold Storage Setup",
      description: "From concept to commissioning, we build high-efficiency cold rooms optimized for diverse requirements.",
      features: [
        "Warehouse Cold Storage",
        "Fruits & Vegetables Preservation",
        "Dairy Processing & Storage",
        "Pharmaceutical Cold Chain"
      ],
      icon: <Warehouse className="w-8 h-8 text-cyan-400" />
    },
    {
      id: "industrial-refrigeration",
      title: "Industrial Refrigeration",
      description: "Heavy-duty systems built to handle massive cooling loads securely and reliably for critical environments.",
      features: [
        "Ammonia & Freon Systems",
        "Process Cooling",
        "Large-scale Plant Refrigeration",
        "Energy Optimization Consulting"
      ],
      icon: <Factory className="w-8 h-8 text-blue-400" />
    },
    {
      id: "installation",
      title: "Indoor & Outdoor Units",
      description: "Professional sizing and installation ensuring peak performance across various environmental conditions.",
      features: [
        "Split & Multi-Split Systems",
        "Rooftop Condensing Units",
        "Precision Air Conditioning",
        "Ducting & Ventilation"
      ],
      icon: <Settings className="w-8 h-8 text-indigo-400" />
    },
    {
      id: "chillers-freezers",
      title: "Chillers & Freezers",
      description: "Installation and configuration of advanced commercial chilling equipment tailored to specific temperature zones.",
      features: [
        "Blast Freezers",
        "Deep Freezers & Walk-ins",
        "Water Chillers",
        "Spiral Freezers"
      ],
      icon: <ThermometerSnowflake className="w-8 h-8 text-cyan-400" />
    },
    {
      id: "amc",
      title: "AMC Contracts",
      description: "Comprehensive preventive maintenance plans to eliminate downtime and extend the lifespan of your systems.",
      features: [
        "Scheduled Inspections",
        "Performance Diagnostics",
        "Priority Emergency Response",
        "Detailed Service Reporting"
      ],
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />
    },
    {
      id: "repair",
      title: "Repair & Diagnostics",
      description: "Fast-response troubleshooting and repairs performed by certified refrigeration engineers.",
      features: [
        "24/7 Breakdown Assistance",
        "Component Replacement",
        "System Retrofitting",
        "Leak Detection & Refrigerant"
      ],
      icon: <PenTool className="w-8 h-8 text-indigo-400" />
    }
  ];

  return (
    <main className="bg-[#000510] text-gray-300 min-h-screen selection:bg-cyan-500/30">
      {/* Top Banner / Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-blue-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-cyan-500/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
          
          {/* Engineering Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-cyan-300 mb-8"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            Infrastructure Capabilities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Services</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            End-to-end refrigeration engineering. We design, deploy, and dominate industrial cooling demands with precision technology.
          </motion.p>
        </div>
        
        {/* Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc, idx) => (
              <motion.div 
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#040814] rounded-3xl border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Hover Glow Background */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-cyan-500/0 to-cyan-500/20 rounded-full blur-[40px] group-hover:from-cyan-500/20 group-hover:to-blue-500/40 transition-all duration-700"></div>
                
                {/* Icon Container */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {svc.icon}
                  {/* Decorative internal corner */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-400/50 rounded-tl-md"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-blue-400/50 rounded-br-md"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow font-light">
                  {svc.description}
                </p>

                <div className="pt-6 border-t border-white/10 relative z-10">
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-widest text-cyan-400 uppercase">
                    <Zap className="w-3 h-3" /> Technical Specs
                  </div>
                  <ul className="space-y-3">
                    {svc.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-400 group/item">
                        <div className="mt-1 mr-3 w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover/item:bg-cyan-400 group-hover/item:scale-150 transition-all"></div>
                        <span className="group-hover/item:text-gray-200 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic CTA Box */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] p-10 md:p-16 text-center text-white overflow-hidden border border-white/10 bg-[#080d1a]"
          >
            {/* Complex Animated Background for CTA */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-[#080d1a] to-blue-900/40"></div>
              <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-cyan-500/20 blur-[100px] rounded-full mix-blend-screen animate-[pulse_6s_ease-in-out_infinite]"></div>
              <div className="absolute -bottom-[50%] -right-[10%] w-[70%] h-[150%] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen animate-[pulse_8s_ease-in-out_infinite_delay-2s]"></div>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <Settings2 className="w-96 h-96 animate-[spin_40s_linear_infinite]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Custom</span> Solution?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Our experts blueprint and configure refrigeration matrices that perfectly interface with your facility's exact requirements. Initiate a technical review today.
              </p>
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center gap-2 px-8 py-5 bg-white text-[#000510] rounded-2xl font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">Initiate Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
            </div>
            
            {/* Corner UI Elements */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-xl"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 rounded-br-xl"></div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
