import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { staggerContainer, viewportOnce } from "../../lib/motion";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 pt-section-sm sm:pt-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Case studies"
          description="A few systems I've built end to end — problem, solution, and the result."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-card-gap sm:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
