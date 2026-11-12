import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  const links = [
    { href: PROFILE.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: PROFILE.github, label: "GitHub", icon: Github },
    { href: PROFILE.resume, label: "Résumé", icon: FileText },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-12 sm:px-8 sm:py-16">
        <h2 id="contact-title" className="display text-6xl sm:text-7xl">
          Let&apos;s build something together.
        </h2>
        <p className="mt-4 max-w-prose text-lg">
          {PROFILE.status}: full-stack, backend, or ML/AI. I reply within
          24 hours.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${PROFILE.email}`} className="btn btn-primary break-all">
            <Mail size={18} aria-hidden="true" className="shrink-0" />
            {PROFILE.email}
          </a>
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-quiet"
            >
              <Icon size={18} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
