import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { site } from "../../data/site";
import { skills } from "../../data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 pt-section-sm sm:pt-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Full-stack engineering meets AI automation."
          description={site.bio}
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={fadeUp}
              className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-fg-muted"
            >
              {skill.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
