import { Icons } from "@/components/Icons";
import { MainConfig } from "@/types";

export const mainConfig: MainConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Guides",
      href: "/guides",
    },
    {
      title: "Resources",
      href: "/resources",
    },
  ],
  exampleProjects: [
    {
      title: "skeleton",
      href: "/docs",
      github: "#",
      description: "The React Framework for Production",
    },
    {
      title: "gsap",
      href: "/docs",
      github: "#",
      description:
        "Rapidly build modern websites without ever leaving your HTML.",
    },
    {
      title: "chat-app",
      href: "/docs",
      github: "#",
      description: "TypeScript extends JavaScript by adding types.",
    },
    {
      title: "gsap",
      href: "/docs",
      github: "#",
      description:
        "Gsap is a JavaScript library for building high-performance animations that work in every major browser.",
    },
  ],
  technologies: [
    {
      title: "Next.js 13",
      description: "App dir, Routing, Layouts, Loading UI and API routes.",
      icon: Icons.nextjs,
    },
    {
      title: "React 18",
      description: "Server and Client Components. Use hook.",
      icon: Icons.react,
    },
    {
      title: "Database",
      description: "ORM using Prisma and deployed on PlanetScale.",
      icon: Icons.database,
    },
    {
      title: "Components",
      description:
        "UI components built using Radix UI and styled with Tailwind CSS.",
      icon: Icons.tailwind,
    },
    {
      title: "Authentication",
      description: "Authentication using NextAuth.js and middlewares.",
      icon: Icons.auth,
    },
    {
      title: "Subscriptions",
      description: "Free and paid subscriptions using Stripe.",
      icon: Icons.subscription,
    },
  ],
};
