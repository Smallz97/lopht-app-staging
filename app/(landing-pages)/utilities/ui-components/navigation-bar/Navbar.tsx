'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/app/(landing-pages)/utilities/lib/data";
import { NavLinkProps } from "@/app/(landing-pages)/utilities/lib/definitions";
import { BrandName, MenuIcon } from "@/app/(landing-pages)/utilities/lib/icons";
import Button from "@/app/(landing-pages)/utilities/ui-components/Button/Button";

export default function NavBar() {
  function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname();
    const active = pathname === href;
    const linkClassName = `lg:p-3 text-base font-bold leading-none ${active ? "text-orange-500" : "text-[#220a08]"}`;
    return (
      <Link href={href} className={linkClassName}>{children}</Link>
    );
  }

  return (
    <nav className="flex p-6 md:p-10 lg:px-16 lg:py-12 justify-between items-center">
      <Link className="flex h-6 w-20 lg:h-12 lg:w-36" href="/">
        <BrandName />
      </Link>
      <div className="flex h-6 w-6 lg:hidden">
        <MenuIcon />
      </div>
      <div className="hidden lg:flex justify-between items-center gap-24 md:gap-12">
        <div className="gap-6 flex" id="navigation-links">
          {links.map(({ children, href }) => (
            <NavLink key={href} href={href}>
              {children}
            </NavLink>
          ))}
        </div>
        <div
          className="justify-center items-start gap-2 flex"
          id="navbar-cta-buttons"
        >
          <Button className={`px-9 py-3.5 bg-orange-100 text-orange-400`}>
            Login Community
          </Button>
          <Button className={`px-11 py-3.5 bg-orange-400 text-white`}>
            Create Community
          </Button>
        </div>
      </div>
    </nav>
  );
}
