import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { projects, projectCategories, type Project } from "../data/projects";
import { SectionTitle } from "@/components/motion/section-title";

const sizeClass: Record<NonNullable<Project["size"]>, string> = {
  sm: "md:col-span-3 md:row-span-1",
  md: "md:col-span-4 md:row-span-1",
  lg: "md:col-span-5 md:row-span-1",
  xl: "md:col-span-7 md:row-span-2",
};

function ProjectCard({
  p,
  onOpen,
}: {
  p: Project;
  onOpen: (p: Project) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });
  // Apple-style "product flip" — card rotates through Y as it scrolls past
  const rawRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [22, 0, -22]);
  const rawRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const rotateY = useSpring(rawRotateY, { stiffness: 90, damping: 22, mass: 0.4 });
  const rotateX = useSpring(rawRotateX, { stiffness: 90, damping: 22, mass: 0.4 });
  const scale = useSpring(rawScale, { stiffness: 90, damping: 22, mass: 0.4 });
  const transform = useMotionTemplate`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

  return (
    <motion.button
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(p)}
      className={`group relative overflow-hidden rounded-3xl glass-panel text-left hover:bg-white/[0.06] transition-colors will-change-transform ${
        sizeClass[p.size ?? "md"]
      } col-span-1`}
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.08]">
        <img
          src={p.cover}
          alt={p.title}
          className="size-full object-cover opacity-50 group-hover:opacity-65 transition-opacity"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div
        className="absolute inset-x-0 -bottom-px h-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(125,211,252,0.18), transparent 70%)",
        }}
      />
      <div className="relative h-full p-6 flex flex-col justify-end">
        <span className="eyebrow text-spotlight">{p.category}</span>
        <h3 className="mt-2 text-xl md:text-2xl font-bold text-bone tracking-tight">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-bone/60 line-clamp-2 font-light">
          {p.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider text-bone/60 border border-white/10 rounded-full px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export function ProjectsSection() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((p) => p.category === category),
    [category]
  );

  return (
    <section id="projects" className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="04 — Projects"
          title="Things I've"
          accent="shipped."
          description="A selection of products, research, and experiments — built end-to-end across web, AI/ML, IoT, 3D and games."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`relative px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium rounded-full transition ${
                category === c
                  ? "text-ink"
                  : "text-bone/60 hover:text-bone glass-panel"
              }`}
            >
              {category === c && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 -z-10 bg-bone rounded-full"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 auto-rows-[260px] gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} p={p} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass-panel rounded-3xl overflow-hidden max-h-[88vh] overflow-y-auto"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 size-9 rounded-full glass-panel grid place-items-center text-bone/80 hover:text-bone"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={active.cover}
                  alt={active.title}
                  className="size-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="eyebrow text-spotlight">{active.category}</span>
                <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-bone tracking-tight">
                  {active.title}
                </h3>
                <p className="mt-4 text-bone/70 leading-relaxed">
                  {active.long ?? active.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs uppercase tracking-wider text-bone/70 border border-white/10 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {active.href && (
                  <a
                    href={active.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-bone text-ink px-5 py-2.5 text-sm font-medium hover:bg-bone/90"
                  >
                    {active.hrefLabel ?? "Open"} →
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}