"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Zap, Target } from "lucide-react";

export default function ContactClient() {
  return (
    <main className="bg-[#000510] text-gray-300 min-h-screen selection:bg-cyan-500/30">
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
        {/* Glow & Grid Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-0 right-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[10%] w-[30%] h-[30%] bg-cyan-500/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-cyan-300 mb-8"
           >
             <Zap className="w-4 h-4 text-cyan-400" />
             Establish Connection
           </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Comms</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ready to elevate your refrigeration infrastructure? Transmit your coordinates and our engineering team will interface shortly.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#040814] rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden group"
            >
               {/* Hover Glow Background */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 rounded-full blur-[40px] group-hover:from-cyan-500/10 group-hover:to-blue-500/20 transition-all duration-700"></div>

              <div className="flex items-center gap-2 mb-8">
                <Target className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white tracking-wide">Signal Matrix</h2>
              </div>

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Alpha Designation</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0a1128]/50 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-gray-600" 
                      placeholder="First Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Omega Designation</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0a1128]/50 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-gray-600" 
                      placeholder="Last Name" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Comms Relay (Email)</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#0a1128]/50 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-gray-600" 
                    placeholder="email@directive.com" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Frequency (Phone)</label>
                  <input 
                    type="tel" 
                    className="w-full bg-[#0a1128]/50 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-gray-600" 
                    placeholder="+1 (000) 000-0000" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Transmission Data</label>
                  <textarea 
                    rows={5} 
                    className="w-full bg-[#0a1128]/50 text-white px-5 py-4 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-gray-600 resize-none" 
                    placeholder="Provide system logs and inquiry details..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="group relative w-full flex items-center justify-center gap-2 px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2 tracking-wide">
                    Transmit Data <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="bg-[#040814] rounded-3xl border border-white/10 p-8 flex flex-col h-full hover:border-blue-500/30 transition-colors">
                <h2 className="text-2xl font-bold text-white tracking-wide mb-8 border-b border-white/10 pb-6">Base Coordinates</h2>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-start gap-5 group">
                    <div className="bg-blue-900/30 p-4 rounded-2xl border border-blue-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 text-lg">Command Center</h4>
                      <p className="text-gray-500 mt-2 font-light leading-relaxed">123 Industrial Estate, Tech District<br/>New York Grid, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-blue-900/30 p-4 rounded-2xl border border-blue-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 text-lg">Direct Frequency</h4>
                      <p className="text-gray-500 mt-2 font-light leading-relaxed">+1 (555) 123-4567<br/>Active: Mon-Fri 0900 - 1800 EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-blue-900/30 p-4 rounded-2xl border border-blue-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 text-lg">Digital Routing</h4>
                      <p className="text-gray-500 mt-2 font-light leading-relaxed">comms@iceedgerefrigeration.com<br/>support@iceedge.tech</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map/Radar Box */}
              <div className="h-64 bg-[#040814] rounded-3xl border border-white/10 p-2 overflow-hidden relative group">
                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1689101234567!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  className="rounded-2xl saturate-50 contrast-125 opacity-70 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-500"
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
