import { pageHeadings } from "@/app/lib/data";
import Image from "next/image";
import PageHeading from "@/app/(public)/ui/shared-ui-components/page-heading/PageHeading";
import MobileHero from "@/app/(public)/ui/privacy-policy-page/images/mobile-hero.png"
import DesktopHero from "@/app/(public)/ui/privacy-policy-page/images/tablet-hero.png"


export default function Hero() {
    const { pageName, heading, subHeading } = pageHeadings[2];
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