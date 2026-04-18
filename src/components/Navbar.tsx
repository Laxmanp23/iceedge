"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Snowflake, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // State to track which dropdown is open on desktop/mobile
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products',
      subItems:[
        { name: 'Industrial Refrigeration', path: '/products#industrial' },
        { name: 'Commercial Refrigeration', path: '/products#commercial' },
        { name: 'Custom Solutions', path: '/products#custom' }
      

      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      subItems: [
        { name: 'Industrial Refrigeration', path: '/industrial-refrigeration' },
        { name: 'Thermodynamic Storage', path: '/services#storage' },
        { name: 'Industrial Ammonia', path: '/services#ammonia' },
        { name: 'Commercial Chillers', path: '/services#chillers' },
        { name: 'Diagnostic & AMC', path: '/services#diagnostic' }
      ]
    },
    { name: 'Contact', path: '/contact' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#000510]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-50">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
              <Snowflake className="h-6 w-6 text-cyan-400 group-hover:animate-[spin_4s_linear_infinite]" />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">IceEdge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Refrigeration</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex space-x-1 bg-white/5 border border-white/5 rounded-full px-2 py-1 backdrop-blur-md mr-4 relative">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.subItems && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.subItems && setActiveDropdown(null)}
                >
                  <Link 
                    href={link.path}
                    className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-300 transition-colors rounded-full overflow-hidden flex items-center gap-1 group/link"
                  >
                    <span className="relative z-10 tracking-wide uppercase text-xs">{link.name}</span>
                    {link.subItems && (
                      <ChevronDown className={`w-3 h-3 text-cyan-500 relative z-10 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover/link:bg-cyan-500/10 transition-colors rounded-full"></div>
                  </Link>

                  {/* Desktop Dropdown */}
                  {link.subItems && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-[#040814]/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden z-50 p-2"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                          <div className="flex flex-col gap-1">
                            {link.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className="px-4 py-3 text-xs tracking-wider uppercase font-medium text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition-all duration-200 border border-transparent hover:border-cyan-500/20"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <Link 
              href="/contact"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-sm overflow-hidden flex items-center gap-2 transition-all hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-1 uppercase tracking-wider text-xs">
                Initiate <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#040814]/95 backdrop-blur-2xl border-b border-cyan-500/20 absolute w-full left-0 top-full overflow-hidden"
          >
            <div className="px-4 py-8 space-y-3 flex flex-col items-center max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full flex justify-center flex-col items-center">
                  {link.subItems ? (
                    <div className="w-full flex-col items-center">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className={`w-full flex items-center justify-center gap-2 px-3 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all border border-transparent ${
                          activeDropdown === link.name ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-cyan-400' : 'text-cyan-600'}`} />
                      </button>
                      
                      {/* Mobile Accordion for Sub Items */}
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="w-full overflow-hidden"
                          >
                            <div className="py-2 px-4 space-y-2 flex flex-col items-center bg-[#000510]/50 rounded-b-xl border-x border-b border-cyan-500/10 mb-2">
                              {link.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className="block w-full text-center px-4 py-3 text-xs tracking-[0.2em] font-medium text-gray-400 hover:text-cyan-300 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className="block w-full text-center px-3 py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="w-full pt-4 mt-2 border-t border-white/5">
                <Link 
                  href="/contact"
                  className="block w-full text-center px-5 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Initiate Systems
                </Link>
              </div>
            </div>
            
            {/* Mobile Menu Background Polish */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
