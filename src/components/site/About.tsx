import { about } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="font-serif text-3xl leading-snug text-foreground/90 md:text-4xl">
            Building systems that are fast, efficient, and built to scale.
          </p>
        </Reveal>
        <div className="space-y-6">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
