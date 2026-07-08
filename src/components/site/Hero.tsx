import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile, interests } from "@/lib/portfolio-data";
import { MagneticButton } from "./MagneticButton";
import { Stagger, StaggerItem } from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const buttons = [
    { label: "Resume", href: profile.links.resume, icon: FileText },
    { label: "GitHub", href: profile.links.github, icon: Github },
    { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <section id="home" className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-border glass px-4 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-xs font-medium text-muted-foreground">{profile.status}</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease, delay: 0.05 }}
        className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-gradient sm:text-6xl md:text-7xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.15 }}
        className="mt-6 font-serif text-2xl text-muted-foreground md:text-3xl"
      >
        CS &amp; Data Science <span className="text-foreground/80">@ UIUC</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.25 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
      >
        {profile.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.35 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {buttons.map((b, i) => (
          <MagneticButton
            key={b.label}
            href={b.href}
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              i === 0
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "glass text-foreground hover:border-primary/40"
            }`}
          >
            <b.icon className="h-4 w-4" strokeWidth={1.75} />
            {b.label}
          </MagneticButton>
        ))}
      </motion.div>

      <div className="mt-24">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Currently Exploring
        </span>
        <Stagger className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((it) => (
            <StaggerItem key={it}>
              <div className="card-ring card-ring-hover group h-full p-5">
                <div className="mb-8 h-8 w-8 rounded-lg bg-gradient-to-br from-primary/30 to-violet/20 ring-1 ring-border transition-transform duration-500 group-hover:scale-110" />
                <p className="text-sm font-medium leading-snug">{it}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
