// import { db } from "../src/server/db";

// async function main() {
//   await db.resourceCategory.createMany({
//     data: [
// {
//     name: "Courses",
//     description:
//       "Courses are a great way to learn new skills and improve your knowledge in a particular area. They are often taught by experts in the field and can be taken at your own pace.",
//     icon: "apple",
//     slug: "courses",
//   },
//       {
//         name: "Web Development",
//         description:
//           "Discover the latest trends and techniques in web development.",
//         icon: "dev",
//         slug: "web-development",
//       },
//       {
//         name: "Design",
//         description:
//           "Explore the world of design and learn new creative concepts.",
//         icon: "design",
//         slug: "design",
//       },
//       {
//         name: "3D Design",
//         description:
//           "Dive into the fascinating world of 3D design and visualization.",
//         icon: "threeDDesign",
//         slug: "3d-design",
//       },
//       {
//         name: "Useful Blogs",
//         description:
//           "Find a curated collection of useful and informative blogs.",
//         icon: "blog",
//         slug: "useful-blogs",
//       },
//       {
//         name: "Icons",
//         description:
//           "Access a wide range of icons for your design and development projects.",
//         icon: "icons",
//         slug: "icons",
//       },
//       {
//         name: "UI Components",
//         description:
//           "Discover reusable UI components to enhance your user interfaces.",
//         icon: "ui",
//         slug: "ui-components",
//       },
//       {
//         name: "Colors",
//         description:
//           "Explore a variety of color palettes and schemes for your designs.",
//         icon: "colors",
//         slug: "colors",
//       },
//       {
//         name: "Inspiration",
//         description: "Get inspired by stunning designs and innovative ideas.",
//         icon: "inspiration",
//         slug: "inspiration",
//       },
//       {
//         name: "Fonts",
//         description: "Find the perfect fonts to make your designs stand out.",
//         icon: "fonts",
//         slug: "fonts",
//       },
//       {
//         name: "Emails",
//         description:
//           "Discover email templates and best practices for effective communication.",
//         icon: "email",
//         slug: "emails",
//       },
//       {
//         name: "Web3",
//         description:
//           "Learn about Web3 technologies and decentralized applications.",
//         icon: "web3",
//         slug: "web3",
//       },
//       {
//         name: "Mockups",
//         description:
//           "Create realistic mockups to showcase your designs and products.",
//         icon: "mockups",
//         slug: "mockups",
//       },
//       {
//         name: "Job Marketplace",
//         description:
//           "Find job opportunities and connect with a vibrant community of professionals.",
//         icon: "community",
//         slug: "job-marketplace",
//       },
//       {
//         name: "Stock Photos",
//         description:
//           "Access a vast library of high-quality stock photos for your projects.",
//         icon: "image",
//         slug: "stock-photos",
//       },
//       {
//         name: "Golang",
//         description: "Explore the Go programming language and its ecosystem.",
//         icon: "golang",
//         slug: "golang",
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
