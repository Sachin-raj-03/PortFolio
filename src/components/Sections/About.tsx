import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Heart, Sparkles, Target, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square glass-card rounded-[60px] p-8 overflow-hidden group border-slate-100 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 blur-3xl group-hover:opacity-40 transition-opacity" />
              
              <div className="relative h-full flex flex-col justify-between z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 glass rounded-3xl text-brand-blue shadow-md border-white">
                      <GraduationCap size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-slate-900">Academic Path</h4>
                      <p className="text-sm text-slate-500">Bachelor of Computer Science Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-4 glass rounded-3xl text-brand-purple shadow-md border-white">
                      <Zap size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-slate-900">Full Stack Strategy</h4>
                      <p className="text-sm text-slate-500">Architecting end-to-end digital solutions</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-4 glass rounded-3xl text-orange-500 shadow-md border-white">
                      <Sparkles size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-slate-900">User-Centric Design</h4>
                      <p className="text-sm text-slate-500">Crafting intuitive & engaging interfaces</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 glass rounded-[40px] border-white shadow-lg">
                  <p className="text-2xl font-display font-bold text-slate-800 mb-2">"Building things that didn't exist yesterday."</p>
                </div>
              </div>
            </div>

            {/* Floating Geometric Shapes */}
            <motion.div
              animate={{ rotate: 360, y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-24 h-24 border border-brand-blue/10 rounded-2xl"
            />
            <motion.div
              animate={{ rotate: -360, x: [0, 20, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-12 -left-12 w-32 h-32 border border-brand-purple/10 rounded-full border-dashed"
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6">
                THE MIND BEHIND <br /><span className="text-gradient">THE MACHINE</span>
              </h2>
              <div className="w-20 h-1 bg-brand-blue mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-slate-600 text-lg leading-relaxed"
            >
              <p>
                I'm a passionate developer currently pursuing my degree in <span className="text-slate-900 font-bold">Computer Science & Engineering</span>. 
                My journey into the digital realm started with a curiosity about how pixels become experiences.
              </p>
              <p>
                Specializing in <span className="text-brand-blue">immersive web technologies</span> and <span className="text-brand-purple">high-performance mobile applications</span>, 
                I bridge the gap between complex engineering and breathtaking design.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="glass p-6 rounded-2xl border-white hover:border-brand-blue/30 transition-all shadow-md">
                  <Heart className="text-brand-blue mb-4" />
                  <h5 className="text-slate-900 font-bold mb-2">Passion</h5>
                  <p className="text-sm">Creating interfaces that feel alive and responsive.</p>
                </div>
                <div className="glass p-6 rounded-2xl border-white hover:border-brand-purple/30 transition-all shadow-md">
                  <Target className="text-brand-purple mb-4" />
                  <h5 className="text-slate-900 font-bold mb-2">Goal</h5>
                  <p className="text-sm">To push the boundaries of what's possible in the browser.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
