import { FormLegendProps } from "@/app/signup/utilities/lib/definition";

export default function FormLegend({ legend, description }: FormLegendProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="text-black text-4xl font-semibold leading-10">{legend}</div>
                <div className="text-gray-400 text-base font-normal leading-normal">{description}</div>
            </div>
            <div id="horizontal-line">
                <hr className="w-full" />
            </div>
        </div>
    )
}