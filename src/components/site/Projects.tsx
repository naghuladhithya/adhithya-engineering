import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Stagger, StaggerItem } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Selected Work" title="Projects & Research">
      <Stagger className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <StaggerItem key={p.title} className={i === 0 ? "md:col-span-2" : ""}>
            <TiltCard max={2.5} className="card-ring card-ring-hover card-hi relative h-full overflow-hidden p-7 md:p-8">
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
