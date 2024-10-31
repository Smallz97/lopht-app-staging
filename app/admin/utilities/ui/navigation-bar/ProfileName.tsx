import Image from "next/image";

export default function ProfileName() {
    return (
        <div className="px-3 py-1.5 bg-slate-50 rounded border border-slate-200 justify-start items-center gap-3">
            <div className="grow shrink basis-0 h-11 justify-start items-center gap-3 flex">
                <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-[#ffece5] rounded-full" />
                    <div className="w-8 h-3.5 left-[4px] top-[12px] absolute text-center text-[#101828] text-base font-semibold leading-normal">VT</div>
                    <div className="w-3.5 h-3.5 left-[28px] top-[26px] absolute justify-center items-center inline-flex">
                        <div className="w-3.5 h-3.5 relative">
                            <div className="w-3.5 h-3.5 left-0 top-0 absolute bg-[#1571d8] rounded-full" />
                            <div className="w-2 h-2 left-[2.80px] top-[2.80px] absolute">
                                <img className="w-2 h-1.5 left-[0.40px] top-[1.27px] absolute" src="https://via.placeholder.com/8x6" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch text-[#101828] text-lg font-semibold leading-relaxed">Victor Taiwo</div>
                    <div className="self-stretch text-orange-400 text-sm font-normal leading-tight">View profile</div>
                </div>
            </div>
        </div>
    )
}