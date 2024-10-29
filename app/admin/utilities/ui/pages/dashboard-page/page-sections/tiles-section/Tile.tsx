import { inter } from "@/app/ui/fonts"
import { UpIcon, DownIcon } from "@/app/admin/utilities/lib/icons"
export default function Tile() {
    return (
        <div className={`p-3 shrink w-80 justify-between flex rounded-lg bg-white border-black ${inter.className} `}>
            <div className={`flex-col gap-6 p-2 flex`}>
                <div className="flex text-[#667185] text-sm font-medium leading-none">Total no. of visitors</div>
                <div className={`text-[#1d2639] text-3xl font-semibold leading-10`}>124</div>
                <div className="gap-2 flex items-center">
                    <div className={`text-[#cc3f0c] text-xs font-medium leading-none`}>View visitors</div>
                    <button className="flex w-5 h-5">
                        <UpIcon />
                    </button>
                </div>
            </div>
            <div className={`flex-col flex`}>
                <div className="bg-slate-50 rounded gap-3 flex p-2">
                    <div className="text-[#667185] text-sm font-medium leading-none">Jun 12th, 2023</div>
                    <div className="flex w-4 h-4">
                        <DownIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}