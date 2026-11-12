import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { featuredWork } from "@/data/contentConfig";
import { posts } from "@/data/posts";

type Params = { params: { slug: string } };

const withCaseStudy = featuredWork.filter((w) => w.caseStudy);

export const dynamicParams = false;

export function generateStaticParams() {
  return withCaseStudy.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const work = withCaseStudy.find((w) => w.slug === params.slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.result,
    alternates: { canonical: `/work/${work.slug}` },
    openGraph: {
      title: `${work.title} - Umair Mirza`,
      description: work.result,
      url: `/work/${work.slug}`,
    },
  };
}

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z]+/g, "-");

const Block = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section id={slugify(title)} className="mt-12 scroll-mt-20">
    <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    <div className="mt-4 space-y-4 leading-relaxed">{children}</div>
  </section>
);

export default function CaseStudyPage({ params }: Params) {
  const work = withCaseStudy.find((w) => w.slug === params.slug);
  if (!work || !work.caseStudy) notFound();
  const cs = work.caseStudy;
  const index = withCaseStudy.indexOf(work);
  const next = withCaseStudy[(index + 1) % withCaseStudy.length];
  const relatedPosts = posts.filter((p) => p.relatedWork === work.slug);
  const toc = [
    "Context",
    ...(work.image || cs.architecture ? ["How it works"] : []),
    "Key decisions",
    ...(cs.challenges?.length ? ["What was hard"] : []),
    "My role",
  ];

  return (
    <div className="container-page py-12 sm:py-16 lg:grid lg:grid-cols-[minmax(0,48rem)_12rem] lg:justify-between lg:gap-12">
      <article className="min-w-0">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
        >
          <FiArrowLeft aria-hidden /> All work
        </Link>

        <p className="eyebrow mt-8">Case study</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {work.title}
        </h1>
        {work.status && (
          <p className="mt-3 inline-block rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300">
            {work.status}
          </p>
        )}
        <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          {work.built}
        </p>

        <dl className="mt-8 grid gap-6 rounded-xl border border-zinc-200 p-5 sm:grid-cols-2 dark:border-zinc-800">
          <div>
            <dt className="eyebrow">Result</dt>
            <dd className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">
              {work.result}
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {work.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <Block title="Context">
          {cs.context.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Block>

        {(work.image || cs.architecture) && (
          <Block title="How it works">
            {work.image && (
              <a
                href={work.image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={work.image.src}
                  alt={work.image.alt}
                  className="mx-auto w-full max-w-xl rounded-xl"
                />
              </a>
            )}
            {cs.architecture?.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Block>
        )}

        <Block title="Key decisions">
          <ul className="space-y-5">
            {cs.decisions.map((d) => (
              <li key={d.title}>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1">{d.body}</p>
              </li>
            ))}
          </ul>
        </Block>

        {cs.challenges && cs.challenges.length > 0 && (
          <Block title="What was hard">
            {cs.challenges.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Block>
        )}

        <Block title="My role">
          {cs.role.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Block>

        {relatedPosts.length > 0 && (
          <div className="mt-12 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
            <p className="eyebrow">Related writing</p>
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/writing/${p.slug}`}
                className="link mt-2 block"
              >
                {p.title} →
              </Link>
            ))}
          </div>
        )}

        {next && next.slug !== work.slug && (
          <div className="mt-16 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <p className="text-sm text-zinc-500">Next case study</p>
            <Link
              href={`/work/${next.slug}`}
              className="link mt-1 inline-block text-lg"
            >
              {next.title} →
            </Link>
          </div>
        )}
      </article>
      <aside className="hidden lg:block">
        <nav
          aria-label="On this page"
          className="sticky top-24 mt-36 border-l border-zinc-200 pl-4 dark:border-zinc-800"
        >
          <p className="eyebrow">On this page</p>
          <ul className="mt-3 space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t}>
                <a
                  href={`#${slugify(t)}`}
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
