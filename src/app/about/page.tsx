"use client";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, ArrowRight, Zap, Sparkles, ThermometerSnowflake } from "lucide-react";
import Link from "next/link";

export default function About() {
  const stats = [
    { value: "15+", label: "Years Mastery" },
    { value: "500+", label: "Systems Deployed" },
    { value: "50+", label: "Elite Engineers" },
    { value: "24/7", label: "Active Monitoring" },
  ];

  return (
    <main className="bg-[#000510] text-gray-300 min-h-screen selection:bg-cyan-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
        {/* Abstract Background Effects */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          {/* Subtle grid line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-cyan-300 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Decoding Cold Infrastructure
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight"
          >
            Engineering <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Absolute Zero</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We don't just build refrigeration systems; we architect resilient environments that empower the global cold chain.
          </motion.p>
        </div>
      </section>

      {/* Story & Stats Bento Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Main Story Block */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
              
              <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-6">
                <ThermometerSnowflake className="w-5 h-5" /> Our Genesis
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                From a vision to modernize cooling, to the backbone of the industry.
              </h2>
              <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the refrigeration industry, IceEdge Refrigeration has evolved into a powerhouse of comprehensive cold chain solutions. We engineer precision.
                </p>
                <p>
                  Our mastery spans agriculture, pharmaceuticals, dairy, and hyper-logistics. By weaving innovative thermodynamics with sustainable engineering, we guarantee zero product degradation while drastically cutting energy footprints.
                </p>
              </div>
            </motion.div>

            {/* Stats Blocks (Bento Style) */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden hover:bg-white/5 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                  <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">{stat.value}</div>
                  <div className="text-cyan-400/80 font-medium text-sm uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Futuristic Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#020817] clip-path-slant z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-b from-[#0a1128] to-[#040814] p-10 md:p-14 rounded-[2.5rem] border border-blue-900/30 hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
              <Target className="w-14 h-14 text-cyan-400 mb-8 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              <h3 className="text-3xl font-bold text-white mb-6">Mission Element</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                To engineer highly resilient, AI-optimized cold storage infrastructure that empowers global enterprises to preserve critical assets without compromising environmental integrity.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-gradient-to-b from-[#0a1128] to-[#040814] p-10 md:p-14 rounded-[2.5rem] border border-blue-900/30 hover:border-indigo-400/30 transition-all duration-500 relative overflow-hidden shadow-2xl mt-8 md:mt-16"
            >
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500/20 blur-[60px] rounded-full group-hover:bg-indigo-400/20 transition-colors"></div>
              <Shield className="w-14 h-14 text-indigo-400 mb-8 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
              <h3 className="text-3xl font-bold text-white mb-6">Vision Directive</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                By 2030, IceEdge will be the undisputed global benchmark for zero-emission industrial refrigeration, leading the paradigm shift towards hyper-efficient thermodynamic technologies.
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The IceEdge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Code</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">The fundamental principles that power our engineering and operations.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <Award />, title: "Relentless Excellence", desc: "Perfection isn't a goal; it's our baseline standard across every weld, circuit, and algorithm." },
              { icon: <Users />, title: "Synergistic Partnerships", desc: "We don't build for clients; we engineer alongside visionary partners to guarantee operational dominance." },
              { icon: <Zap />, title: "Future-Proof Innovation", desc: "Deploying next-gen tech today to ensure your infrastructure outlasts industry shifts." },
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 transition-all duration-500"
              >
                <div className="bg-[#040814] rounded-3xl p-8 h-full relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                    {val.icon}
                  </div>
                  <div className="w-14 h-14 bg-blue-900/30 border border-blue-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 shadow-inner">
                    {val.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{val.title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Upgrade Your <br /> <span className="text-cyan-400">Cold Chain?</span></h2>
          <p className="text-xl text-gray-400 mb-12 font-light">Join the industry leaders who trust IceEdge with their most critical infrastructure.</p>
          
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center gap-2 px-8 py-5 bg-white text-[#000510] rounded-2xl font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">Initiate Contact <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </Link>
        </div>
      </section>
    </main>
  );
}
