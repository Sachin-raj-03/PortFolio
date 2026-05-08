import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Monitor, 
  Smartphone, 
  Terminal,
  Zap
} from 'lucide-react';

const categories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: <Terminal className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    skills: ['Spring Boot','FastApi','Node.js','Django']
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    skills: ['Expo Go', 'React Native', 'Mobile UI/UX']
  },
  {
    title: 'Databases & Tools',
    icon: <Database className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    skills: ['MYSQL', 'SQLite', 'PostgreSQL', 'Git', 'Vite', 'Docker','Postman']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-brand-blue/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900">
              MY TECH <span className="text-gradient">ARSENAL</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-sm font-body leading-relaxed text-right md:text-left">
            Powered by the latest technologies and architectural patterns to deliver seamless, performant digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card p-1 rounded-[32px] hover:border-brand-blue/30 transition-all overflow-hidden border-slate-100 shadow-lg"
            >
              <div className="p-8 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} p-3.5 mb-8 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {cat.icon}
                </div>
                
                <h3 className="text-xl font-display font-bold text-slate-900 mb-6 flex items-center justify-between">
                  {cat.title}
                  <span className="text-[10px] font-mono text-slate-300">0{idx + 1}</span>
                </h3>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map(skill => (
                    <motion.span 
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 hover:text-brand-blue hover:bg-white hover:border-brand-blue/30 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
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
