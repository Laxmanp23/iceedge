"use client";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, Cpu, FileBox, AlertTriangle, RefreshCw, TerminalSquare } from "lucide-react";

export default function TermsClient() {
  const termsData = [
    {
      id: "01",
      icon: TerminalSquare,
      title: "Protocol Initialization (Acceptance)",
      content: "By accessing the IceEdge Tech network and associated matrices, you establish a direct handshake with our systems. Continued interaction constitutes explicit acceptance of these operational directives."
    },
    {
      id: "02",
      icon: Cpu,
      title: "Matrix Deployment (Services)",
      content: "IceEdge Tech executes industrial thermodynamic cooling installations, hyper-scale cold storage deployment, and automated AMC protocols. All finalized integrations are governed by isolated, cryptographically secure sub-contracts specifying thermal load, timeline, and SLA uptimes."
    },
    {
      id: "03",
      icon: FileBox,
      title: "Resource Allocation (Estimates)",
      content: "Preliminary system architecture quotes outputted via this interface are purely theoretical. Final resource allocation and financial commitments require physical domain scanning and a finalized engineering blueprint."
    },
    {
      id: "04",
      icon: ShieldAlert,
      title: "Source Code & IP Protection",
      content: "All proprietary algorithms, thermodynamic layouts, and visual interfaces hosted on this node are the exclusive intellectual property of IceEdge Tech. Unauthorized duplication or reverse-engineering will trigger immediate legal countermeasures."
    },
    {
      id: "05",
      icon: AlertTriangle,
      title: "System Fault Limitations",
      content: "IceEdge Tech accepts zero liability for catastrophic data loss, localized thermal failure, or localized operational downtime stemming from the unauthorized manipulation of our digital or physical interfaces by third-party operatives."
    },
    {
      id: "06",
      icon: RefreshCw,
      title: "Directive Updates (Modifications)",
      content: "We maintain absolute authority to patch, hotfix, or rewrite these Usage Directives at any cycle. Your continued telemetry with our servers post-update acts as verified consent to the newly compiled operational rulesets."
    }
  ];

  return (
    <div className="min-h-screen bg-[#000510] pt-32 pb-24 selection:bg-cyan-500/30 font-sans relative overflow-hidden">
      {/* Background Graphic FX */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-cyan-500/10 blur-[130px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 text-cyan-400"
          >
            <Activity className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Legal Framework</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
          >
            Usage <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Directives</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-light max-w-2xl"
          >
            Last Compiled: {new Date().toLocaleDateString()}
            <br />
            Operational parameters and contractual bindings for all users accessing the IceEdge Tech digital and physical infrastructure.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {termsData.map((term, index) => (
            <motion.div 
              key={term.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[#040814]/80 backdrop-blur-xl border border-cyan-500/10 hover:border-cyan-500/40 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden"
            >
              {/* Card Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
                {/* ID & Icon Container */}
                <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start shrink-0 md:w-24">
                  <div className="text-4xl font-black text-white/5 group-hover:text-cyan-500/20 transition-colors pointer-events-none select-none">
                    {term.id}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 flex items-center justify-center transition-colors">
                    <term.icon className="w-6 h-6 text-cyan-400 group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Text Payload */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center group-hover:text-cyan-300 transition-colors">
                    {term.title}
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    {term.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-6 text-sm font-mono tracking-widest uppercase">End of File</p>
          <a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold uppercase tracking-wider text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all">
            <span>Acknowledge & Connect</span>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
