import Link from "next/link";
import { FileText } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";

// The header is exactly 4rem tall plus a 1px border; the sticky jump list
// on /projects sits directly beneath it and relies on that height.
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-ground"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="font-display text-2xl font-extrabold leading-none">
          {PROFILE.name}
        </Link>
        <nav aria-label="Site" className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                // On phones only Projects and Contact fit beside the name.
                className={
                  link.label === "Projects" || link.label === "Contact"
                    ? ""
                    : "hidden md:block"
                }
              >
                <Link
                  href={link.href}
                  className="block rounded-md px-2.5 py-2 text-[0.95rem] font-medium text-soft hover:text-ink sm:px-3"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-quiet hidden min-[420px]:inline-flex !min-h-0 !px-3.5 !py-2 text-[0.95rem]"
          >
            <FileText size={16} aria-hidden="true" />
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
