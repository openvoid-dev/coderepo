export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

MainIn;

export type MainNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  links?: (NavItem & { description: string })[];
};

export type IndexConfig = {
  mainNav: MainNavItem[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
