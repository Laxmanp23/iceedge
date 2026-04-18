"use client";
import { motion } from "framer-motion";
import ProductsGrid from "@/components/products/ProductsGrid";
import FeaturedProduct from "@/components/products/FeaturedProduct";
import Link from "next/link";
import { Activity } from "lucide-react";

export default function ProductsClient() {
  return (
    <div className="min-h-screen bg-[#000510] pt-32 pb-24 selection:bg-cyan-500/30">
      {/* Background Graphic */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 text-cyan-400 mb-6"
          >
            <Activity className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Hardware Directory</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Engineered for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Absolute Zero</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-light leading-relaxed"
          >
            Browse our core matrices and physical infrastructure. Engineered for maximum efficiency, built for industrial supremacy and unwavering reliability.
          </motion.p>
        </div>

        {/* Featured Section */}
        <section className="mb-24">
          <FeaturedProduct />
        </section>

        {/* Primary Grid */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">Core Infrastructure</h2>
            <div className="hidden sm:flex space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            </div>
          </div>
          
          <ProductsGrid />
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#040814] to-[#000510] border border-cyan-500/20 p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-[#000510] to-[#000510] opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need a Custom Protocol?</h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Not seeing the exact matrix you require? Our engineering division specializes in bespoke thermodynamic solutions tailored exactly to your spatial and energy constraints.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#000510] rounded-full font-bold uppercase tracking-wider text-sm hover:bg-cyan-400 transition-colors"
            >
              <span>Initiate Transmission</span>
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
