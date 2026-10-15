import { motion, useReducedMotion, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "../../data/site";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { Button } from "../ui/Button";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { heroReveal } from "../../lib/motion";

export function Hero() {
  const { ref, scrollYProgress } = useScrollProgress();
  const shouldReduceMotion = useReducedMotion();
  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "30%"]);
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "12%"]
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AnimatedBackground />
      </motion.div>

      <motion.div style={{ y: contentY }} className="relative mx-auto max-w-6xl flex flex-row flex-wrap items-center gap-12 px-12 ">
        {/* Image */}
        <motion.div variants={heroReveal} initial="hidden" animate="visible" className="flex-1 min-w-0 text-left">
          <p className="mb-6 text-xs font-medium uppercase tracking-eyebrow text-fg-subtle">
            {site.eyebrow}
          </p>
          <h1 className="text-5xl font-semibold sm:text-6xl">{site.name}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-fg-muted">{site.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#projects" icon={ArrowRight}>
              View Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </motion.div>
        <div className="flex-shrink-0">
          <img
            src="/headshot.jpeg"
            alt="Headshot of Mathan Raj"
            className="w-75 h-75 rounded-full object-cover border border-border transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
}




