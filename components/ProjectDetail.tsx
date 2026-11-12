import type { Project } from "@/lib/data";
import ProjectLinks from "./ProjectLinks";
import { SKETCHES } from "./sketches";

function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="font-bold">{heading}</h3>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const sketch = SKETCHES[project.id];
  const titleId = `${project.id}-title`;

  return (
    <article
      id={project.id}
      aria-labelledby={titleId}
      className="grid scroll-mt-36 gap-x-12 gap-y-6 border-t border-line py-12 lg:grid-cols-12"
    >
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-36">
          {sketch ? (
            <>
              {sketch}
              <p className="mt-2 text-sm text-soft">
                Concept sketch with sample data, not a screenshot.
              </p>
            </>
          ) : (
            project.highlight && (
              <p className="display rounded-xl border border-line bg-surface p-6 text-4xl sm:p-8 sm:text-5xl">
                {project.highlight}
              </p>
            )
          )}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h2 id={titleId} className="display text-5xl">
            {project.title}
          </h2>
          {project.status && (
            <span className="rounded-full bg-signal px-3 py-1 text-sm font-bold leading-tight text-night">
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-2 text-xl font-semibold leading-snug">
          {project.tagline}
          {project.period && <span className="font-normal text-soft">, {project.period}</span>}
        </p>

        {project.problem && (
          <Block heading="The problem">
            <p className="max-w-prose">{project.problem}</p>
          </Block>
        )}
        <Block heading="What it does">
          <p className="max-w-prose">{project.summary}</p>
        </Block>
        <Block heading="Key features">
          <Bullets items={project.features} />
        </Block>
        {project.decisions && (
          <Block heading="Technical decisions">
            <Bullets items={project.decisions} />
          </Block>
        )}
        <Block heading="Built with">
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </Block>

        <div className="mt-6">
          <ProjectLinks
            title={project.title}
            github={project.github}
            live={project.live}
            liveLabel={project.liveLabel}
          />
        </div>
      </div>
    </article>
  );
}
