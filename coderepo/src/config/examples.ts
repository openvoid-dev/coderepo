import { Icons } from "@/components/Icons";
import { ExamplesConfig } from "@/types";

export const examplesConfig: ExamplesConfig = {
  heading: "Example Projects",
  subheading:
    "These example projects are works in progress, showcasing ongoing development and iterative refinement as they evolve to achieve greater functionality, aesthetics, and user experience.",
  filters: [
    {
      title: "All",
      icon: Icons.eye,
    },
    {
      title: "React",
      icon: Icons.react,
    },
    {
      title: "React Three Fiber",
      icon: Icons.react,
    },
    {
      title: "GSAP",
      icon: Icons.react,
    },
    {
      title: "Typescript",
      icon: Icons.nextjs,
    },
  ],
  projects: [
    {
      title: "skeleton",
      href: "/examples/skeleton",
      github: "#",
      description: "The React Framework for Production",
      filters: [{ title: "React" }, { title: "Typescript" }],
    },
    {
      title: "resilica",
      href: "/examples/skeleton",
      github: "#",
      description: "The React Framework for Production",
      filters: [{ title: "React" }, { title: "Typescript" }],
    },
    {
      title: "gsap",
      href: "/examples/skeleton",
      github: "#",
      description: "The React Framework for Production",
      filters: [{ title: "React" }, { title: "Typescript" }],
    },
    {
      title: "skeleton",
      href: "/examples/skeleton",
      github: "#",
      description: "The React Framework for Production",
      filters: [{ title: "React" }, { title: "Typescript" }],
    },
    {
      title: "skeleton",
      href: "/examples/skeleton",
      github: "#",
      description: "The React Framework for Production",
      filters: [{ title: "Typescript" }, { title: "GSAP" }],
    },
  ],
};
