import { ArrowUp, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
          <div className="md:col-span-2 space-y-6">
            <div className="text-3xl font-display font-black flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-brand-blue" />
              <span className="text-slate-900">SACHIN</span>
            </div>
            <p className="max-w-xs text-slate-500 text-sm font-body leading-relaxed">
              Designing and developing digital experiences that push the boundaries of current web standards.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: Github, href: 'https://github.com/Sachin-raj-03' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/sachin-raj-0311b9330' },
                { Icon: Instagram, href: 'https://www.instagram.com/sachin_dute___' }
              ].map(({ Icon, href }, i) => (
                <motion.a 
                  key={i} 
                  href={href}
                  target={href !== '#' ? "_blank" : undefined}
                  rel={href !== '#' ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3, color: "#0088ff" }}
                  className="text-slate-400 hover:text-brand-blue transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em]">Quick Links</h5>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Projects', 'Skills'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-500 hover:text-slate-900 transition-colors w-fit">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end justify-between h-full">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-4 glass rounded-2xl text-brand-blue border-white shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowUp size={24} />
            </motion.button>

          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em]">
            Built with <span className="text-red-500 mx-1">❤️</span> by Sachin
          </p>
          <div className="flex gap-8 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy_Protocol</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms_of_Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
