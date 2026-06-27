import { research } from "../data/research";
import { SectionTitle } from "@/components/motion/section-title";
import { Reveal } from "@/components/motion/reveal";

export function ResearchSection() {
  return (
    <section id="research" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="05 — Research"
          title="Published"
          accent="work."
          description="Three peer-reviewed publications across IoT, FinTech, and AI security — all author Om Yadav."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {research.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <article className="glass-panel rounded-3xl p-7 h-full flex flex-col hover:bg-white/[0.06] transition-colors">
                <div className="size-12 grid place-items-center rounded-xl bg-white/5 text-2xl mb-5">
                  {r.icon}
                </div>
                <div className="eyebrow text-bone/60">{r.venue}</div>
                <h3 className="mt-3 text-lg font-bold text-bone tracking-tight leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-bone/55 font-light">{r.meta}</p>
                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  <a
                    href={r.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium rounded-full bg-bone text-ink px-3 py-1.5 hover:bg-bone/90"
                  >
                    Paper ↗
                  </a>
                  <a
                    href={r.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium rounded-full border border-white/15 text-bone/80 px-3 py-1.5 hover:bg-white/5"
                  >
                    Certificate
                  </a>
                  <a
                    href={r.journal}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium rounded-full border border-white/15 text-bone/80 px-3 py-1.5 hover:bg-white/5"
                  >
                    Journal
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}