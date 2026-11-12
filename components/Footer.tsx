import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-5 text-soft sm:px-8">
        <p>
          {PROFILE.name}, {PROFILE.location}
        </p>
        <p>Built with Next.js and Tailwind CSS, {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
