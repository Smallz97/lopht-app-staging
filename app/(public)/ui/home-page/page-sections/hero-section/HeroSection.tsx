import Image from "next/image";
import Button from "@/app/(public)/ui/shared-ui-components/Button/Button";
import MobileHero from "@/app/(public)/ui/home-page/images/mobile-hero.png";
import DesktopHero from "@/app/(public)/ui/home-page/images/desktop-hero.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-14 md:gap-24" id="hero-section">
      <div className="bg-[url('/mobile-hero.png')] md:bg-[url('/desktop-hero.png')] bg-no-repeat bg-cover bg-center rounded-lg">
        <div
          className="text-center justify-center items-center flex flex-col px-14 pt-10 pb-4 md:pb-16"
          id="hero-text"
        >
          <h1 className="text-2xl md:text-[50px] text-orange-200 font-extrabold mb-3 leading-normal">
            Manage your communities & events{" "}
            <span className="text-white">on our platform</span>
          </h1>
          <p className="text-sm md:text-xl text-white font-medium mb-6 leading-normal">
            Manage, organize and create with ease
          </p>
          <div className="flex flex-col gap-3 md:flex-row max-sm:w-full">
            <Button
              className={`md:px-11 py-3.5 max-sm:text-sm text-orange-400 bg-black text-white`}
            >
              Download the App
            </Button>
            <Button
              className={`md:px-11 py-3.5 max-sm:text-sm text-orange-400 bg-orange-100`}
            >
              Watch Demo
            </Button>
          </div>
        </div>
        <div id="hero-image-wrapper" className="flex justify-center md:px-12">
          <Image
            src={MobileHero}
            alt="Hero Image"
            className="block md:hidden"
          />
          <Image
            src={DesktopHero}
            alt="Hero Image"
            className="hidden md:block"
          />
        </div>
      </div>
      <div
        className="text-center md:px-28 lg:px-56 flex flex-col gap-6"
        id="hero-sub-text"
      >
        <h2 className="text-xl md:text-3xl font-bold text-orange-400">
          What&apos;s Lopht?
        </h2>
        <p className="text-[#667085] text-sm lg:text-xl font-normal leading-normal">
          Welcome to Lopht, we are specialists in helping communities thrive
          through seamless event management. Whether you&apos;re organizing a
          local festival, a charity fundraiser, or a neighborhood gathering, our
          tools and services are designed to make your event planning process
          effortless and enjoyable.
        </p>
      </div>
    </div>
  );
}
