import { motion, useScroll, useSpring } from "framer-motion";
import { sections } from "@/features/portfolio/data/sections";
import { useActiveSection } from "@/hooks/use-active-section";
import { useEffect, useState } from "react";
import { profile } from "@/features/portfolio/data/profile";

const ids = sections.map((s) => s.id);

export function Nav() {
  const active = useActiveSection(ids);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-spotlight via-aurora to-bone"
        style={{ scaleX: progress }}
      />
      <header className="fixed top-3 md:top-5 left-0 right-0 z-40 flex justify-center px-3">
        <nav className="glass-panel flex items-center gap-1 rounded-full px-2 py-1.5 md:py-2 max-w-[calc(100vw-1.5rem)]">
          <button
            onClick={() => go("hero")}
            className="ml-2 mr-1 font-extrabold tracking-tighter text-bone text-base md:text-lg"
          >
            OM<span className="text-spotlight">.</span>
          </button>
          <div className="hidden lg:flex items-center gap-0.5">
            {sections.slice(1, -1).map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`relative px-3 py-1.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
                  active === s.id ? "text-bone" : "text-bone/50 hover:text-bone/80"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 ml-1">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="size-9 grid place-items-center rounded-full text-bone/70 hover:text-bone hover:bg-white/5 transition"
            >
              {theme === "dark" ? "☾" : "☀"}
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-bone text-ink px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-medium hover:bg-bone/90 transition"
            >
              Contact
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden size-9 grid place-items-center rounded-full text-bone/80 hover:bg-white/5"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-3 right-3 z-40 lg:hidden glass-panel rounded-2xl p-4 grid grid-cols-2 gap-1"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`text-left px-3 py-2 rounded-lg text-sm ${
                active === s.id ? "text-bone bg-white/5" : "text-bone/60"
              }`}
            >
              {s.label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
}