import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit } from 'lucide-react';

export function LoadingAnimation({ message = "Syncing Data...", fullScreen = false }: { message?: string, fullScreen?: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-6 ${fullScreen ? 'min-h-screen bg-[#fbfdfb]' : 'min-h-[50vh]'}`}>
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Outer dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-[2px] border-dashed border-emerald-900/20"
        />
        
        {/* Middle glowing ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-[3px] border-emerald-950/5 border-t-primary border-b-primary shadow-[0_0_15px_rgba(16,185,129,0.2)]"
        />

        {/* Inner solid ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-5 rounded-full border-[2px] border-emerald-950/10 border-l-primary"
        />

        {/* Center pulsing icon */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20"
        >
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <BrainCircuit className="text-primary w-5 h-5 relative z-10" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-950 flex items-center gap-1"
        >
          Processing
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="text-primary"
          >
            _
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[9px] font-bold uppercase tracking-widest text-emerald-900/40"
        >
          {message}
        </motion.div>
      </div>
    </div>
  );
}
