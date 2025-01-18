import NavBar from "@/app/(landing-pages)/utilities/ui-components/navigation-bar/Navbar";
import Footer from "@/app/(landing-pages)/utilities/ui-components/footer-bar/Footer";

export default function LandingPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="px-5 md:px-4 lg:px-10">{children}</div>
      <Footer />
    </>
  );
}
