import { NavLinksProps } from "@/app/signup/utilities/lib/definition";

export default function NavLink({ label, description }: NavLinksProps) {
    return (
        <>
            <div className="text-white text-lg font-bold leading-none">{label}</div>
            <div className="text-white text-xs font-normal">{description}</div>
        </>
    );
}