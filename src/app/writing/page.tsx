import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles on AI infrastructure, LLM operations, and building production systems.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight mb-2">Writing</h1>
      <p className="text-muted mb-12">
        Thoughts on AI infrastructure, LLM operations, and building reliable systems.
      </p>

      {posts.length > 0 ? (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group block"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-medium group-hover:underline">
                    {post.title}
                  </span>
                  <span className="text-sm text-muted shrink-0">
                    {formatDate(post.date)}
                  </span>
                </div>
                {post.description && (
                  <p className="mt-1 text-sm text-muted line-clamp-2">
                    {post.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">
          Articles coming soon. Check back later.
        </p>
      )}
    </div>
  );
}

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
