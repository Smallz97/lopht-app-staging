import { pageHeadings } from "@/app/lib/data";
import PageHeading from "@/app/(public)/(landing-pages)/ui/shared-ui-components/page-heading/PageHeading";
import Image from "next/image";
import MobileHero from "@/app/(public)/(landing-pages)/ui/terms-of-use-page/images/mobile-hero.png"
import DesktopHero from "@/app/(public)/(landing-pages)/ui/terms-of-use-page/images/tablet-hero.png"

export default function Hero() {
    const { pageName, heading, subHeading } = pageHeadings[3];
    return (
        <div id="hero-section">
            <PageHeading pageName={pageName} heading={heading} subHeading={subHeading} />
            <div className="bg-[#f8f9fb] mb-14" id="hero-image-section">
                <div className="flex flex-col">
                    <Image src={MobileHero} alt={`hero-image`} className="block md:hidden w-full" />
                    <Image src={DesktopHero} alt={`hero-image`} className="hidden md:block" />
                </div>
            </div>
        </div>
    );
}