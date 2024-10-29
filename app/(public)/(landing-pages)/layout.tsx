import type { Metadata } from "next";

import "@/app/ui/global.css";
import { lato } from "@/app/ui/fonts";
import NavBar from "@/app/(public)/ui/shared-ui-components/navigation-bar/Navbar";
import Footer from "@/app/(public)/ui/shared-ui-components/footer-bar/Footer";

export const metadata: Metadata = {
  title: "Lopht App | Home",
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
        <NavBar />
        <main className="px-5 md:px-4 lg:px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
