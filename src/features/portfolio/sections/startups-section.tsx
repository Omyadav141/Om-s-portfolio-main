import { motion } from "framer-motion";
import { startups } from "../data/startups";
import { SectionTitle } from "@/components/motion/section-title";

export function StartupsSection() {
  return (
    <section id="startups" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="08 — Ventures"
          title="Startups I"
          accent="run."
          description="Three active ventures across fashion, F&B and digital content — building, marketing and shipping in the real world."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {startups.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-3xl overflow-hidden hover:bg-white/[0.06] transition-colors flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative grid place-items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(167,139,250,0.18),transparent_65%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02]" />
                <div className="relative h-[55%] w-[55%] rounded-2xl bg-white/95 ring-1 ring-white/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] grid place-items-center p-3">
                  <img src={s.image} alt={s.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-bone tracking-tight">{s.name}</h3>
                  <div className="eyebrow text-spotlight mt-1">{s.tagline}</div>
                </div>
                <p className="text-sm text-bone/60 font-light leading-relaxed">{s.description}</p>
                <dl className="grid grid-cols-2 gap-2 text-xs mt-2">
                  {s.meta.map(([k, v]) => (
                    <div key={k}>
                      <dt className="eyebrow !text-[9px]">{k}</dt>
                      <dd className="text-bone/70 mt-0.5">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto pt-3 flex flex-wrap gap-2">
                  {s.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium rounded-full border border-white/15 text-bone/80 px-3 py-1.5 hover:bg-white/5"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}