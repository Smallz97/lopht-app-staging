"use client";

import { usePathname } from "next/navigation";
import FooterCTABar from "@/app/(public)/(landing-pages)/ui/shared-ui-components/footer-bar/footer-cta-bar/FooterCTABar";
import FooterLinksBar from "@/app/(public)/(landing-pages)/ui/shared-ui-components/footer-bar/footer-links-bar/FooterLinksBar";

export default function Footer() {
  const pathname = usePathname();
  const homepage = pathname === "/";

  return (
    <footer>
      {homepage && <FooterCTABar />}
      <FooterLinksBar />
    </footer>
  );
}
