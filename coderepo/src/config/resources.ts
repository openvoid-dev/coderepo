import { Icons } from "@/components/Icons";
import { ResourcesConfig } from "@/types";

export const resourceConfig: ResourcesConfig = {
  filters: [
    {
      title: "All",
      icon: Icons.eye,
    },
    {
      title: "Courses",
      icon: Icons.react,
    },
    {
      title: "Web Development",
      icon: Icons.react,
    },
    {
      title: "Design",
      icon: Icons.react,
    },
    {
      title: "3D Design",
      icon: Icons.nextjs,
    },
    {
      title: "Useful Blogs",
      icon: Icons.nextjs,
    },
    {
      title: "Job Marketplace",
      icon: Icons.nextjs,
    },
  ],
  resources: [
    {
      title: "Three.js Journey",
      href: "https://threejs-journey.com/",
      description: "The Best Way to Learn Three.js",
      filters: [{ title: "Courses" }],
    },
    {
      title: "Laracasts",
      href: "https://laracasts.com/",
      description: "Your Path to Laravel Mastery Starts Here...",
      filters: [{ title: "Courses" }],
    },
    {
      title: "JS Mastery",
      href: "https://www.jsmastery.pro/",
      description: "Launch Your Dev Career With Project-Based Coaching",
      filters: [{ title: "Courses" }],
    },
    {
      title: "Codecademy",
      href: "https://www.codecademy.com/",
      description: "",
      filters: [{ title: "Courses" }],
    },
    {
      title: "Total TypeScript",
      href: "https://www.totaltypescript.com/",
      description: "Become the TypeScript Wizard at Your Company",
      filters: [{ title: "Courses" }],
    },
    {
      title: "Landing pages with React and Threejs",
      href: "https://0xca0a.gumroad.com/l/B4N4N4S",
      description:
        "Build fancy landing pages with React(-three-fiber) and Threejs",
      filters: [{ title: "Courses" }],
    },
    {
      title: "edX",
      href: "https://www.edx.org/",
      description: "Learning is what you make of it. Make it yours at edX.",
      filters: [{ title: "Courses" }],
    },
    {
      title: "TypeScript Deep Dive",
      href: "https://basarat.gitbook.io/typescript/",
      description: "TypeScript Deep Dive",
      filters: [{ title: "Web Development" }],
    },
    {
      title: "web code tools",
      href: "https://webcode.tools/",
      description: "The best code generators for developers",
      filters: [{ title: "Web Development" }],
    },
    {
      title: "Facetype.js",
      href: "http://gero3.github.io/facetype.js/",
      description: "typeface.js generator",
      filters: [{ title: "Design" }],
    },
    {
      title: "GLTF Generator",
      href: "https://gltf.pmnd.rs/",
      description: "",
      filters: [{ title: "3D Design" }],
    },
    {
      title: "Poly Haven",
      href: "https://polyhaven.com/",
      description: "The Public 3D Asset Library",
      filters: [{ title: "3D Design" }],
    },
    {
      title: "Maxime Blog",
      href: "https://blog.maximeheckel.com/",
      description:
        "React, Shaders, React Three Fiber, Framer Motion, and more.",
      filters: [{ title: "Useful Blogs" }],
    },
    {
      title: "Coolors",
      href: "https://coolors.co/palettes/trending",
      description: "Trending Color Palettes",
      filters: [{ title: "Design" }],
    },
    {
      title: "Tailwind CSS Color Generator",
      href: "https://uicolors.app/create",
      description: "",
      filters: [{ title: "Design" }],
    },
    {
      title: "Discover Three.js",
      href: "https://discoverthreejs.com/",
      description:
        "Discover three.js is a complete introduction to the web as a platform for 3D graphics using the three.js WebGL library...",
      filters: [{ title: "3D Design" }, { title: "Courses" }],
    },
    {
      title: "React Icons",
      href: "https://react-icons.github.io/react-icons",
      description: "Include popular icons in your React projects easily",
      filters: [{ title: "Web Development" }, { title: "Design" }],
    },
    {
      title: "Awwwards",
      href: "https://www.awwwards.com/",
      description: "Website Awards - Best Web Design Trends",
      filters: [{ title: "Design" }],
    },
    {
      title: "Dribbble",
      href: "https://dribbble.com/",
      description:
        "Discover the World's Top Designers & Creative Professionals",
      filters: [{ title: "Design" }],
    },
    {
      title: "Behance",
      href: "https://www.behance.net/",
      description: "Showcase and discover creative work",
      filters: [{ title: "Design" }],
    },
    {
      title: "Gradients for Tailwind CSS - HYPERCOLOR",
      href: "https://hypercolor.dev/",
      description:
        "A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors.",
      filters: [{ title: "Design" }, { title: "Web Development" }],
    },
    {
      title: "HDRI Haven",
      href: "https://hdri-haven.com/",
      description: "100% Free High Quality HDRIs for Everyone",
      filters: [{ title: "3D Design" }],
    },
    {
      title: "Matcaps",
      href: "https://github.com/emmelleppi/matcaps",
      description: "A collection of matcaps",
      filters: [{ title: "3D Design" }],
    },
    {
      title: "Market.pmnd.rs",
      href: "https://market.pmnd.rs/",
      description: "A collection of free 3D models",
      filters: [{ title: "3D Design" }],
    },
    {
      title: "Random colors",
      href: "https://randoma11y.com/",
      description: "Randomly generated accessibility tips",
      filters: [{ title: "Web Development" }, { title: "Design" }],
    },
    {
      title: "Joberty",
      href: "https://www.joberty.hr/",
      description: "Joberty - Find your dream job",
      filters: [{ title: "Job Marketplace" }],
    },
    {
      title: "Freelance.hr",
      href: "https://www.freelance.hr/hr",
      description: "Freelance.hr - Find your dream job",
      filters: [{ title: "Job Marketplace" }],
    },
    {
      title: "Turing",
      href: "https://developers.turing.com/",
      description: "Turing - Find your dream job",
      filters: [{ title: "Job Marketplace" }],
    },
    {
      title: "Open Doors",
      href: "https://www.opendoorscareers.com/",
      description: "Open Doors - Find your dream job",
      filters: [{ title: "Job Marketplace" }],
    },
  ],
};
