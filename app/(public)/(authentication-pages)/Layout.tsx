import type { Metadata } from "next";

import "@/app/ui/global.css";
import { lato } from "@/app/ui/fonts";
import Navbar from "@/app/admin/utilities/ui/navigation-bar/Navbar";

export const metadata: Metadata = {
    title: "Lopht App | Sign In",
    description: "Simple Estate Mangement Solutions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lato.className} flex h-screen`}>
                <div className="border border-slate-200 overflow-y-auto overscroll-none basis-1/5">
                    <Navbar />
                </div>
                <main className="lg:px-12 lg:pt-24 overflow-y-auto overscroll-none basis-4/5">{children}</main>
            </body>
        </html>
    );
}
