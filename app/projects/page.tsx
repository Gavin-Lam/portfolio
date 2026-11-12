import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectDetail from "@/components/ProjectDetail";
import { PROJECTS } from "@/lib/data";

const description =
  "In-depth write-ups of Gavin Lam's projects: Xur, Wrenchlog, AVA, FitTrack and more. The problem, what each one does, key features, stack and technical decisions.";

export const metadata: Metadata = {
  title: "Projects — Gavin Lam",
  description,
  openGraph: {
    title: "Projects — Gavin Lam",
    description,
    url: "https://gavinlam.dev/projects",
    siteName: "Gavin Lam Portfolio",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="mx-auto max-w-page px-5 pb-8 pt-10 sm:px-8 sm:pt-14">
          <h1 className="display text-[clamp(3.25rem,9vw,8rem)] leading-[0.88]">
            Projects in depth.
          </h1>
          <p className="mt-6 max-w-prose text-xl">
            What each project is for, what it does, and how it is built.
          </p>
        </div>

        {/* Sticky jump list, directly under the 4rem header. */}
        <nav
          aria-label="Jump to a project"
          className="sticky top-[calc(4rem+1px)] z-30 border-y border-line bg-ground/95 backdrop-blur"
        >
          <ul className="mx-auto flex max-w-page gap-1 overflow-x-auto px-3 py-2 sm:px-6">
            {PROJECTS.map((project) => (
              <li key={project.id} className="shrink-0">
                <a
                  href={`#${project.id}`}
                  className="block whitespace-nowrap rounded-md px-2.5 py-1.5 text-[0.95rem] font-semibold text-soft hover:bg-ink hover:text-ground"
                >
                  {project.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto max-w-page px-5 pb-8 sm:px-8 [&>article:first-child]:border-t-0">
          {PROJECTS.map((project) => (
            <ProjectDetail key={project.id} project={project} />
          ))}
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
