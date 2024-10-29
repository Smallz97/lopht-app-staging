import Hero from "@/app/(public)/ui/privacy-policy-page/page-sections/hero-section/Hero"
import PrivacyPolicies from "@/app/(public)/ui/privacy-policy-page/page-sections/privacy-policies-section/PrivacyPolicies"
import CallToAction from "@/app/(public)/ui/shared-ui-components/cta-section/CallToActionSection"
export default function PrivacyPolicy() {
  return (
    <>
      <Hero />
      <PrivacyPolicies />
      <CallToAction />
    </>
  )
}