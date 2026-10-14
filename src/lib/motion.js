export const EASE_SECTION = [0.16, 1, 0.3, 1];
export const SPRING_MICRO = { type: "spring", stiffness: 300, damping: 30 };
export const SPRING_CARD = { type: "spring", stiffness: 90, damping: 18, mass: 0.9 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SECTION },
  },
};

export const flyInLeft = {
  hidden: {
    opacity: 0,
    x: -72,
    y: 20,
    scale: 0.96,
    rotate: -1.2,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 24,
      mass: 1.2,
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

export const flyInRight = {
  hidden: {
    opacity: 0,
    x: 72,
    y: 20,
    scale: 0.96,
    rotate: 1.2,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 24,
      mass: 1.2,
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

export const tagItem = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: EASE_SECTION },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const viewportOnce = { once: true, amount: 0.2 };
export const viewportScroll = { once: false, amount: 0.18 };

export const heroReveal = {
  hidden: { opacity: 0, y: 16, scale: 0.98, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_SECTION },
  },
};

export const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_SECTION },
  },
};
