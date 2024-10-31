import Hero from "@/app/(public)/(landing-pages)/ui/terms-of-use-page/page-sections/hero-section/Hero"
import CallToAction from "@/app/(public)/(landing-pages)/ui/shared-ui-components/cta-section/CallToActionSection"
import TermsOfUsage from "@/app/(public)/(landing-pages)/ui/terms-of-use-page/page-sections/terms-of-use-section/TermsOfUsage"

export default function TermsOfUse() {
    return (
        <>
            <Hero />
            <TermsOfUsage />
            <CallToAction />
        </>
    )
}