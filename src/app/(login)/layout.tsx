import Navbar from "@/components/site-header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
    </>
  );
}
