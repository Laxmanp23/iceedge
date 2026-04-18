import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Snowflake, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#000510] border-t border-white/10 text-gray-300 overflow-hidden">
      {/* Ambient Future Glow */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-[20%] w-[30%] h-[30%] bg-blue-600/10 blur-[130px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3 group relative w-max">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                <Snowflake className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">IceEdge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Refrigeration</span></span>
            </Link>
            
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Engineered for absolute precision. We build and maintain elite refrigeration matrices that safeguard your critical assets and optimize energy output globally.
            </p>
            
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all overflow-hidden">
                  <Icon className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 relative z-10 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="text-xs font-bold text-gray-200 tracking-widest uppercase mb-8 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" /> Directory Nodes
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <Link href="/" className="group flex items-center text-sm font-light text-gray-400 hover:text-cyan-400 transition-colors">
                    <span className="w-0 h-0.5 bg-cyan-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="text-xs font-bold text-gray-200 tracking-widest uppercase mb-8 flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-500" /> Matrices
            </h3>
            <ul className="space-y-4">
              {['Thermodynamic Cold Storage', 'Industrial Ammonia Systems', 'Commercial Chiller Units', 'Diagnostic & AMC'].map((service, idx) => (
                <li key={idx} className="group flex items-center text-sm font-light text-gray-400 hover:text-indigo-300 cursor-pointer transition-colors">
                  <span className="w-0 h-0.5 bg-indigo-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-xs font-bold text-gray-200 tracking-widest uppercase mb-8 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-500" /> Comm Channels
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 group cursor-default">
                <MapPin className="h-5 w-5 text-gray-600 group-hover:text-cyan-400 shrink-0 transition-colors" />
                <span className="text-sm font-light text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  123 Tech Industrial Grid<br />
                  New York Sector, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone className="h-5 w-5 text-gray-600 group-hover:text-cyan-400 shrink-0 transition-colors" />
                <span className="text-sm font-light text-gray-400 group-hover:text-gray-300 transition-colors">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Mail className="h-5 w-5 text-gray-600 group-hover:text-cyan-400 shrink-0 transition-colors" />
                <span className="text-sm font-light text-gray-400 group-hover:text-gray-300 transition-colors">comms@iceedge.tech</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-light text-gray-500 tracking-wide uppercase">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            &copy; {new Date().getFullYear()} IceEdge Systems. Online.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Protocol</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Usage Directives</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
