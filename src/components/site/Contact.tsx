import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "GitHub", value: "github.com/naghuladhithya", href: profile.links.github, icon: Github },
    { label: "LinkedIn", value: "linkedin.com/in/naghuladhithya", href: profile.links.linkedin, icon: Linkedin },
    { label: "Instagram", value: "instagram.com/naghuladhithya__", href: profile.links.instagram, icon: Instagram },
    { label: "X", value: "x.com/naghuladhithya_", href: profile.links.twitter, icon: Twitter },
  ];
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div>
            <p className="font-serif text-4xl leading-tight text-gradient md:text-5xl">Let's build something.</p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              Open for internships, research collaborations, and thoughtful conversations.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-ring divide-y divide-border overflow-hidden">
            {rows.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-accent/40"
              >
                <span className="inline-flex items-center gap-3 text-sm font-medium">
                  <r.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" strokeWidth={1.75} />
                  {r.label}
                </span>
                <span className="truncate font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {r.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
