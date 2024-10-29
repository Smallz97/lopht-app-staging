import type { Metadata } from "next";

import "@/app/ui/global.css";
import { lato } from "@/app/ui/fonts";

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
            <body className={`${lato.className}`}>
                <main className="px-5 md:px-4 lg:px-10">{children}</main>
            </body>
        </html>
    );
}
