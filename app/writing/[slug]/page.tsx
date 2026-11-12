import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { posts, type PostBlock } from "@/data/posts";
import { featuredWork } from "@/data/contentConfig";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} - Umair Mirza`,
      description: post.summary,
      url: `/writing/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

const renderBlock = (b: PostBlock, i: number) => {
  if ("h" in b)
    return (
      <h2 key={i} className="!mt-10 text-xl font-semibold tracking-tight">
        {b.h}
      </h2>
    );
  if ("p" in b) return <p key={i}>{b.p}</p>;
  if ("ul" in b)
    return (
      <ul key={i} className="list-disc space-y-2 pl-5 marker:text-zinc-400">
        {b.ul.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    );
  if ("ol" in b)
    return (
      <ol key={i} className="list-decimal space-y-2 pl-5 marker:text-zinc-400">
        {b.ol.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ol>
    );
  return (
    <pre
      key={i}
      className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-[13px] leading-relaxed text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
    >
      <code>{b.code}</code>
    </pre>
  );
};

export default function PostPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const related = featuredWork.find((w) => w.slug === post.relatedWork && w.caseStudy);

  return (
    <article className="container-page max-w-3xl py-12 sm:py-16">
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        <FiArrowLeft aria-hidden /> All writing
      </Link>
      <p className="mt-8 font-mono text-xs text-zinc-500">
        <time dateTime={post.date}>{post.dateLabel}</time> · {post.readingTime}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">{post.summary}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {post.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-10 space-y-4 leading-relaxed">{post.body.map(renderBlock)}</div>

      {related && (
        <div className="mt-16 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">Related case study</p>
          <Link href={`/work/${related.slug}`} className="link mt-1 inline-block text-lg">
            {related.title} →
          </Link>
        </div>
      )}
    </article>
  );
}
