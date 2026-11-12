import Link from "next/link";
import { ArrowUpRight, FileText, Github } from "lucide-react";

export default function ProjectLinks({
  title,
  github,
  live,
  liveLabel = "Open the live demo",
  writeUp,
}: {
  title: string;
  github: string | null;
  live: string | null;
  liveLabel?: string;
  writeUp?: string; // link to the in-depth write-up on /projects
}) {
  if (!github && !live && !writeUp) return null;
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {writeUp && (
        <li>
          <Link href={writeUp} className="text-link inline-flex items-center gap-2">
            <FileText size={18} aria-hidden="true" />
            Read the write-up
            <span className="sr-only"> for {title}</span>
          </Link>
        </li>
      )}
      {github && (
        <li>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex items-center gap-2"
          >
            <Github size={18} aria-hidden="true" />
            View the code
            <span className="sr-only"> for {title}</span>
          </a>
        </li>
      )}
      {live && (
        <li>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex items-center gap-2"
          >
            <ArrowUpRight size={18} aria-hidden="true" />
            {liveLabel}
            <span className="sr-only"> for {title}</span>
          </a>
        </li>
      )}
    </ul>
  );
}
