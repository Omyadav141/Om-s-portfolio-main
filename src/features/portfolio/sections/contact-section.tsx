import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Reveal } from "@/components/motion/reveal";

const links = [
  { label: "GitHub", href: "https://github.com/Omyadav141" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/om-yadav-892492268/" },
  { label: "Instagram", href: "https://www.instagram.com/iiamomyadav" },
  { label: "Treva Life", href: "https://www.treva.life/" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-5 md:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_100%,rgba(125,211,252,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-5xl text-center relative z-10">
        <Reveal>
          <span className="eyebrow">10 — Contact</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-bone">
            Let's build{" "}
            <span className="italic font-light bg-gradient-to-br from-bone via-bone/80 to-spotlight bg-clip-text text-transparent">
              together.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-bone/55 max-w-xl mx-auto font-light">
            Open to internships, freelance, research collaborations and full-time opportunities in
            data science, AI/ML and full-stack engineering.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.02, y: -2 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-bone text-ink px-7 py-4 text-base font-medium"
          >
            {profile.email} <span>→</span>
          </motion.a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            <div className="glass-panel rounded-2xl p-5">
              <div className="eyebrow">Location</div>
              <div className="mt-1 text-bone">{profile.location}</div>
            </div>
            <div className="glass-panel rounded-2xl p-5">
              <div className="eyebrow">College Email</div>
              <a
                href={`mailto:${profile.collegeEmail}`}
                className="mt-1 block text-bone hover:text-spotlight transition break-all"
              >
                {profile.collegeEmail}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-full px-4 py-2 text-sm text-bone/80 hover:text-bone hover:bg-white/10 transition"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium rounded-full border border-white/15 text-bone/80 px-3 py-1.5 hover:bg-white/5"
            >
              ↓ Main Resume
            </a>
            {profile.resumeAlt.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium rounded-full border border-white/15 text-bone/80 px-3 py-1.5 hover:bg-white/5"
              >
                ↓ {r.label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 text-xs text-bone/40">
          © {new Date().getFullYear()} {profile.name} · Designed & built with care.
        </div>
      </div>
    </section>
  );
}