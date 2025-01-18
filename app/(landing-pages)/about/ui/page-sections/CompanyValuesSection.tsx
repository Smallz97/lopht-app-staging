import { inter } from "@/app/fonts";
import { companyValues } from "@/app/(landing-pages)/utilities/lib/data"

export default function CompanyValuesSection() {
    return (
        <div className="flex flex-col items-center gap-12 p-4 md:p-12 lg:py-24 lg:px-12 text-center bg-[#f8f9fb]" id="company-values-section">
            <div className="flex flex-col items-center gap-4" id="section-heading">
                <div className="flex flex-col justify-start items-center gap-3 font-semibold">
                    <div className={`${inter.className} text-orange-400 text-sm leading-tight`}>Our values</div>
                    <div className="text-[#0f1728] text-3xl leading-[38px]">How we work at Lopht</div>
                </div>
                <div className="text-[#475466] text-sm font-normal leading-normal">
                    Our shared values keep us connected and guide us as one team.
                </div>
            </div>
            <div className="flex flex-col gap-10 md:gap-x-8 md:gap-y-16 md:grid md:grid-cols-2 lg:grid-cols-3 lg:px-8">
                {companyValues.map(({ icon, value, description }, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <div className="w-10 h-10 p-2.5 bg-orange-50 rounded-[20px] justify-center items-center flex">
                            <div className="w-5 h-5 flex" id="company-value-icon">
                                {icon}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#0f1728] text-lg font-medium leading-7">{value}</div>
                            <div className="text-[#475466] text-base font-normal leading-normal">{description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

