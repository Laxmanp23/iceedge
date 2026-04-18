"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ThermometerSnowflake, Wrench, Factory, Warehouse, Building2, Apple, Pill, Star, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Cold Storage Setup",
      description: "Complete design and setup of cold storage for warehouse, fruits, vegetables, and dairy.",
      icon: <Warehouse className="w-8 h-8 text-icy-500" />,
    },
    {
      title: "Industrial Refrigeration",
      description: "Heavy-duty refrigeration systems built with advanced technology for optimal performance.",
      icon: <Factory className="w-8 h-8 text-icy-500" />,
    },
    {
      title: "Chillers & Freezers",
      description: "Installation of commercial chillers, blast freezers, and deep freezers.",
      icon: <ThermometerSnowflake className="w-8 h-8 text-icy-500" />,
    },
    {
      title: "Repair & Maintenance",
      description: "Prompt and reliable repair services along with comprehensive AMCs.",
      icon: <Wrench className="w-8 h-8 text-icy-500" />,
    },
  ];

  const industries = [
    { name: "Food & Beverage", icon: <Apple className="w-10 h-10 text-icy-600 mb-4 mx-auto" /> },
    { name: "Pharmaceuticals", icon: <Pill className="w-10 h-10 text-icy-600 mb-4 mx-auto" /> },
    { name: "Logistics", icon: <Warehouse className="w-10 h-10 text-icy-600 mb-4 mx-auto" /> },
    { name: "Retail & Supermarkets", icon: <Building2 className="w-10 h-10 text-icy-600 mb-4 mx-auto" /> },
  ];

  const testimonials = [
    {
      text: "IceEdge transformed our outdated cold storage into a highly efficient facility. Exceptional service!",
      author: "John Doe, PharmaCorp",
    },
    {
      text: "Their AMC service is fantastic. We never have to worry about unexpected breakdowns.",
      author: "Sarah Smith, Fresh Foods Logistics",
    },
    {
      text: "Professional installation and prompt support. The chillers are working beyond expectations.",
      author: "Mike Johnson, City Supermarket",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#000510] text-white min-h-[100vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Animated Gradients */}
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-600/20 blur-[140px] rounded-full mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-[40%] -right-[20%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_delay-2s]"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-indigo-500/20 blur-[130px] rounded-full mix-blend-screen animate-[pulse_9s_ease-in-out_infinite_delay-4s]"></div>
          
          {/* Noise overlay for texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-cyan-300 mb-6 shadow-inner"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              Pioneering Cold Chain Solutions
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
              Mastering <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 drop-shadow-lg">
                  Industrial Cold
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-cyan-500/20 blur-sm rounded-full w-full"></div>
              </span> <br />
              Infrastructure
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-xl">
              Engineered for absolute precision. We build and maintain elite refrigeration systems that safeguard your valuable assets and optimize energy output.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20">
              <Link 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg overflow-hidden flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">Build Your System <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg transition-all border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                View Services
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-500" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                <span>15+ Years Mastery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Abstract Floating UI */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block relative h-[600px] w-full"
          >
            {/* Main Center Piece */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.1)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500/10 blur-[50px] mix-blend-screen animate-[spin_10s_linear_infinite]"></div>
              <ThermometerSnowflake className="w-32 h-32 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" strokeWidth={1} />
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[15%] left-[0%] bg-[#080d1a]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl w-60 ring-1 ring-white/5"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg"><Factory className="w-5 h-5 text-blue-400" /></div>
                <span className="text-[10px] font-bold tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-400/20">ACTIVE</span>
              </div>
              <h3 className="text-gray-300 font-medium text-xs mb-1 uppercase tracking-wide">Cold Storage Alpha</h3>
              <p className="text-3xl font-bold text-white tracking-tight mb-3">-18.5<span className="text-lg text-cyan-400">°C</span></p>
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full"
                ></motion.div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[20%] right-[0%] bg-[#080d1a]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl w-64 ring-1 ring-white/5 flex items-center gap-4"
            >
              <div className="relative flex-shrink-0">
                <svg className="w-14 h-14 transform -rotate-90">
                  <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                  <motion.circle 
                    cx="28" cy="28" r="24" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    fill="transparent" 
                    strokeDasharray="150" 
                    strokeDashoffset="15" 
                    className="text-cyan-400"
                    initial={{ strokeDashoffset: 150 }}
                    animate={{ strokeDashoffset: 15 }}
                    transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">99%</div>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">System Efficiency</h3>
                <p className="text-xs text-cyan-400/70 mt-1">Optimal Performance</p>
              </div>
            </motion.div>
            
            {/* Ambient Highlights */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)] animate-ping"></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] animate-pulse"></div>
          </motion.div>
        </div>
        
        {/* Modern faded grid border divider */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Services Overview Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-icy-100/50 to-transparent rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/30 to-transparent rounded-tr-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-icy-600 font-bold uppercase tracking-widest text-sm mb-4 block">Core Offerings</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Specialized <br className="hidden md:block"/>Refrigeration Expertise
              </h2>
            </div>
            <Link href="/services" className="group shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-900 font-semibold rounded-full hover:border-black transition-all hover:-translate-y-1 hover:shadow-lg">
              View Complete Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group bg-white p-10 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] hover:border-icy-200 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-gradient-to-br from-icy-50 to-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-in-out z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-icy-50 border border-icy-100 shadow-sm flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_-10px_rgba(14,165,233,0.4)] transition-all duration-300">
                    <div className="transform scale-110 text-icy-600">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-icy-700 transition-colors leading-tight">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-light mb-8 group-hover:text-gray-600 transition-colors">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute hidden lg:block right-0 bottom-0 w-[800px] h-[800px] bg-gradient-radial from-gray-100 to-transparent -mr-96 -mb-96 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-last lg:order-first relative"
            >
              {/* Photo Collage Stack */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] bg-gray-100 border border-gray-200/50 shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/60 before:to-transparent before:z-10">
                <img 
                  src="https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Industrial Refrigeration Setup" 
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-in-out" 
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                  <div className="w-16 h-1 bg-icy-400 mb-6 rounded-full"></div>
                  <p className="text-2xl font-bold leading-tight">Modern infrastructure engineered for sustainability and durability.</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-8 top-1/4 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white max-w-[200px]"
              >
                <div className="bg-gradient-to-br from-green-400 to-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-500/30 mb-4 transform -translate-y-10 -ml-2 absolute">
                  <CheckCircle2 strokeWidth={3} className="w-6 h-6"/>
                </div>
                <h4 className="text-gray-900 font-extrabold text-3xl mb-1 tracking-tight">100<span className="text-icy-500">%</span></h4>
                <p className="text-sm font-medium text-gray-500 leading-tight">Reliability Score</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pl-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-icy-50 text-icy-600 text-sm font-bold tracking-wider uppercase mb-8">
                <ShieldCheck className="w-4 h-4" /> IceEdge Advantage
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Why Industry Leaders Choose <span className="text-icy-600 inline-block group overflow-hidden relative">
                  Us
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-icy-200 -z-10 transform -translate-y-1 group-hover:bg-icy-300 transition-colors"></span>
                </span>
              </h2>
              
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light">
                We blend decades of industrial expertise with cutting-edge cooling technologies to deliver resilient refrigeration environments that guarantee peak operational efficiency and absolute product integrity.
              </p>
              
              <div className="space-y-10 relative">
                <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-icy-200 via-gray-200 to-transparent"></div>
                
                {[
                  { title: "Premium Hardware", desc: "We deploy highly calibrated, top-tier equipment sourced exclusively from globally recognized manufacturers to ensure absolute longevity.", icon: <Factory className="w-6 h-6"/> },
                  { title: "Bespoke Engineering", desc: "Mass-market solutions fail in edge cases. We custom-design and assemble every system to strictly adhere to your precise temperature load profiles.", icon: <Wrench className="w-6 h-6"/> },
                  { title: "Zero Downtime Support", desc: "Our proactive monitoring and rapid-response teams operate 24/7. When milliseconds matter, you can rely on our AMC emergency dispatch.", icon: <ShieldCheck className="w-6 h-6"/> },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.15) }}
                    className="flex gap-6 group relative"
                  >
                    <div className="bg-white border-2 border-icy-100 shadow-[0_0_20px_-10px_rgba(14,165,233,0.3)] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-icy-400 group-hover:bg-icy-50 transition-all relative z-10">
                      <div className="text-icy-500 group-hover:scale-110 transition-transform">
                        {item.icon || <Building2 className="w-6 h-6" />}
                      </div>
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-gray-900 text-xl mb-3 tracking-tight group-hover:text-icy-600 transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-base leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gray-950 text-white relative flex flex-col items-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="absolute w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Industries We <span className="text-icy-400">Empower</span></h2>
          <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto font-light">
            Engineered environments optimized for specialized sectors and precise cooling requirements.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative cursor-pointer"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-icy-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative p-8 rounded-2xl bg-gray-900 border border-gray-800 transition-colors h-full flex flex-col items-center justify-center group-hover:border-transparent">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    {ind.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-200 group-hover:text-white transition-colors">
                    {ind.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-icy-200/50 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Trusted by Leaders</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              See what leading pharmaceutical and logistics companies have to say about our installations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_20px_40px_rgb(14,165,233,0.08)] transition-shadow duration-500"
              >
                <div className="absolute -top-6 left-10 w-12 h-12 bg-gradient-to-br from-icy-400 to-blue-600 rounded-full shadow-lg shadow-icy-500/30 flex items-center justify-center text-white font-black text-2xl group-hover:scale-110 transition-transform">"</div>
                
                <div className="flex text-amber-400 mb-6 gap-1 mt-4">
                  <Star className="fill-amber-400 w-5 h-5"/>
                  <Star className="fill-amber-400 w-5 h-5"/>
                  <Star className="fill-amber-400 w-5 h-5"/>
                  <Star className="fill-amber-400 w-5 h-5"/>
                  <Star className="fill-amber-400 w-5 h-5"/>
                </div>
                
                <p className="text-gray-700 text-lg mb-10 leading-relaxed font-light italic">
                  "{test.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${test.author.split(',')[0].trim()}&backgroundColor=0ea5e9,e0f2fe`} alt={test.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 leading-none mb-1">{test.author.split(',')[0].trim()}</p>
                    <p className="text-sm text-gray-500 font-medium">{test.author.split(',')[1].trim()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden mx-4 lg:mx-12 rounded-[3.5rem] mb-24 mt-12 bg-gray-900 isolation-isolate">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-icy-900 to-blue-900 -z-10 mix-blend-multiply opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563212852-c6cb92679237?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center -z-20 opacity-30"></div>
        
        {/* Glow rings */}
        <div className="hidden lg:block absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-icy-400 rounded-full mix-blend-screen filter blur-[150px] opacity-40 -z-10"></div>
        <div className="hidden lg:block absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-40 -z-10"></div>

        <div className="text-center relative z-10 w-full max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight"
          >
            Ready to Upgrade Your <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-icy-300 to-white">Cold Storage?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl mb-12 text-icy-50 font-light"
          >
            Contact our certified engineers today to map out a resilient, high-efficiency refrigeration solution customized for your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-[0_20px_50px_-12px_rgba(255,255,255,0.3)] hover:shadow-none hover:scale-95"
            >
              Request Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
