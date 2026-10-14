import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-x-hidden px-6 pt-section-sm sm:pt-section"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Case studies"
          description="A few systems I've built end to end — problem, solution, and the result."
        />

        <div className="mt-12 grid gap-card-gap sm:grid-cols-2">
          { [...projects].sort((a, b) => {
                if (a.name === 'Shopper') return -1;
                if (b.name === 'Shopper') return 1;
                return 0;
              }).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
