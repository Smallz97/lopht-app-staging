import HeroSection from "@/app/(public)/ui/about-page/page-sections/hero-section/HeroSection"
import MeetTheTeamSection from "@/app/(public)/ui/about-page/page-sections/meet-the-team-section/MeetTheTeamSection";
import CompanyValuesSection from "@/app/(public)/ui/about-page/page-sections/company-values-section/CompanyValuesSection";
import CallToActionSection from "@/app/(public)/ui/shared-ui-components/cta-section/CallToActionSection";

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
