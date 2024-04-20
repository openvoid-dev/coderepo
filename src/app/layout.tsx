import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import { type Metadata, type Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@openvoid-dev",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col">
                {children}
              </div>
            </div>
          </TRPCReactProvider>
          <Toaster />
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
