import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, Trophy } from 'lucide-react';

const certificates = [
  {
    title: 'ACHIEVEMENTS',
    issuer: 'CERTIFICATES',
    icon: <Award className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500'
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            <Trophy size={14} />
            Verified Excellence
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900">
            ACHIEVEMENTS & <br /><span className="text-gradient">CERTIFICATES</span>
          </h2>
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card p-8 rounded-[40px] flex flex-col items-center text-center relative overflow-hidden border-slate-100 shadow-xl w-full max-w-sm"
            >
              {/* Background Glow */}
              <div className={`absolute -inset-20 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />
              
              <div className={`w-20 h-20 rounded-[28px] bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                {cert.icon}
              </div>

              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                  {cert.title}
                </h3>
                <div className="space-y-1">
                  <p className="text-sm text-slate-500 font-medium">{cert.issuer}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 w-full flex justify-center">
                <button className="text-[10px] font-mono text-brand-blue font-black uppercase tracking-widest hover:tracking-[0.2em] transition-all">
                  View Credentials
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
