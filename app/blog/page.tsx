import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/src/lib/blog";

export const metadata: Metadata = {
  title: "Blog - ProJyotish",
  description: "Insights on Vedic Astrology, AI, and cosmic guidance from the ProJyotish team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Blog
        </h1>
        <p className="font-body text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Insights on Vedic Astrology, AI guidance, and cosmic wisdom
        </p>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground font-body">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}/`}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-4">
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
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="font-body text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read more &rarr;
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
