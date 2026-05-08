import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Sparkles, Phone, Linkedin, Github, MapPin, Instagram, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const socials = [
  { icon: <Linkedin size={24} />, link: 'https://www.linkedin.com/in/sachin-raj-0311b9330', name: 'LinkedIn', color: 'hover:text-[#0077B5]' },
  { icon: <Github size={24} />, link: 'https://github.com/Sachin-raj-03', name: 'GitHub', color: 'hover:text-black' },
  { icon: <Instagram size={24} />, link: 'https://www.instagram.com/sachin_dute___', name: 'Instagram', color: 'hover:text-[#E4405F]' },
];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[200px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-6"
              >
                <Sparkles size={14} />
                Contact
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[1.1] mb-6">
                Let's <span className="text-gradient">Work Together</span>
              </h2>
              <p className="text-slate-500 text-lg font-body leading-relaxed max-w-md">
                Have a project in mind? Let's discuss and make it happen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-4 text-slate-400 mb-2">
                    <Mail size={18} className="group-hover:text-brand-blue transition-colors" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Email</span>
                  </div>
                  <p className="text-slate-800 font-display font-bold text-lg">sachinrajb3@gmail.com</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-4 text-slate-400 mb-2">
                    <Phone size={18} className="group-hover:text-brand-purple transition-colors" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Phone</span>
                  </div>
                  <p className="text-slate-800 font-display font-bold text-lg">+91 9363704441</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-4 text-slate-400 mb-2">
                    <MapPin size={18} className="group-hover:text-red-500 transition-colors" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Location</span>
                  </div>
                  <p className="text-slate-800 font-display font-bold text-lg">Salem, Tamil Nadu</p>
                </div>
                <div className="flex gap-4">
                  {socials.map(soc => (
                    <motion.a
                      key={soc.name}
                      href={soc.link}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-4 glass rounded-2xl text-slate-400 ${soc.color} transition-all border-white shadow-md`}
                    >
                      {soc.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-[40px] blur opacity-10" />
            <form onSubmit={handleSubmit} className="relative glass-card p-8 md:p-12 rounded-[40px] space-y-8 border-slate-100 shadow-2xl">
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 z-20 glass rounded-[40px] flex flex-col items-center justify-center text-center p-8 bg-white/90 backdrop-blur-xl"
                >
                  <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">Thank you for reaching out. I'll get back to you shortly at your Gmail.</p>
                </motion.div>
              )}
              <div className="space-y-6">
                <div className="relative group">
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue/30 transition-all shadow-sm"
                    placeholder="Full Name"
                  />
                </div>

                <div className="relative group">
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue/30 transition-all shadow-sm"
                    placeholder="Email Address"
                  />
                </div>

                <div className="relative group">
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue/30 transition-all resize-none shadow-sm"
                    placeholder="Your Message"
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-blue transition-all group overflow-hidden relative shadow-lg"
              >
                <div className="absolute inset-0 bg-brand-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                  {status === 'sending' ? 'SENDING...' : (status === 'error' ? 'TRY AGAIN' : 'SEND MESSAGE')}
                  {status === 'sending' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
