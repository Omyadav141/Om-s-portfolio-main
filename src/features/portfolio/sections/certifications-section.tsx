import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { SectionTitle } from "@/components/motion/section-title";

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="06 — Achievements"
          title="Certifications &"
          accent="recognitions."
          description="A continual learning practice — Simplilearn, Forage, TATA, BCG X, British Airways, Intel, Accenture and more."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {certifications.map((c, i) => (
            <motion.a
              key={c.title + i}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass-panel rounded-3xl p-6 md:p-7 flex flex-col gap-4 hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-20 md:size-24 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 overflow-hidden grid place-items-center p-3">
                <img src={c.logo} alt={c.issuer} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              <div className="eyebrow text-bone/60">{c.issuer}</div>
              <div className="text-base md:text-lg font-semibold text-bone leading-snug tracking-tight">{c.title}</div>
              <div className="text-xs text-bone/45 mt-auto">{c.date}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}