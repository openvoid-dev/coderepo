import { mainConfig } from "@/config/main";

import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background border-b sticky top-0">
        <MainNav items={mainConfig.mainNav} />
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
