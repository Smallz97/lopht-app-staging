import { CompanyValueCardProps } from "@/app/lib/definitions"

export default function CompanyValueCard({ value: { icon, value, description } }: CompanyValueCardProps) {
    return (
        <div className="flex flex-col items-center gap-4">
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
    )
}