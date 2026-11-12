import Link from "next/link";
import { posts } from "@/data/posts";

const PostList = () => (
  <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
    {posts.map((p) => (
      <li key={p.slug} className="py-5 first:pt-0 last:pb-0">
        <Link href={`/writing/${p.slug}`} className="group block">
          <p className="font-mono text-xs text-zinc-500">
            <time dateTime={p.date}>{p.dateLabel}</time> · {p.readingTime}
          </p>
          <h3 className="mt-1.5 text-lg font-semibold group-hover:text-sky-700 dark:group-hover:text-sky-400">
            {p.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.summary}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
