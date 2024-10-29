import { pageHeadings } from "@/app/lib/data";
import PageHeading from "@/app/(public)/ui/shared-ui-components/page-heading/PageHeading"
import EmailForm from "@/app/(public)/ui/blogs-page/components/email-form/EmailForm";

export default function HeroSection() {
    const { pageName, heading, subHeading } = pageHeadings[1];
    return (
        <div id="hero-section">
            <PageHeading pageName={pageName} heading={heading} subHeading={subHeading} />
            <EmailForm />
        </div>
    );
}