'use client'
import Link from "next/link";
import { poppins } from "@/app/fonts";
import { usePathname } from 'next/navigation'
import { FormSteps } from "@/app/signup/utilities/lib/data";
import { BrandName } from "@/app/(landing-pages)/utilities/lib/icons";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className="h-full flex flex-col gap-8 items-center justify-center bg-[url('/background.png')] bg-no-repeat bg-cover bg-center">
            <div className="flex w-52 h-20">
                <BrandName />
            </div>
            <div className="flex flex-col gap-8" id="links wrapper">
                {FormSteps.map(({ step, href, children }, index) => {
                    const isActive = pathname === href;
                    return (
                        <div key={index} className="flex gap-5 items-center">
                            <div
                                className={`w-10 h-10 ${isActive ? "bg-orange-50" : "bg-white"} rounded-full items-center justify-center flex`}
                            >
                                <div
                                    className={`${poppins.className} text-center ${isActive ? "text-orange-400" : "text-black"} text-lg font-semibold`}
                                >
                                    {step}
                                </div>
                            </div>
                            <Link className="flex-col flex" href={href}>
                                {children}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
