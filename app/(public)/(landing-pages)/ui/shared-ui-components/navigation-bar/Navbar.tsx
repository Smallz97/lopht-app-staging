import Link from "next/link";
import { BrandName } from "@/app/lib/icons";
import { MenuIcon } from "@/app/lib/icons";
import Button from "@/app/(public)/(landing-pages)/ui/shared-ui-components/Button/Button";

export default function NavBar() {
  return (
    <nav className="flex p-6 md:p-10 lg:px-16 lg:py-12 justify-between items-center">
      <Link className="flex h-6 lg:h-12" href="/">
        <BrandName />
      </Link>
      <div className="flex h-6 lg:hidden">
        <MenuIcon />
      </div>
      <div className="hidden lg:flex justify-between items-center gap-24 md:gap-12">
        <div className="gap-6 flex" id="navigation-links">
          <Link
            className="lg:p-3 text-[#220a08] text-base font-normal leading-none"
            href="/"
          >
            Home
          </Link>
          <Link
            className="lg:p-3 text-[#220a08] text-base font-bold leading-none"
            href="/about-us"
          >
            About us
          </Link>
          <Link
            className="lg:p-3 text-[#220a08] text-base font-bold leading-none"
            href="/blogs"
          >
            Blog
          </Link>
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
