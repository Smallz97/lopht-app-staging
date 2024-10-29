import { inter } from "@/app/ui/fonts";
import CompanyValuesList from "@/app/(public)/ui/about-page/components/company-values-list/CompanyValuesList";

export default function CompanyValuesSection() {
    return (
        <div className="flex flex-col items-center gap-12 p-4 md:p-12 lg:py-24 lg:px-12 text-center bg-[#f8f9fb]" id="company-values-section">
            <div className="flex flex-col items-center gap-4" id="section-heading">
                <div className="flex flex-col justify-start items-center gap-3 font-semibold">
                    <div className={`${inter.className} text-orange-400 text-sm leading-tight`}>Our values</div>
                    <div className="text-[#0f1728] text-3xl leading-[38px]">How we work at Lopht</div>
                </div>
                <div className="text-[#475466] text-sm font-normal leading-normal">Our shared values keep us connected and guide us as one team.</div>
            </div>
            <CompanyValuesList />
        </div>
    );
}
