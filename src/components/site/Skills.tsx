import { skills } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Stagger, StaggerItem } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function Skills() {
  return (
    <Section id="skills" eyebrow="05 — Capabilities" title="Skills">
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <StaggerItem key={group.category}>
            <TiltCard max={2.5} className="card-ring card-ring-hover card-hi h-full p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground/90">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-300 group-hover:border-primary/20 hover:!border-primary/50 hover:text-foreground"
                  >
                    {s}
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
