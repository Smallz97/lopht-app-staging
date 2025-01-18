import HeroSection from "@/app/(landing-pages)/about/ui/page-sections/HeroSection"
import MeetTheTeamSection from "@/app/(landing-pages)/about/ui/page-sections/MeetTheTeamSection";
import CompanyValuesSection from "@/app/(landing-pages)/about/ui/page-sections/CompanyValuesSection";
import CallToActionSection from "@/app/(landing-pages)/utilities/ui-components/cta-section/CallToActionSection";

export default function AboutUs() {
    return (
        <>
            <HeroSection />
            <MeetTheTeamSection />
            <CompanyValuesSection />
            <CallToActionSection />
        </>
    );
}
