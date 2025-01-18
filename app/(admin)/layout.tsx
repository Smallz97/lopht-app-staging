import Navbar from "@/app/(admin)/utilities/ui/components/ui/Navbar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen">
            <div className="overflow-y-auto basis-1/5"><Navbar /></div>
            <div className="flex justify-center lg:pt-24 overflow-y-auto basis-4/5 bg-white">{children}</div>
        </div>
    );
}
