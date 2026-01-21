import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-12">
      {/* Intro */}
      <section>
        <p className="text-[15px] leading-relaxed">
          I&apos;m a systems architect with experience designing, developing, and operating large-scale application and infrastructure systems.
          <br />
          I write about AI infrastructure, focusing on cost control, reliability, and governance as LLMs move into production.
        </p>
        <p className="mt-4 text-[15px] text-muted leading-relaxed">
          Currently at Mastercard, building enterprise-scale systems.
        </p>
      </section>

      {/* Recent Writing */}
      {posts.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-muted mb-6">Recent Writing</h2>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                >
                  <span className="group-hover:underline">{post.title}</span>
                  <span className="text-sm text-muted shrink-0">
                    {formatDate(post.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/writing"
            className="inline-block mt-6 text-sm text-muted hover:text-foreground"
          >
            View all posts →
          </Link>
        </section>
      )}

      {/* Empty state if no posts */}
      {posts.length === 0 && (
        <section>
          <h2 className="text-sm font-medium text-muted mb-4">Writing</h2>
          <p className="text-muted">
            Articles coming soon. Check back later.
          </p>
        </section>
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
