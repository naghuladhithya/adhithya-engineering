import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/lib/portfolio-data";

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
        >
          <nav
            className={`glass flex items-center gap-1 rounded-full py-2 pl-4 pr-2 transition-shadow duration-500 ${
              scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""
            }`}
          >
            <a href="#home" className="mr-2 hidden text-sm font-semibold tracking-tight sm:block">
              NAV<span className="accent-gradient">.</span>
            </a>
            <ul className="flex items-center gap-0.5">
              {sections.map((s) => (
                <li key={s.id} className="relative">
                  <a
                    href={`#${s.id}`}
                    className={`relative z-10 block rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                      active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </a>
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
