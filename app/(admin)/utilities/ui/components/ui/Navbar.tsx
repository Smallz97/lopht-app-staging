'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLinkProps } from "@/app/(landing-pages)/utilities/lib/definitions";
import { BrandName, LogoutIcon } from "@/app/(landing-pages)/utilities/lib/icons"
import { firstNavbarLinks, secondNavbarLinks } from "@/app/(admin)/utilities/lib/data"

export default function Navbar() {
    function ProfileName() {
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
                                    <img className="w-2 h-1.5 left-[0.40px] top-[1.27px] absolute" src="https://via.placeholder.com/8x6" />
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

    function NavbarLink({ href, children }: NavLinkProps) {
        const pathname = usePathname();
        const normalizedLink = `/${href.toLowerCase().replace(/\s+/g, '-')}`;
        const active = pathname === normalizedLink;

        return (
            <Link
                className={`items-center gap-2 flex p-2 ${active ? 'text-orange-400 font-extrabold' : 'text-black font-normal'}`}
                href={normalizedLink}
            >
                {children}
            </Link>
        );
    }

    return (
        <div className="px-5 py-8 flex-col flex gap-10 border border-slate-400 bg-white">
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
            <div>
                <Link
                    href="/about"
                    className="py-3 rounded border border-slate-400 justify-center items-center flex"
                >
                    <>
                        <div className="w-6 h-6 justify-center items-center flex">
                            <LogoutIcon />
                        </div>
                        <div className="text-red-500 text-base font-medium">Log out</div>
                    </>
                </Link>
            </div>
        </div>
    )
}