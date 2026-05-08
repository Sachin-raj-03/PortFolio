import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const words = ["Full Stack Developer", "Mobile App Developer", "Creative Problem Solver"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[index % words.length];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex(index + 1);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-6">
            <span className="text-slate-900">I AM</span><br />
            <span className="text-gradient neon-glow uppercase">SACHIN</span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl font-display font-medium text-slate-500">
              {text}<span className="text-brand-blue animate-pulse">|</span>
            </p>
          </div>
          
          <p className="max-w-lg text-slate-500 text-lg mb-10 font-body leading-relaxed">
            Architecting next-generation digital experiences through advanced 3D interfaces and high-performance engineering.
          </p>

          <div className="flex flex-wrap gap-4">

            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-blue text-white font-black rounded-xl flex items-center gap-2 group shadow-[0_10px_30px_rgba(0,136,255,0.3)] hover:shadow-[0_15px_40px_rgba(0,136,255,0.4)] transition-all"
            >
              View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card text-slate-700 font-black rounded-xl flex items-center gap-2 group border-slate-200"
            >
              RESUME <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* 3D-Like Image Interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 rounded-full blur-[100px] animate-pulse" />
            
            {/* The "Professional Image" Placeholder with 3D Effect */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full glass-card rounded-[40px] p-2 rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden group shadow-2xl"
            >
              <div className="w-full h-full rounded-[36px] overflow-hidden relative">
                <img 
                  src="/sachin.jpg" 
                  alt="Sachin"
                  className="w-full h-full object-cover group-hover:scale-100 transition-all duration-700 scale-110"
                />
                {/* Holographic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />

              </div>
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 border border-slate-100 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-20 border border-brand-blue/5 rounded-full border-dashed"
            />
          </div>
        </motion.div>
      </div>


    </section>
  );
}
