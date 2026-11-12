import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <div id="experience" className="lg:col-span-7">
      <h2 className="section-title">Experience</h2>
      <ol className="mt-6">
        {EXPERIENCES.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid gap-x-6 border-t border-line py-4 last:border-b sm:grid-cols-[10.5rem_1fr]"
          >
            <p className="text-soft">{job.period}</p>
            <div>
              <h3 className="text-lg font-bold leading-snug">
                {job.role}
                <span className="font-semibold text-brand">, {job.company}</span>
              </h3>
              <p className="mt-1 text-soft">{job.line}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
