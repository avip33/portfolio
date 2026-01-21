import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { MDXContent } from "@/lib/mdx";
import { ViewCounter } from "@/components/view-counter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article>
      {/* Header */}
      <header className="mb-10">
        <Link
          href="/writing"
          className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
        >
          ← Back to writing
        </Link>
        <h1 className="text-lg font-semibold tracking-tight mb-2">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm">
          <time className="text-muted-foreground">{formatDate(post.date)}</time>
          <span className="text-muted-foreground">·</span>
          <ViewCounter slug={slug} trackView />
        </div>
      </header>

      {/* Content */}
      <MDXContent source={post.content} />
    </article>
  );
}

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
