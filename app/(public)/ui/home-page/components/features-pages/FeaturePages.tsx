import Image from "next/image";
import LoftAdmin from "@/app/(public)/ui/home-page/images/loft-admin-md.png";
import FeaturesSectionNavigationBar from "@/app/(public)/ui/home-page/components/features-section-navbar/FeaturesSectionNavBar";

export default function FeaturePages() {
  return (
    <div className="flex flex-col gap-7 md:gap-16">
      <FeaturesSectionNavigationBar />
      <div className="flex-col lg:flex-row justify-center gap-6 flex">
        <div
          className="grow shrink basis-0 lg:bg-slate-50 rounded-xl flex py-10 md:px-3 lg:py-0"
          id="text-wrapper"
        >
          <div className="text-center text-black flex-col justify-center gap-4 flex">
            <div
              className=" text-lg md:text-3xl font-bold leading-tight"
              id="feature-page-title"
            >
              Loft for Admins
            </div>
            <div
              className="text-sm md:text-xl font-light"
              id="feature-page-description"
            >
              Our all-in-one app for managing communities allows admins to
              configure bills and tariffs, automate collections and
              reconciliations, implement revenue assurance measures, communicate
              individually or generally with residents, track issues and
              generate tonnes of reports that provide information on how well
              the community is running - all from your mobile phone.
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 bg-slate-50 rounded-xl flex justify-center">
          <Image src={LoftAdmin} alt={`admin-dashboard-screenshot`} />
        </div>
      </div>
    </div>
  );
}
