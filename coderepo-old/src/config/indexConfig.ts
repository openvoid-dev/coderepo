import { IndexConfig } from "@/types";

export const indexConfig: IndexConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
      links: [
        {
          title: "Typescript",
          href: "/docs/typescript",
          description: "Learn about the typescript support in Next.js",
        },
        {
          title: "Server Components",
          href: "/docs/server-components",
          description: "Learn about the new server components in Next.js",
        },
        {
          title: "Next.js 13",
          href: "/docs/nextjs-13",
          description: "Learn about the new features in Next.js 13",
        },
        {
          title: "Figma",
          href: "/docs/figma",
          description: "Learn about the figma",
        },
        {
          title: "Tailwind",
          href: "/docs/tailwind",
          description: "Learn about the tailwind",
        },
        {
          title: "React Three Fiber",
          href: "/docs/react-three-fiber",
          description: "Learn about the react-three-fiber",
        },
      ],
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};
