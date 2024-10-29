'use client'

import { BrandName, LogoutIcon } from "@/app/lib/icons"
import NavbarLink from "@/app/admin/utilities/ui/navigation-bar/NavbarLink"
import ProfileName from "@/app/admin/utilities/ui/navigation-bar/ProfileName"
import { firstNavbarLinks, secondNavbarLinks } from "@/app/admin/utilities/lib/data"

export default function Navbar() {
    return (
        <div className="px-5 py-8 flex-col flex gap-10">
            <div className="flex w-full h-11"><BrandName /></div>
            <ProfileName />
            <div className="flex-col gap-5 flex">
                {firstNavbarLinks.map((item, index) => (
                    <NavbarLink key={index} {...item} />
                ))}
            </div>
            <div className="flex-col gap-5 flex">
                <div className="text-black text-sm font-bold">Others</div>
                {secondNavbarLinks.map((item, index) => (
                    <NavbarLink key={index} {...item} />
                ))}
            </div>
            <div className="py-3 rounded border border-slate-200 justify-center items-center flex">
                <NavbarLink icon={<LogoutIcon />} link={`Log out`} />
            </div>
        </div>
    )
}