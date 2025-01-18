import Image from "next/image";
import { pageHeadings } from "@/app/(landing-pages)/utilities/lib/data";
import PageHeading from "@/app/(landing-pages)/utilities/ui-components/page-heading/PageHeading";
import MobileHero from "@/app/(landing-pages)/terms-of-use/ui/images/mobile-hero.png"
import DesktopHero from "@/app/(landing-pages)/terms-of-use/ui/images/tablet-hero.png"

export default function HeroSection() {
    const { pageName, heading, subHeading } = pageHeadings[3];
    return (
        <>
            <PageHeading pageName={pageName} heading={heading} subHeading={subHeading} />
            <div className="bg-[#f8f9fb] mb-14" id="hero-image-section">
                <div className="flex flex-col">
                    <Image src={MobileHero} alt={`hero-image`} className="block md:hidden w-full" />
                    <Image src={DesktopHero} alt={`hero-image`} className="hidden md:block" />
                </div>
            </div>
        </>
    );
}