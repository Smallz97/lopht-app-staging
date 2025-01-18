"use client";

import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/app/fonts";
import { usePathname } from "next/navigation";
import Button from "@/app/(landing-pages)/utilities/ui-components/Button/Button";
import FooterImage from "@/app/(landing-pages)/utilities/ui-components/footer-bar/images/footer-image.png";
import { BrandName, AppleLogo, OrangeAppleLogo, PlayStoreLogo } from "@/app/(landing-pages)/utilities/lib/icons";

export default function Footer() {
  const pathname = usePathname();
  const homepage = pathname === "/";

  return (
    <footer>
      {homepage &&
        <div className="flex flex-col md:flex-row-reverse md:px-3 md:py-2 lg:px-12 md:gap-3 lg:gap-24 md:bg-black">
          <div className="flex md:basis-0 md:grow md:shrink">
            <Image src={FooterImage} alt={``} />
          </div>
          <div className="px-5 py-14 md:max-lg:px-2 md:py-0 md:basis-0 md:grow md:shrink bg-black flex-col justify-start md:justify-center items-center md:items-start gap-8 md:gap-6 flex">
            <div className="flex justify-center h-12 w-full md:hidden">
              <BrandName />
            </div>
            <div className="self-stretch text-white flex-col justify-center md:justify-start items-center md:items-start flex gap-2">
              <div className="text-center md:text-left text-3xl md:max-lg:text-2xl font-semibold lg:font-bold leading-10">
                Unlock the seamless management potential, Download our resident app
                easily.
              </div>
              <div className="text-center md:text-left text-sm lg:text-lg font-normal">
                Get the maximum experience from Lopht App. Join the Lopht App
                community at zero cost, anywhere you are. Click the button below to
                download our app.
              </div>
            </div>
            <div className="w-full md:w-4/5 flex-col md:flex-row justify-center md:justify-start items-center gap-3 flex">
              <Button className={`w-full py-3.5 bg-orange-100 text-black`}>
                <div className="flex h-7 w-6">
                  <PlayStoreLogo />
                </div>
                <div className="text-left leading-none">
                  <span className="text-xs">Get it on</span><br></br>
                  <span className="text-sm md:text-base">Google Play</span>
                </div>
              </Button>
              <Button className={`w-full py-3.5 bg-orange-400 lg:bg-black lg:border-2 lg:border-orange-400 text-white lg:text-orange-400`}>
                <div className="flex h-6 w-6 lg:hidden">
                  <AppleLogo />
                </div>
                <div className="hidden lg:flex h-6.5 w-6">
                  <OrangeAppleLogo />
                </div>
                <div className="text-left leading-none">
                  <span className="text-xs">Download on the</span><br></br>
                  <span className="text-sm md:text-base">App Store</span>
                </div>
              </Button>
            </div>
          </div>
        </div>}
      <div
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
                  <Link href={`/about`}>About us</Link>
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
                  <Link href={`/`}>Twitter</Link>
                  <Link href={`/blog`}>LinkedIn</Link>
                  <Link href={`/`}>Facebook</Link>
                  <Link href={`/blog`}>Instagram</Link>
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
      </div>
    </footer>
  );
}
