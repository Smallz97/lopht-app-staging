import Image from "next/image";
import { pageHeadings } from "@/app/(landing-pages)/utilities/lib/data";
import HeroImage from "@/app/(landing-pages)/about/ui/images/hero-images/hero-image.png";
import PageHeading from "@/app/(landing-pages)/utilities/ui-components/page-heading/PageHeading";

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
            src={HeroImage}
            className="block"
            alt={`hero-image`}
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
