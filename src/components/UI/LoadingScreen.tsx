import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinished, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <div className="relative mb-12">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-32 h-32 rounded-full border-t-2 border-brand-blue border-r-2 border-transparent"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center font-display font-bold text-2xl tracking-tighter"
        >
          <span className="text-slate-900">DEV</span>
          <span className="text-brand-blue">SACHIN</span>
        </motion.div>
      </div>

      <div className="w-64 space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-mono text-brand-blue uppercase tracking-[0.2em]">Initialising System</span>
          <span className="text-xs font-mono text-slate-400">{progress}%</span>
        </div>
        <div className="h-[2px] w-full bg-slate-100 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-brand-blue shadow-[0_0_10px_rgba(0,136,255,0.3)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="absolute bottom-12 left-12 font-mono text-[8px] text-slate-300 space-y-1">
        <p>CORE_v4.2.0_READY</p>
        <p>SYSTEM_LINK_STABLE</p>
        <p>3D_ENGINE_ACTIVE</p>
      </div>
    </motion.div>
  );
}
