import { inter } from "@/app/fonts"
import { UpIcon, DownIcon } from "@/app/(admin)/utilities/lib/icons"
export default function Tile() {
    return (
        <div className={`p-3 shrink grow w-80 justify-between flex rounded-lg bg-teal-200 border border-orange-400 ${inter.className}`}>
            <div className={`flex-col gap-6 p-2 flex`}>
                <div className="flex text-[#667185] text-sm font-medium leading-none">Total Income</div>
                <div className={`text-[#1d2639] text-3xl font-semibold leading-10`}>$12,890</div>
                <div className="gap-2 flex items-center">
                    <div className={`text-[#cc3f0c] text-xs font-medium leading-none`}>View details</div>
                    <button className="flex w-3 h-3">
                        <UpIcon />
                    </button>
                </div>
            </div>
            <div className={`flex-col flex`}>
                <div className="bg-slate-50 rounded gap-3 flex p-2 border">
                    <div className="text-[#667185] text-sm font-medium leading-none">Jun 12th, 2023</div>
                    <div className="flex w-3 h-3">
                        <DownIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}