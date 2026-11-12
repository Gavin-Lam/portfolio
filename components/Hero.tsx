import { FileText, Github, Mail } from "lucide-react";
import { EXPERIENCES, PROFILE } from "@/lib/data";

export default function Hero() {
  const lastRole = EXPERIENCES[0];
  const facts = [
    { term: "Now", detail: PROFILE.status },
    { term: "Degree", detail: `${PROFILE.degree}, Stevens, ${PROFILE.graduation}` },
    { term: "Last role", detail: `${lastRole.role}, ${lastRole.period}` },
  ];

  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-page px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-14">
        <h1 className="display text-[clamp(3.25rem,9vw,8rem)] leading-[0.88]">
          Gavin Lam builds backends,{" "}
          <span className="whitespace-nowrap">full-stack</span> apps and ML
          pipelines.
        </h1>

        <p className="mt-8 max-w-prose text-xl">
          Software engineer based in {PROFILE.location}.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FileText size={18} aria-hidden="true" />
            Résumé
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-quiet"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a href="/#contact" className="btn btn-quiet">
            <Mail size={18} aria-hidden="true" />
            Contact
          </a>
        </div>

        <dl className="mt-9 grid gap-x-8 border-t border-line sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.term}
              className="flex gap-3 border-b border-line py-3 sm:block sm:border-b-0 sm:pb-0"
            >
              <dt className="w-20 shrink-0 text-soft sm:w-auto">{fact.term}</dt>
              <dd className="font-medium">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
