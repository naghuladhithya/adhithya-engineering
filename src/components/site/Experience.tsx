import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { Section } from "./Section";

const ease = [0.16, 1, 0.3, 1] as const;

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Experience">
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-[11px]" />
        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease, delay: i * 0.08 }}
              className="relative pl-10 md:pl-14"
            >
              <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full bg-background ring-1 ring-primary/50 md:h-6 md:w-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary md:h-2 md:w-2" />
              </span>
              <div className="card-ring card-ring-hover card-hi group p-6 md:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight md:text-xl">{exp.title}</h3>
                    <p className="mt-1 accent-gradient text-sm font-medium">{exp.company}</p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="font-mono text-xs text-muted-foreground">{exp.date}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
