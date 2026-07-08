import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section id="education" eyebrow="02 — Education" title="Education">
      <Reveal>
        <div className="card-ring card-ring-hover card-hi group overflow-hidden p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/25 to-violet/20 ring-1 ring-border">
                <GraduationCap className="h-6 w-6 text-primary" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{education.school}</h3>
                <p className="mt-1.5 text-muted-foreground">{education.degree}</p>
              </div>
            </div>
            <div className="shrink-0 space-y-2 md:text-right">
              <p className="font-mono text-sm text-primary">{education.date}</p>
              <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground md:justify-end">
                <MapPin className="h-3.5 w-3.5" /> {education.location}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
