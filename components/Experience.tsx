import { experience } from "@/data/contentConfig";

const Experience = () => (
  <ol className="space-y-12">
    {experience.map((employer) => (
      <li key={employer.company}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold">{employer.company}</h3>
          <p className="text-sm text-zinc-500">
            {employer.detail} · {employer.location}
          </p>
        </div>
        <ol className="mt-5 space-y-8 border-l border-zinc-200 dark:border-zinc-800">
          {employer.roles.map((role) => (
            <li key={role.title + role.dates} className="relative pl-6">
              <span
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-sky-600 dark:border-zinc-950 dark:bg-sky-400"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h4 className="font-semibold">{role.title}</h4>
                <span className="font-mono text-xs text-zinc-500">{role.dates}</span>
              </div>
              <ul className="mt-3 space-y-2 leading-relaxed">
                {role.bullets.map((b) => (
                  <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-zinc-400">
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
);

export default Experience;
