"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Activity } from "lucide-react";
import { Product } from "@/data/products";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-[#040814]/80 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[#000510]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#040814] to-transparent z-10"></div>
        
        {/* Fallback pattern in case image fails or loading */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent pointer-events-none"></div>
        
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full backdrop-blur-md">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 flex-1 flex flex-col z-20 -mt-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 flex-1">
          {product.description}
        </p>

        {/* Features minimal list */}
        <ul className="space-y-2 mb-8 hidden md:block">
          {product.features.slice(0, 2).map((feat, i) => (
            <li key={i} className="flex items-center text-xs text-gray-500 font-mono tracking-tight">
              <Activity className="w-3 h-3 text-blue-500 mr-2" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Action */}
        <div className="mt-auto">
          <button className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-cyan-400 transition-colors">
            <span>View Schematics</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
