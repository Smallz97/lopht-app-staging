import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { NavbarLinkProps } from "@/app/admin/utilities/lib/definitions";

export default function NavbarLink({ icon, link, isHighlighted }: NavbarLinkProps) {
    const pathname = usePathname()
    const normalizedLink = link.toLowerCase();

    return normalizedLink === "log out" ? (
        <Link className="items-center gap-2 flex" href={`${normalizedLink}`}>
            <div className="w-6 h-6 justify-center items-center flex">
                {icon}
            </div>
            <div className="text-red-500 text-base font-medium">{link}</div>
        </Link>
    ) : (
        <Link className="p-2 items-center gap-2 flex" href={`/admin/${normalizedLink}`}>
            <div className="w-6 h-6 justify-center items-center flex">{icon}</div>
            <div
                className={`text-sm font-${isHighlighted ? "extrabold text-orange-400" : "normal text-black"}`}
            >
                {link}
            </div>
        </Link>
    );
};