import { motion } from "motion/react";

export function DeveloperCredit({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.a
        href="https://yashrajjadhav.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="group flex flex-col items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-emerald-900/40 hover:text-emerald-900/80 transition-colors pointer-events-auto text-center"
      >
        <div className="flex items-center gap-1.5">
          <span>Made with</span>
          <span className="text-red-500 text-[10px]">❤️</span>
          <span>by</span>
          <span className="font-black text-emerald-950 bg-gradient-to-r from-emerald-900 to-emerald-600 bg-clip-text text-transparent group-hover:from-primary group-hover:to-emerald-500 transition-all duration-300">
            YASHRAJ JADHAV
          </span>
        </div>
        <span className="text-[9px] tracking-widest text-emerald-900/30 font-semibold normal-case">
          Dedicated to the man who made me love physics; Abhishek Sir.
        </span>
      </motion.a>
    </div>
  );
}
