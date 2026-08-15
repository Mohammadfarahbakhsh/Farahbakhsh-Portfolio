import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "../ui/project-card";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl border-t border-border px-6 py-24 sm:py-32"
    >
      <SectionHeading
        index="02 — Selected work"
        title="Things I've built"
        description="A mix of client, product, and open-source work. Each project pairs interface craft with attention to performance and maintainability."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={0.05 * index}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
