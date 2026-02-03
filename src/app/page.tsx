import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { BlogSection } from "@/blogs/components/blog-section";
import { CopyableCode } from "@/components/copyable-code";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="container mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl sm:leading-tight">
            {SITE_CONFIG.tagline}
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {SITE_CONFIG.shortDescription}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://github.com/AudoraLabs/next-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </Link>
            <Link
              href="/blogs"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Read the blog
            </Link>
          </div>

          <div className="pt-8">
            <CopyableCode code="npx create-next-app@latest -e https://github.com/AudoraLabs/next-starter" />
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 py-16">
        <BlogSection />
      </section>
    </>
  );
}
