import { pageHeadings } from "@/app/(landing-pages)/utilities/lib/data";
import PageHeading from "@/app/(landing-pages)/utilities/ui-components/page-heading/PageHeading"
import Button from "@/app/(landing-pages)/utilities/ui-components/Button/Button";

export default function HeroSection() {
    const { pageName, heading, subHeading } = pageHeadings[1];
    return (
        <>
            <PageHeading pageName={pageName} heading={heading} subHeading={subHeading} />
            <div className="px-24 md:px-40">
                <form className="flex w-full justify-center gap-2 md:gap-4" id="form-wrapper">
                    <input
                        className="w-8/12 py-3 px-4 md:py-4 md:px-6 items-center bg-white rounded-lg shadow border border-[#cfd4dc] text-[#667084] text-base font-normal leading-normal"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <Button
                        className={`py-3 px-5 md:px-8 lg:px-12 bg-orange-400 shadow border border-orange-400 text-white text-sm font-semibold leading-normal`}
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </>
    );
}