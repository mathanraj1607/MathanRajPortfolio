import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  flyInLeft,
  flyInRight,
  SPRING_MICRO,
  tagItem,
  viewportScroll,
} from "../../lib/motion";

export function ProjectCard({ project, index = 0 }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.a
      variants={isLeft ? flyInLeft : flyInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportScroll}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      transition={SPRING_MICRO}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated p-6 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-border-hover hover:shadow-glow-hover"
    >
      {/* Subtle top-edge highlight on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative mb-6 h-44 overflow-hidden rounded-xl border border-border bg-bg-floating">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.name} preview`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-bg-elevated via-bg-elevated/40 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
            />
          </>
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full bg-gradient-to-br from-bg-floating via-bg-elevated to-bg"
          />
        )}
      </div>

      <h3 className="text-xl font-semibold text-fg transition-transform duration-300 group-hover:translate-x-0.5">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-fg-subtle">{project.tagline}</p>

      <dl className="mt-5 space-y-3 text-sm text-fg-muted">
        <div>
          <dt className="mb-1 text-xs uppercase tracking-eyebrow text-fg-subtle">Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt className="mb-1 text-xs uppercase tracking-eyebrow text-fg-subtle">Solution</dt>
          <dd>{project.solution}</dd>
        </div>
        <div>
          <dt className="mb-1 text-xs uppercase tracking-eyebrow text-fg-subtle">Result</dt>
          <dd>{project.result}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <motion.span
            key={tech}
            variants={tagItem}
            className="rounded-full border border-border bg-bg/50 px-3 py-1 text-xs text-fg-muted transition-colors duration-300 group-hover:border-border-hover group-hover:text-fg"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-fg">
        <span>View case study</span>
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>
    </motion.a>
  );
}
