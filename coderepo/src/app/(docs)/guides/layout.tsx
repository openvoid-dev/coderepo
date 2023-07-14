interface GuidesLayoutProps {
  children: React.ReactNode;
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return <div className="container flex-1">{children}</div>;
}
