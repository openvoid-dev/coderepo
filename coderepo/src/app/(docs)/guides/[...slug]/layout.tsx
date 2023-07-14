interface GuideLayoutProps {
  children: React.ReactNode;
}

export default function GuideLayout({ children }: GuideLayoutProps) {
  return <div className="mx-auto max-w-5xl">{children}</div>;
}
