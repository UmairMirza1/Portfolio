import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredWork, otherProjects } from "@/data/contentConfig";

const Work = () => (
  <div>
    <div className="grid gap-4 md:grid-cols-2">
      {featuredWork.map((w, i) => {
        const hasCase = Boolean(w.caseStudy);
        const showImage = i === 0 && w.image;
        const text = (
          <div className="flex min-w-0 flex-col">
            <div className="flex items-start justify-between gap-4">
              <p className="font-mono text-xs text-sky-700 dark:text-sky-400">
                {w.highlight}
              </p>
              {w.status && (
                <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300">
                  {w.status}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-lg font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {w.built}
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {w.result}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {w.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            {hasCase && (
              <p className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-sky-700 dark:text-sky-400">
                Read the case study <FiArrowUpRight aria-hidden />
              </p>
            )}
          </div>
        );
        const inner = showImage ? (
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_16rem] md:items-start">
            {text}
            <img
              src={w.image!.src}
              alt={w.image!.alt}
              loading="lazy"
              className="mx-auto w-full max-w-xs rounded-lg md:max-w-none"
            />
          </div>
        ) : (
          text
        );
        const cls = `group flex flex-col rounded-xl border border-zinc-200 p-5 sm:p-6 dark:border-zinc-800 ${
          i === 0 ? "md:col-span-2" : ""
        } ${hasCase ? "transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-sm motion-reduce:hover:translate-y-0 dark:hover:border-zinc-600" : ""}`;
        return hasCase ? (
          <Link key={w.slug} href={`/work/${w.slug}`} className={cls}>
            {inner}
          </Link>
        ) : (
          <article key={w.slug} className={cls}>
            {inner}
          </article>
        );
      })}
    </div>

    <div className="mt-10">
      <p className="eyebrow">Also</p>
      {otherProjects.map((p) => (
        <div key={p.title} className="mt-3">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {p.title}
          </a>
          <span className="text-zinc-500"> · {p.description}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Work;
