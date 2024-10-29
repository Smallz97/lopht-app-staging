import { companyValues } from "@/app/lib/data"
import CompanyValueCard from "@/app/(public)/ui/about-page/components/company-value-card/CompanyValueCard";

export default function CompanyValuesList() {
    return (
        <div className="flex flex-col gap-10 md:gap-x-8 md:gap-y-16 md:grid md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {companyValues.map((value, index) => (
                <CompanyValueCard value={value} key={index} />
            ))}
        </div>
    )
}