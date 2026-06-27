import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { SectionTitle } from "@/components/motion/section-title";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="03 — Experience"
          title="Where I've"
          accent="built."
          description="Internships and engagements across consulting, aviation, fintech and tech — each one delivering tangible insights and code."
        />

        <div className="space-y-3">
          {experience.map((e, i) => (
            <motion.a
              key={e.company + e.period}
              href={e.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="group glass-panel rounded-3xl p-6 md:p-7 grid grid-cols-[auto_1fr_auto] gap-5 items-start hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-12 md:size-14 rounded-xl bg-white/5 overflow-hidden grid place-items-center shrink-0">
                <img src={e.logo} alt={e.company} className="size-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-bone tracking-tight">
                    {e.role}
                  </h3>
                  <span className="text-bone/40 text-sm">— {e.company}</span>
                </div>
                <div className="eyebrow mt-1">{e.period}</div>
                <ul className="mt-3 space-y-1.5 text-bone/60 text-sm leading-relaxed font-light">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-spotlight mt-1.5 size-1 rounded-full bg-spotlight shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-bone/40 group-hover:text-bone group-hover:translate-x-0.5 transition text-xl hidden md:block">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}