import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className ?? ""}`}>
      {(eyebrow || title) && (
        <Reveal className="mb-14">
          {eyebrow && (
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gradient md:text-5xl">
              {title}
            </h2>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
