import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, lazy, useRef } from "react";
import { profile } from "../data/profile";

const HeroScene = lazy(() =>
  import("@/components/three/hero-scene").then((m) => ({ default: m.HeroScene }))
);

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* 3D scene */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity, scale }}
      >
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-radial" />}>
          <HeroScene />
        </Suspense>
      </motion.div>

      {/* Atmospheric gradients */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_40%,rgba(125,211,252,0.18),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(167,139,250,0.14),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-64 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10 py-32"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 glass-panel rounded-full px-3 py-1.5 mb-8"
        >
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="eyebrow !text-bone/70">{profile.status}</span>
        </motion.div>

        <h1 className="text-[clamp(3rem,11vw,11rem)] font-extrabold tracking-[-0.045em] leading-[0.85] text-bone">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {profile.firstName}
          </motion.span>
          <motion.span
            className="block italic font-light bg-gradient-to-br from-bone via-bone/80 to-spotlight bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            {profile.lastName}.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 max-w-xl text-base md:text-lg text-bone/60 leading-relaxed font-light"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink px-6 py-3 text-sm font-medium hover:bg-bone/90 transition"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-panel inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-bone hover:bg-white/10 transition"
          >
            Get in touch
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-bone/70 hover:text-bone transition"
          >
            ↓ Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="glass-panel rounded-2xl px-4 py-4">
              <div className="text-3xl md:text-4xl font-extrabold tracking-tighter text-bone">
                {s.value}
              </div>
              <div className="eyebrow mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}