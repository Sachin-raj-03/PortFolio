import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2"
        >
          <Sparkles className="w-6 h-6 text-brand-blue animate-pulse" />
          <span className="text-slate-900">SACHIN</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/Sachin-raj-03" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/sachin-raj-0311b9330" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/sachin_dute___" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram size={20} /></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass rounded-2xl p-6 flex flex-col space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
