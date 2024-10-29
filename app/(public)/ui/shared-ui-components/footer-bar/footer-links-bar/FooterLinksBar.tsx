import Link from "next/link";
import { poppins } from "@/app/ui/fonts";
import { BrandName } from "@/app/lib/icons";

export default function FooterLinksBar() {
  return (
    <footer
      className={`${poppins.className} pt-7 pb-3 px-4 md:px-6 lg:px-16 lg:pt-28 bg-black flex flex-col gap-16`}
    >
      <div
        className="md:flex flex-row md:justify-between"
        id="footer-links-wrapper"
      >
        <Link
          className="hidden md:flex h-12"
          href="/"
          id="footer-brand-logo"
          aria-labelledby="brand logo"
        >
          <BrandName />
        </Link>
        <div className="flex flex-col gap-16 lg:gap-28 md:flex-row">
          <div className="flex gap-28 md:gap-16 lg:gap-28">
            <div className="flex flex-col gap-4" id="footer-web-links">
              <div
                className="text-orange-300 text-base font-semibold leading-normal"
                id="group-title"
              >
                Company
              </div>
              <div className="flex flex-col gap-6 text-white text-base font-normal leading-normal">
                <Link href={`/about-us`}>About us</Link>
                <Link href={`/privacy-policy`}>Privacy</Link>
                <Link href={`/terms-of-use`}>Terms of use</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4" id="footer-social-links">
              <div
                className="text-orange-300 text-base font-semibold leading-normal"
                id="group-title"
              >
                Social
              </div>
              <div className="flex flex-col gap-6 text-white text-base font-normal leading-normal">
                <Link href={`/ab`}>Twitter</Link>
                <Link href={`/a`}>LinkedIn</Link>
                <Link href={`/abo`}>Facebook</Link>
                <Link href={`/abou`}>Instagram</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4" id="footer-contact-info">
            <div
              className="text-orange-300 text-base font-semibold leading-normal"
              id="group-title"
            >
              Contact us
            </div>
            <div className="flex flex-col gap-6 text-white text-base font-normal leading-normal">
              <div>(+234) 8085463157</div>
              <div>lophtapp@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-base font-normal leading-normal">
        <span className="text-orange-300">©</span> Copyright 2024 loft. All
        rights reserved
      </div>
    </footer>
  );
}
