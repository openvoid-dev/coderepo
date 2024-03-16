import "~/styles/globals.css";

import { Nunito, Poppins } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/ThemeProvider";
import { cn } from "~/lib/utils";
import Navbar from "~/components/Navbar";
import { Toaster } from "~/components/ui/sonner";
import Footer from "~/components/Footer";
import { Analytics } from "~/components/Analytics";
import { siteConfig } from "~/config/site";

// Fonts
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: new URL("https://coderepo.openvoid.dev"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "web",
    "code",
    "repo",
    "code repo",
    "coderepo",
    "openvoid",
    "open void",
    "openvoid.dev",
    "openvoid coderepo",
    "obradovic",
    "openvoid obradovic",
    "web development",
    "web technology",
    "web examples",
    "web documentation",
    "web tutorials",
    "web resources",
    "web tools",
    "web technologies",
    "web development resources",
    "web development tools",
    "web development tutorials",
    "web development examples",
    "web development documentation",
    "web development resources",
  ],
  authors: [
    {
      name: "Open Void",
      url: "https://openvoid.dev",
    },
  ],
  creator: "Open Void",
  publisher: "Open Void",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@obradovicdotdev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.className,
          nunito.variable,
          "grainy min-h-screen bg-background antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>
            <Navbar />
            {children}
            <Footer />
          </TRPCReactProvider>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
