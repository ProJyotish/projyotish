import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const topicsDirectory = path.join(process.cwd(), "content/topics");

export interface TopicPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  pillar: string;
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: string;
  contentHtml?: string;
}

export function getTopicsByPillar(pillar: string): TopicPost[] {
  const pillarDirectory = path.join(topicsDirectory, pillar);

  if (!fs.existsSync(pillarDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(pillarDirectory);
  const allTopics = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(pillarDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        pillar,
        published: data.published !== false,
        seoTitle: data.seoTitle || "",
        seoDescription: data.seoDescription || "",
        coverImage: data.coverImage || "",
      };
    })
    .filter((topic) => topic.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allTopics;
}

export function getTopicSlugs(pillar: string): string[] {
  const pillarDirectory = path.join(topicsDirectory, pillar);

  if (!fs.existsSync(pillarDirectory)) {
    return [];
  }

  return fs
    .readdirSync(pillarDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getTopicBySlug(
  pillar: string,
  slug: string
): Promise<TopicPost | null> {
  const pillarDirectory = path.join(topicsDirectory, pillar);
  const fullPath = path.join(pillarDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    pillar,
    published: data.published !== false,
    seoTitle: data.seoTitle || "",
    seoDescription: data.seoDescription || "",
    coverImage: data.coverImage || "",
    contentHtml,
  };
}
