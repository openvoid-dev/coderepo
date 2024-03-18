"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLinks } from "~/config/header";

const NavbarLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-6">
      {HeaderLinks.map((headerLink) => (
        <Link
          key={headerLink.path}
          href={headerLink.path}
          className={`text-md animated-link font-heading text-muted-foreground ${pathname === headerLink.path && "show text-secondary-foreground"}`}
        >
          {headerLink.name}
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
