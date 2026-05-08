import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    title: 'EXPENSE TRACKER',
    category: 'Mobile Application',
    description: 'A professional finance management app built with Expo Go. Features real-time tracking, automated total calculations, and daily spending analysis.',
    image: '/Expense_image.png',
    tags: ['Expo Go', 'React Native', 'SQLite'],
    color: '#0088ff',
    isMobile: true,
    github: 'https://github.com/Sachin-raj-03/Expense-Tracker',
    demo: '#',
    features: ['Daily tracking', 'PDF Generation', 'Offline Storage', 'Visual Analytics']
  },
  {
    title: 'POORANI ENGINEERING',
    category: 'Web Application',
    description: 'A premium industrial showcase for a stainless steel manufacturing leader. Features high-fidelity product galleries and technical specification management.',
    image: '/POORANI ENGINEERING_image.png',
    tags: ['React', 'Tailwind CSS', 'FastAPI (Python)', 'Cloudinary', 'Vercel'],
    color: '#64748b',
    isMobile: false,
    github: 'https://github.com/Sachin-raj-03/Poorani-Engineering-Website',
    demo: '#',
    features: ['Product Catalog', 'Responsive Design', 'Industrial UI', 'Cloud Image Storage']
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-[1px] bg-brand-blue" />
            <span className="text-[10px] font-mono text-brand-blue uppercase tracking-[0.4em]">Portfolio Case Studies</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-display font-black text-slate-900"
          >
            CINEMATIC <br /><span className="text-gradient">SHOWCASE</span>
          </motion.h2>
        </div>

        <div className="space-y-40">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Visual Preview */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div 
                    className="absolute -inset-4 rounded-[40px] opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"
                    style={{ background: project.color }}
                  />
                  
                  {project.isMobile ? (
                    /* Phone Mockup Style */
                    <div className="relative mx-auto w-[280px] h-[580px] bg-white rounded-[48px] border-[8px] border-slate-100 overflow-hidden shadow-2xl">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-100 rounded-b-2xl z-20" />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    /* Browser Style */
                    <div className="aspect-video glass-card rounded-[32px] overflow-hidden border-slate-100 shadow-xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}

                  {/* Icon Overlay */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 glass rounded-3xl flex items-center justify-center text-slate-800 border-white shadow-xl group-hover:border-brand-blue/50 transition-all">
                    {project.isMobile ? <Smartphone size={32} /> : <Globe size={32} />}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-brand-blue font-black uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-display font-black text-slate-900 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-lg font-body leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 glass rounded-xl text-xs font-bold text-slate-600 border-white shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <motion.a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl flex items-center gap-2 hover:bg-brand-blue transition-all shadow-lg"
                  >
                    LIVE DEMO <ExternalLink size={18} />
                  </motion.a>
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass rounded-2xl text-slate-700 hover:text-brand-blue transition-colors border-white shadow-md"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>

                <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                  {project.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <div className="w-1 h-1 bg-brand-blue rounded-full" />
                      {f.toUpperCase()}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
