// import { db } from "../src/server/db";

// async function main() {
//   await db.resource.createMany({
//     data: [
//       {
//         name: "Three.js Journey",
//         description: "The Best Way to Learn Three.js",
//         url: "https://threejs-journey.com/",
//         categoryId: 1,
//       },
//       {
//         name: "Laracasts",
//         url: "https://laracasts.com/",
//         description: "Your Path to Laravel Mastery Starts Here...",
//         categoryId: 1,
//       },
//       {
//         name: "JS Mastery",
//         url: "https://www.jsmastery.pro/",
//         description: "Launch Your Dev Career With Project-Based Coaching",
//         categoryId: 1,
//       },
//       {
//         name: "Codecademy",
//         url: "https://www.codecademy.com/",
//         description: "",
//         categoryId: 1,
//       },
//       {
//         name: "Total TypeScript",
//         url: "https://www.totaltypescript.com/",
//         description: "Become the TypeScript Wizard at Your Company",
//         categoryId: 1,
//       },
//       {
//         name: "Landing pages with React and Threejs",
//         url: "https://0xca0a.gumroad.com/l/B4N4N4S",
//         description:
//           "Build fancy landing pages with React(-three-fiber) and Threejs",
//         categoryId: 1,
//       },
//       {
//         name: "edX",
//         url: "https://www.edx.org/",
//         description: "Learning is what you make of it. Make it yours at edX.",
//         categoryId: 1,
//       },
//       {
//         name: "TypeScript Deep Dive",
//         url: "https://basarat.gitbook.io/typescript/",
//         description: "TypeScript Deep Dive",
//         categoryId: 2,
//       },
//       {
//         name: "web code tools",
//         url: "https://webcode.tools/",
//         description: "The best code generators for developers",
//         categoryId: 2,
//       },
//       {
//         name: "Facetype.js",
//         url: "http://gero3.github.io/facetype.js/",
//         description: "typeface.js generator",
//         categoryId: 10,
//       },
//       {
//         name: "GLTF Generator",
//         url: "https://gltf.pmnd.rs/",
//         description: "",
//         categoryId: 4,
//       },
//       {
//         name: "Poly Haven",
//         url: "https://polyhaven.com/",
//         description: "The Public 3D Asset Library",
//         categoryId: 4,
//       },
//       {
//         name: "Maxime Blog",
//         url: "https://blog.maximeheckel.com/",
//         description:
//           "React, Shaders, React Three Fiber, Framer Motion, and more.",
//         categoryId: 5,
//       },
//       {
//         name: "Coolors",
//         url: "https://coolors.co/palettes/trending",
//         description: "Trending Color Palettes",
//         categoryId: 8,
//       },
//       {
//         name: "Tailwind CSS Color Generator",
//         url: "https://uicolors.app/create",
//         description: "",
//         categoryId: 8,
//       },
//       {
//         name: "Discover Three.js",
//         url: "https://discoverthreejs.com/",
//         description:
//           "Discover three.js is a complete introduction to the web as a platform for 3D graphics using the three.js WebGL library...",
//         categoryId: 4,
//       },
//       {
//         name: "Awwwards",
//         url: "https://www.awwwards.com/",
//         description: "Website Awards - Best Web Design Trends",
//         categoryId: 9,
//       },
//       {
//         name: "Dribbble",
//         url: "https://dribbble.com/",
//         description:
//           "Discover the World's Top Designers & Creative Professionals",
//         categoryId: 9,
//       },
//       {
//         name: "Behance",
//         url: "https://www.behance.net/",
//         description: "Showcase and discover creative work",
//         categoryId: 9,
//       },
//       {
//         name: "Gradients for Tailwind CSS - HYPERCOLOR",
//         url: "https://hypercolor.dev/",
//         description:
//           "A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors.",
//         categoryId: 8,
//       },
//       {
//         name: "HDRI Haven",
//         url: "https://hdri-haven.com/",
//         description: "100% Free High Quality HDRIs for Everyone",
//         categoryId: 4,
//       },
//       {
//         name: "Matcaps",
//         url: "https://github.com/emmelleppi/matcaps",
//         description: "A collection of matcaps",
//         categoryId: 4,
//       },
//       {
//         name: "Market.pmnd.rs",
//         url: "https://market.pmnd.rs/",
//         description: "A collection of free 3D models",
//         categoryId: 4,
//       },
//       {
//         name: "Random colors",
//         url: "https://randoma11y.com/",
//         description: "Randomly generated accessibility tips",
//         categoryId: 8,
//       },
//       {
//         name: "Joberty",
//         url: "https://www.joberty.hr/",
//         description: "Joberty - Find your dream job",
//         categoryId: 14,
//       },
//       {
//         name: "Freelance.hr",
//         url: "https://www.freelance.hr/hr",
//         description: "Freelance.hr - Find your dream job",
//         categoryId: 14,
//       },
//       {
//         name: "Turing",
//         url: "https://developers.turing.com/",
//         description: "Turing - Find your dream job",
//         categoryId: 14,
//       },
//       {
//         name: "Open Doors",
//         url: "https://www.opendoorscareers.com/",
//         description: "Open Doors - Find your dream job",
//         categoryId: 14,
//       },
//       {
//         name: "ITJobsCroatia",
//         url: "https://itjobscroatia.com/",
//         description:
//           "Central place for posting and searching for jobs in the IT field in Croatia.",
//         categoryId: 14,
//       },
//       {
//         name: "Free Faces",
//         url: "https://www.freefaces.gallery/",
//         description:
//           "Curated collection of typefaces that are available under a variety of free licences somewhere on the interwebs.",
//         categoryId: 10,
//       },
//       {
//         name: "Icons8",
//         url: "https://icons8.com/",
//         description: "Icons, illustrations, photos, music, and design tools",
//         categoryId: 6,
//       },
//       {
//         name: "Lucide",
//         url: "https://lucide.dev/",
//         description: "Beautiful & consistent icons",
//         categoryId: 6,
//       },
//       {
//         name: "Tabler Icons",
//         url: "https://tabler-icons.io/",
//         description: "Over 4300 pixel-perfect icons for web design",
//         categoryId: 6,
//       },
//       {
//         name: "React Icons",
//         url: "https://react-icons.github.io/react-icons/",
//         description: "Popular icons in your React projects",
//         categoryId: 6,
//       },
//       {
//         name: "Shadcn UI",
//         url: "https://ui.shadcn.com/",
//         description: "Build your component library.",
//         categoryId: 7,
//       },
//       {
//         name: "Radix UI",
//         url: "https://www.radix-ui.com/",
//         description:
//           "Unstyled, accessible components for building high-quality design systems and web apps in React.",
//         categoryId: 7,
//       },
//       {
//         name: "Tailwind UI",
//         url: "https://tailwindui.com/",
//         description:
//           "Beautiful UI components, crafted by the creators of Tailwind CSS.",
//         categoryId: 7,
//       },
//       {
//         name: "Headless UI",
//         url: "https://headlessui.com/",
//         description:
//           "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
//         categoryId: 7,
//       },
//       {
//         name: "Google Fonts",
//         url: "https://fonts.google.com/",
//         description:
//           "Making the web more beautiful, fast, and open through great typography",
//         categoryId: 10,
//       },
//       {
//         name: "Resend",
//         url: "https://resend.com/",
//         description: "Email for developers",
//         categoryId: 11,
//       },
//       {
//         name: "Mailchimp",
//         url: "https://mailchimp.com/",
//         description:
//           "Mailchimp is the All-In-One integrated marketing platform for small businesses, to grow your business on your terms.",
//         categoryId: 11,
//       },
//       {
//         name: "Makerkit",
//         url: "https://makerkit.dev/courses/nextjs-app-router",
//         description:
//           "The Next.js course you need for building an AI SaaS from scratch",
//         categoryId: 1,
//       },
//       {
//         name: "EVM Kit",
//         url: "https://www.evmkit.com/",
//         description: "Build web3 apps faster than ever",
//         categoryId: 12,
//       },
//       {
//         name: "Third Web",
//         url: "https://thirdweb.com/",
//         description: "The fastest way to build web3 apps.",
//         categoryId: 12,
//       },
//       {
//         name: "Angle",
//         url: "https://angle.sh/",
//         description: "Vector device mockups for Sketch, Figma and XD",
//         categoryId: 13,
//       },
//       {
//         name: "Device Frames",
//         url: "https://deviceframes.com/",
//         description: "Device Mockups for Perfect Presentations",
//         categoryId: 13,
//       },
//       {
//         name: "Mockuuups Studio",
//         url: "https://mockuuups.studio/",
//         description: "Your Search for Perfect Mockups Ends Here.",
//         categoryId: 13,
//       },
//       {
//         name: "Central Icon System",
//         url: "https://iconists.co/central",
//         description:
//           "The central icon system was designed to be as universally applicable as possible and utilizes Figma variants and properties to offer a completely customizable icon set. ",
//         categoryId: 6,
//       },
//       {
//         name: "Landing Love",
//         url: "https://www.landing.love/",
//         description:
//           "Landing Love is a curated collection of landing page design inspiration. Updated every day.",
//         categoryId: 9,
//       },
//       {
//         name: "Unsplash",
//         url: "https://unsplash.com/",
//         description:
//           "Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.",
//         categoryId: 15,
//       },
//       {
//         name: "Flowbite",
//         url: "https://flowbite.com/",
//         description:
//           "Build websites even faster with components on top of Tailwind CSS",
//         categoryId: 7,
//       },
//       {
//         name: "Iconfinder",
//         url: "https://www.iconfinder.com/",
//         description:
//           "Millions of graphics for your design projects. Created by independent designers.",
//         categoryId: 6,
//       },
//       {
//         name: "Go Web Examples",
//         url: "https://gowebexamples.com/",
//         description: "Learn Web Programming in Go by Examples",
//         categoryId: 16,
//       },
//       {
//         name: "Go by Example",
//         url: "https://gobyexample.com/",
//         description:
//           "Go by Example is a hands-on introduction to Go using annotated example programs.",
//         categoryId: 16,
//       },
//       {
//         name: "Go Dev Packages",
//         url: "https://pkg.go.dev/",
//         description:
//           "The Go standard library packages and their documentation.",
//         categoryId: 16,
//       },
//       {
//         name: "Webapp.io",
//         url: "https://webapp.io/blog/",
//         description:
//           "Webapp.io is a blog about web development, design, and entrepreneurship.",
//         categoryId: 5,
//       },
//       {
//         name: "Dev.to",
//         url: "https://dev.to/",
//         description:
//           "Where programmers share ideas and help each other grow. It is an online community for sharing and discovering great ideas, having debates, and making friends.",
//         categoryId: 5,
//       },
//       {
//         name: "Xing",
//         url: "https://www.xing.com/",
//         description:
//           "XING is your personal career companion. Add new professional contacts and discover exciting jobs, events, news and groups.",
//         categoryId: 14,
//       },
//       {
//         name: "SYMBL",
//         url: "https://symbl.cc/en/",
//         description: "WHEN TEXT IS NOT ENOUGH",
//         categoryId: 10,
//       },
//       {
//         name: "Matcha.fyi",
//         url: "https://matcha.fyi/",
//         description: "",
//         categoryId: 5,
//       },
//       {
//         name: "Stackoverflow blog",
//         url: "https://stackoverflow.blog/",
//         description: "",
//         categoryId: 5,
//       },
//       {
//         name: "Github blog",
//         url: "https://github.blog/",
//         description: "",
//         categoryId: 5,
//       },
//       {
//         name: "Daily.dev",
//         url: "https://daily.dev/",
//         description:
//           "Get one personalized feed for all the knowledge you need. Make learning a daily habit or just do something useful while you're in endless meetings",
//         categoryId: 5,
//       },
//       {
//         name: "google-webfonts-helper",
//         url: "https://gwfh.mranftl.com/fonts",
//         description: "A Hassle-Free Way to Self-Host Google Fonts",
//         categoryId: 10,
//       },
//       {
//         name: "Shots",
//         url: "https://shots.so/",
//         description:
//           "Craft beautiful presentations for your social media, website and more!",
//         categoryId: 13,
//       },
//     ],
//   });
// }

// main()
//   .then(async () => {
//     await db.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await db.$disconnect();
//     process.exit(1);
//   });
