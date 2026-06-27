import { motion } from "framer-motion";
import { engagements } from "../data/engagements";
import { SectionTitle } from "@/components/motion/section-title";

const palettes = [
  "from-spotlight/40 via-aurora/25 to-transparent",
  "from-aurora/40 via-spotlight/25 to-transparent",
  "from-emerald-400/30 via-spotlight/20 to-transparent",
  "from-amber-300/35 via-rose-400/20 to-transparent",
];

export function EngagementsSection() {
  return (
    <section id="engagements" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="09 — Engagements"
          title="People I've"
          accent="met."
          description="Snapshots and conversations from the AI Impact Summit 2026 and other events — with policy leaders, founders, and researchers shaping the future of AI."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {engagements.map((p, i) => {
            const initials = p.name
              .split(" ")
              .map((w) => w[0])
              .filter(Boolean)
              .slice(0, 2)
              .join("");
            const palette = palettes[i % palettes.length];
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.04 }}
                whileHover={{ y: -4 }}
                className="glass-panel rounded-3xl overflow-hidden hover:bg-white/[0.06] transition flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 size-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${palette} grid place-items-center`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
                      <div className="relative size-32 md:size-36 rounded-full bg-white/[0.08] backdrop-blur-xl ring-1 ring-white/25 grid place-items-center text-4xl md:text-5xl font-extrabold text-bone tracking-tight shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                        {initials}
                      </div>
                      <span className="absolute top-3 left-4 eyebrow text-bone/70">Stylised crest</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col gap-1">
                  <div className="text-base md:text-lg font-bold text-bone tracking-tight">{p.name}</div>
                  {p.role && (
                    <div className="eyebrow text-spotlight">{p.role}</div>
                  )}
                  <p className="mt-2 text-sm text-bone/60 font-light leading-relaxed">{p.note}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}