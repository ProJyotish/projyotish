import type { Metadata } from "next";
import { getTopicSlugs, getTopicBySlug } from "@/src/lib/topics";
import TopicPage from "@/src/components/TopicPage";
import { notFound } from "next/navigation";

const PILLAR = "career";

export async function generateStaticParams() {
  const slugs = getTopicSlugs(PILLAR);
  return slugs.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Promise<Metadata> {
  const post = await getTopicBySlug(PILLAR, params.topic);
  if (!post) return { title: "Not Found - ProJyotish" };

  return {
    title: post.seoTitle || `${post.title} - ProJyotish Career`,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function CareerTopicPage({
  params,
}: {
  params: { topic: string };
}) {
  const post = await getTopicBySlug(PILLAR, params.topic);
  if (!post) notFound();

  return <TopicPage post={post} pillar={PILLAR} />;
}
