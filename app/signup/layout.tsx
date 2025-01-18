import Navbar from "@/app/signup/utilities/ui/components/navigation-bar/Navbar";

export default function LandingPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen">
            <div className="overflow-y-auto basis-3/12"><Navbar /></div>
            <div className="overflow-y-auto basis-9/12">{children}</div>
        </div>
    );
}
