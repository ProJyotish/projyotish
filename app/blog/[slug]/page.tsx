import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/src/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found - ProJyotish" };

  return {
    title: `${post.title} - ProJyotish Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background py-24">
      <article className="container px-4 max-w-3xl mx-auto">
        <Link
          href="/blog/"
          className="font-body text-primary font-medium hover:text-primary/80 transition-colors mb-8 inline-block"
        >
          &larr; Back to Blog
        </Link>

        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-12">
          <span>{post.author}</span>
          <span>&middot;</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl mb-12 shadow-soft"
          />
        )}

        <div
          className="max-w-none font-body text-muted-foreground leading-relaxed
            [&_h2]:font-display [&_h2]:text-foreground [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-left
            [&_h3]:font-display [&_h3]:text-foreground [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-left
            [&_p]:my-4 [&_p]:text-muted-foreground
            [&_a]:text-primary [&_a]:no-underline hover:[&_a]:text-primary/80
            [&_strong]:text-foreground [&_strong]:font-semibold
            [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6
            [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6
            [&_li]:my-2
            [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
            [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:p-3 [&_th]:text-left [&_th]:text-foreground
            [&_td]:border [&_td]:border-border [&_td]:p-3
            [&_hr]:my-8 [&_hr]:border-border"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
        />
      </article>
    </main>
  );
}
