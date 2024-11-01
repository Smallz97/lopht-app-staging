import Image from "next/image";
import { BrandName, AppleLogo, OrangeAppleLogo, PlayStoreLogo } from "@/app/lib/icons";
import Button from "@/app/(public)/(landing-pages)/ui/shared-ui-components/Button/Button";
import FooterImage from "@/app/(public)/(landing-pages)/ui/shared-ui-components/footer-bar/images/footer-image-md.png";

export default function FooterCTABar() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:px-3 md:py-2 lg:px-12 md:gap-3 lg:gap-24 md:bg-black">
      <div className="flex md:basis-0 md:grow md:shrink">
        <Image src={FooterImage} alt={``} />
      </div>
      <div className="px-5 py-14 md:max-lg:px-2 md:py-0 md:basis-0 md:grow md:shrink bg-black flex-col justify-start md:justify-center items-center md:items-start gap-8 md:gap-6 flex">
        <div className="flex justify-center h-12 w-full md:hidden">
          <BrandName />
        </div>
        <div className="self-stretch text-white flex-col justify-center md:justify-start items-center md:items-start flex gap-2">
          <div className="text-center md:text-left text-3xl md:max-lg:text-2xl font-semibold lg:font-bold leading-10">
            Unlock the seamless management potential, Download our resident app
            easily.
          </div>
          <div className="text-center md:text-left text-sm lg:text-lg font-normal">
            Get the maximum experience from Lopht App. Join the Lopht App
            community at zero cost, anywhere you are. Click the button below to
            download our app.
          </div>
        </div>
        <div className="w-full md:w-4/5 flex-col md:flex-row justify-center md:justify-start items-center gap-3 flex">
          <Button className={`w-full py-3.5 bg-orange-100 text-black`}>
            <div className="flex h-7 w-6">
              <PlayStoreLogo />
            </div>
            <div className="text-left leading-none">
              <span className="text-xs">Get it on</span><br></br>
              <span className="text-sm md:text-base">Google Play</span>
            </div>
          </Button>
          <Button className={`w-full py-3.5 bg-orange-400 lg:bg-black lg:border-2 lg:border-orange-400 text-white lg:text-orange-400`}>
            <div className="flex h-6 w-6 lg:hidden">
              <AppleLogo />
            </div>
            <div className="hidden lg:flex h-6.5 w-6">
              <OrangeAppleLogo />
            </div>
            <div className="text-left leading-none">
              <span className="text-xs">Download on the</span><br></br>
              <span className="text-sm md:text-base">App Store</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
