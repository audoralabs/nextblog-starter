const SITE_DATA = {
  name: "next-starter",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage:
    process.env.NEXT_PUBLIC_OG_IMAGE ??
    "http://localhost:3000/images/screenshot-desktop-dark.webp",

  tagline: "Kickstart your Next.js projects effortlessly",
  description:
    "next-starter is a powerful, boilerplate project designed to accelerate the development of high-quality Next.js applications with best practices built-in.",
  shortDescription:
    "A boilerplate to quickly launch robust Next.js apps with best practices.",

  alternateNames: ["next-starter", "Next Starter", "NextJS Starter"],

  twitterHandle: "@nextstarter",

  keywords: [
    "next-starter",
    "next.js starter",
    "react boilerplate",
    "next.js boilerplate",
    "nextjs template",
    "starter project",
    "next.js template",
    "typescript nextjs starter",
    "boilerplate for next.js",
    "web app starter",
  ],

  features: [
    {
      title: "MDX blog",
      description:
        "Write posts in MDX with frontmatter, code blocks, and components.",
    },
    {
      title: "SEO & metadata",
      description:
        "Built-in metadata, Open Graph, and JSON-LD for search and sharing.",
    },
    {
      title: "Dark mode",
      description: "System-aware theme toggle with persistent preference.",
    },
    {
      title: "TypeScript",
      description:
        "Full TypeScript support and strict mode for safer refactors.",
    },
  ],
};

export default SITE_DATA;
