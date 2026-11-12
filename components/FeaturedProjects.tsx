import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/data";
import ProjectLinks from "./ProjectLinks";
import { SKETCHES } from "./sketches";

export default function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="mx-auto max-w-page px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
          <h2 id="projects-title" className="section-title">
            Projects
          </h2>
          <p className="text-sm text-soft">
            Visuals are concept sketches with sample data, not screenshots.
          </p>
        </div>

        <div className="mt-8 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <article key={project.id} className="flex flex-col">
              {SKETCHES[project.id]}

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="display text-4xl lg:text-5xl">
                  <Link href={`/projects#${project.id}`} className="hover:text-brand">
                    {project.shortTitle}
                  </Link>
                </h3>
                {project.status && (
                  <span className="rounded-full bg-signal px-2.5 py-1 text-xs font-bold leading-tight text-night">
                    {project.status}
                  </span>
                )}
                {project.period && <span className="text-soft">{project.period}</span>}
              </div>
              <p className="mt-2 text-lg font-semibold leading-snug">{project.tagline}</p>

              <ul className="mt-3 space-y-1">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-soft">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-2 w-2 shrink-0 bg-brand"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <ul aria-label="Built with" className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <ProjectLinks
                  title={project.title}
                  github={project.github}
                  live={project.live}
                  writeUp={`/projects#${project.id}`}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-5 border-t border-line pt-6">
          <p className="max-w-[46rem]">
            <span className="text-soft">Also built: </span>
            {OTHER_PROJECTS.map((project, i) => (
              <span key={project.id}>
                <Link href={`/projects#${project.id}`} className="text-link">
                  {project.shortTitle}
                </Link>
                {i < OTHER_PROJECTS.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
          <Link href="/projects" className="btn btn-primary">
            See all projects in depth
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
