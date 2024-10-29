import Image from "next/image";
import { pageHeadings } from "@/app/lib/data";
import PageHeading from "@/app/(public)/ui/shared-ui-components/page-heading/PageHeading";
import mobileHero from "@/app/(public)/ui/about-page/images/hero-images/mobile-hero.png";
import tabletHero from "@/app/(public)/ui/about-page/images/hero-images/tablet-hero.png";

export default function HeroSection() {
  const { pageName, heading, subHeading } = pageHeadings[0];
  return (
    <div id="hero-section">
      <PageHeading
        pageName={pageName}
        heading={heading}
        subHeading={subHeading}
      />
      <div
        className="flex flex-col gap-12 md:gap-24 md:py-24 bg-[#f8f9fb]"
        id="hero-image-section"
      >
        <div className="md:px-6">
          <Image
            src={mobileHero}
            alt={`hero-image`}
            className="block md:hidden"
          />
          <Image
            src={tabletHero}
            alt={`hero-image`}
            className="hidden md:block"
          />
        </div>
        <div className="flex flex-col gap-4 mb-12 md:mb-0 px-3 md:px-6 md:text-center">
          <div className="text-[#0f1728] text-[27px] font-bold leading-[38px]">
            We&apos;re only just getting started on our journey
          </div>
          <div className="text-[#667084] text-sm md:px-10 font-normal leading-normal">
            Everything you need to build modern UI and great products.
            We&apos;ve done all the heavy lifting so you don&apos;t have to
            &mdash; the perfect starting point for any project.
          </div>
        </div>
      </div>
    </div>
  );
}
