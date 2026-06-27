import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/motion/section-title";

const timeline = [
  { year: "2021", title: "Co-founded Ladachi Kulfi", body: "First foray into entrepreneurship — premium kulfi chain across Indian markets." },
  { year: "2022", title: "Founded Treva Life", body: "Launched a luxury fashion brand on e-commerce — shoes, glasses, perfumes, bags across India." },
  { year: "2023", title: "Started B.Tech CSE", body: "Joined GH Raisoni University Nagpur. First published research: IJFMR, Nov–Dec 2023." },
  { year: "2024", title: "Published 2 papers + Finease", body: "IRJMETS (IoT) + IJIRTS (Finease) and led Cricheros sports specialist work." },
  { year: "2025", title: "Multiple Data Science Internships", body: "TATA, BCG X, British Airways, Accenture — analytics, modeling, and consulting simulations." },
  { year: "2026", title: "AI Impact Summit + One Aim", body: "Joined One Aim IT Solution as Data Science Intern; attended global AI Impact Summit." },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="01 — About"
          title="Builder, researcher,"
          accent="founder."
          description="A computer science student from Nagpur turning ideas into shipped products — across data science, AI/ML, and full-stack web. Published 3 research papers, founded 3 ventures, and worked with TATA, BCG X, and British Airways."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="glass-panel rounded-3xl p-2 sticky top-32">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full aspect-[4/5] object-cover rounded-[20px]"
                  loading="lazy"
                />
                <div className="px-5 py-4">
                  <div className="text-bone font-semibold">{profile.name}</div>
                  <div className="text-bone/50 text-sm mt-0.5">{profile.shortBio}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {profile.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] uppercase tracking-[0.18em] text-bone/60 border border-white/10 rounded-full px-2.5 py-1"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <ol className="space-y-10">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                    className="relative pl-12 md:pl-14"
                  >
                    <span className="absolute left-0 top-1 size-6 md:size-8 rounded-full glass-panel grid place-items-center text-[10px] text-bone/70">
                      ✦
                    </span>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="eyebrow text-spotlight">{t.year}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-bone tracking-tight">
                        {t.title}
                      </h3>
                    </div>
                    <p className="text-bone/55 leading-relaxed font-light">{t.body}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}