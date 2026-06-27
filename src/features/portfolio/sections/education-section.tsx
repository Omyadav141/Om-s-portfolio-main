import { motion } from "framer-motion";
import { education } from "../data/education";
import { SectionTitle } from "@/components/motion/section-title";

export function EducationSection() {
  return (
    <section id="education" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="07 — Education"
          title="Learning"
          accent="path."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {education.map((e, i) => (
            <motion.article
              key={e.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-3xl overflow-hidden hover:bg-white/[0.06] transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden relative grid place-items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(125,211,252,0.18),transparent_65%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02]" />
                <div className="relative h-[58%] w-[58%] rounded-2xl bg-white/95 ring-1 ring-white/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] grid place-items-center p-3">
                  <img
                    src={e.image}
                    alt={e.institution}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="text-2xl mb-2">{e.icon}</div>
                <h3 className="text-lg font-bold text-bone tracking-tight">
                  {e.institution}
                </h3>
                <div className="mt-1 text-sm text-bone/60">{e.degree}</div>
                <div className="eyebrow mt-3">{e.period}</div>
                <div className="text-sm text-bone/55 mt-1">{e.grad}</div>
                <div className="text-xs text-bone/40 mt-2">{e.extra}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}