import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/writing");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  published: boolean;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  published: boolean;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        published: data.published !== false,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allPosts;
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    content,
    published: data.published !== false,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}
