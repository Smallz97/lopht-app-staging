import HeroSection from "@/app/(landing-pages)/privacy-policy/ui/page-sections/HeroSection"
import PrivacyPoliciesSection from "@/app/(landing-pages)/privacy-policy/ui/page-sections/PrivacyPoliciesSection"
import CallToAction from "@/app/(landing-pages)/utilities/ui-components/cta-section/CallToActionSection"
export default function PrivacyPolicy() {
  return (
    <>
      <HeroSection />
      <PrivacyPoliciesSection />
      <CallToAction />
    </>
  )
}