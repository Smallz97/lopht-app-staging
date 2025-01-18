import type { Metadata } from "next";

import "@/app/ui/global.css";
import { lato } from "@/app/fonts";

export const metadata: Metadata = {
    title: "Lopht App",
    description: "Simple Estate Mangement Solutions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lato.className} overscroll-none`}>
                <main>{children}</main>
            </body>
        </html>
    );
}
