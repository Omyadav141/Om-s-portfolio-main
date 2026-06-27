import { Reveal } from "./reveal";
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: ReactNode;
}) {
  return (
    <div className="mb-12 md:mb-20 max-w-3xl">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-bone text-balance">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="bg-gradient-to-br from-bone via-bone/80 to-spotlight bg-clip-text text-transparent italic font-light">
                {accent}
              </span>
            </>
          ) : null}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-6 text-base md:text-lg text-bone/50 max-w-2xl leading-relaxed font-light">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}