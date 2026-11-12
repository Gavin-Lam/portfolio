import { SKILLS } from "@/lib/data";

export default function About() {
  return (
    <div id="skills" className="lg:col-span-5">
      <h2 className="section-title">Skills</h2>
      <p id="about" className="mt-6 border-t border-line pt-4">
        Hands-on across the full stack, from SQL Server schemas and REST APIs
        to fine-tuning LLMs and CI/CD pipelines. I like work with measurable
        impact.
      </p>
      <dl className="mt-5 space-y-4">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <dt className="text-sm font-bold">{group.category}</dt>
            <dd className="mt-1.5">
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
