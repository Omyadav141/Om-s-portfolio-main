import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let p = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      p = Math.min(100, (elapsed / 1300) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            className="text-bone font-extrabold tracking-tighter text-5xl md:text-7xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            OM<span className="text-spotlight">.</span>
          </motion.div>
          <div className="mt-8 h-px w-64 bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-bone to-transparent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 eyebrow text-white/40">
            {Math.floor(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}