import { PageHeadingProps } from "@/app/lib/definitions"

export default function PageHeading({ pageName, heading, subHeading }: PageHeadingProps) {
    return (
        <div className="text-center py-6 md:py-12 lg:py-16" id="page-heading-section">
            <div className="text-orange-400 text-sm md:text-base font-semibold leading-tight md:leading-normal">{pageName}</div>
            <div className="text-[#0f1728] text-4xl md:text-5xl font-semibold leading-[44px] md:leading-[60px] mb-4 md:mb-3">{heading}</div>
            <div className="text-[#475466] text-sm md:text-xl font-normal leading-7">{subHeading}</div>
        </div>
    )
}
