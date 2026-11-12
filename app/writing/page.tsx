import type { Metadata } from "next";
import PostList from "@/components/PostList";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes from building data platforms and backends at Farmdar.",
  alternates: { canonical: "/writing" },
};

const WritingPage = () => (
  <div className="container-page max-w-3xl py-12 sm:py-16">
    <p className="eyebrow">Writing</p>
    <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Notes from production</h1>
    <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
      Short write-ups of problems my team hit while building Farmdar&apos;s platform, and how we fixed them.
    </p>
    <div className="mt-10">
      <PostList />
    </div>
  </div>
);

export default WritingPage;
