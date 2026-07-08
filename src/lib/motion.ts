// Centralized premium motion language — consistent across the whole site.

// Easing curves (cubic-bezier control points)
export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutCubic: [0.65, 0, 0.35, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  hero: [0.22, 1, 0.36, 1] as const,
};

// Durations (seconds) — matched to the spec.
export const duration = {
  hover: 0.22,
  card: 0.4,
  reveal: 0.65,
  hero: 1.0,
  page: 0.75,
};

// Reusable transitions
export const springSoft = { type: "spring" as const, stiffness: 320, damping: 30, mass: 0.8 };
export const springTilt = { type: "spring" as const, stiffness: 200, damping: 22, mass: 0.6 };
