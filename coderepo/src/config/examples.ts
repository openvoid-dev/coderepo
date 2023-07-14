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
      icon: Icons.threeDDesign,
    },
    {
      title: "Typescript",
      icon: Icons.typescript,
    },
    {
      title: "Animations",
      icon: Icons.animation,
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
      filters: [{ title: "Animations" }],
    },
    {
      title: "skeleton",
      href: "/examples/skeleton",
      github: "#",
      description: "The React Framework for Production",
      filters: [{ title: "React" }, { title: "Typescript" }],
    },
  ],
};
