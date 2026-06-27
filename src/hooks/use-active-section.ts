import { useEffect, useState } from "react";

/** Tracks which section id is currently the most visible in the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const visibility = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visibility.set(e.target.id, e.intersectionRatio);
        }
        let best = "";
        let max = -1;
        for (const [id, ratio] of visibility) {
          if (ratio > max) {
            max = ratio;
            best = id;
          }
        }
        if (best) setActive(best);
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "-15% 0px -40% 0px",
      }
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}