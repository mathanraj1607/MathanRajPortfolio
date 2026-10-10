import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, SPRING_MICRO } from "../../lib/motion";

export function ProjectCard({ project }) {
  return (
    <motion.a
      variants={fadeUp}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={SPRING_MICRO}
      className="group flex flex-col rounded-2xl border border-border bg-bg-elevated p-6 shadow-card transition-colors duration-300 hover:border-border-hover hover:shadow-card-hover"
    >
      <div className="relative mb-6 h-40 overflow-hidden rounded-xl border border-border bg-bg-floating">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.name} preview`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-bg-elevated to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            />
          </>
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full bg-gradient-to-br from-bg-floating via-bg-elevated to-bg"
          />
        )}
      </div>

      <h3 className="text-xl font-semibold text-fg">{project.name}</h3>
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
          <span
            key={tech}
            className="rounded-full border border-border px-3 py-1 text-xs text-fg-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-fg">
        View case study
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </motion.a>
  );
}
