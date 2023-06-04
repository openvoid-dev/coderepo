import { DocsSidebarNav } from "@/components/DocsSidebarNav";
import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";

import { docsConfig } from "@/config/docs";
import { mainConfig } from "@/config/main";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background border-b sticky top-0">
        <MainNav items={mainConfig.mainNav}>
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </MainNav>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
