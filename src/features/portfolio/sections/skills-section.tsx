import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { SectionTitle } from "@/components/motion/section-title";
import { Reveal } from "@/components/motion/reveal";

const allSkills = skillGroups.flatMap((g) => g.items);

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="02 — Skills"
          title="A wide stack,"
          accent="deeply used."
          description="From training ML models in Python to shipping production web apps with React, Next.js and Node — chosen for outcomes, not buzzwords."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.05}>
              <div className="glass-panel rounded-3xl p-7 h-full group hover:bg-white/[0.06] transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <span className="size-10 grid place-items-center rounded-xl bg-white/5 text-spotlight text-lg">
                    {g.icon}
                  </span>
                  <h3 className="text-xl font-bold text-bone tracking-tight">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.4 }}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="text-sm font-medium text-bone/80 border border-white/10 rounded-full px-3.5 py-1.5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 glass-panel rounded-3xl p-6 md:p-8 overflow-hidden">
            <div className="eyebrow mb-4">Toolbelt · {allSkills.length}+ technologies</div>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-3 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {[...allSkills, ...allSkills].map((s, i) => (
                  <span
                    key={`${s}-${i}`}
                    className="text-xs font-mono text-bone/40 border border-white/5 rounded-full px-3 py-1 shrink-0"
                  >
                    {s}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}