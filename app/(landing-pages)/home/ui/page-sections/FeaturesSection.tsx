import Image from "next/image";
import { features } from "@/app/(landing-pages)/utilities/lib/data";
import LoftAdmin from "@/app/(landing-pages)/home/ui/images/loft-admin.png";
import { BlazeIcon, CheckIcon, UserIdIcon } from "@/app/(landing-pages)/utilities/lib/icons";

export default function FeaturesSection() {
  return (
    <>
      <div className="flex flex-col gap-4 md:gap-5 py-2 md:mx-20 lg:mx-60 max-md:bg-orange-50" id="section heading">
        <div className="text-center text-orange-400 text-base font-semibold leading-normal">
          Features
        </div>
        <div className="px-5 md:px-0 md:mx-20 lg:mx-16">
          <div className="text-right text-[#1f1f25] text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-10">
            Discover our tools
          </div>
          <div className="items-center flex gap-1 lg:gap-3">
            <div className="text-orange-400 text-2xl md:text-4xl lg:text-5xl font-bold">
              Why you&apos;ll love us
            </div>
            <div className="w-6 h-6 lg:w-9 lg:h-9 bg-orange-400 rounded-3xl shadow-inner justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                <div className="w-full h-full">
                  <BlazeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-[#475466] text-sm md:text-lg lg:text-xl font-normal">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 estates.
        </div>
      </div>
      <div className="flex flex-col py-16 md:py-24 gap-16 md:gap-24" id="key features">
        {features.map(
          (
            {
              feature,
              highlight,
              points,
              image,
              alt,
            },
            index
          ) => (
            <div
              key={index}
              className={`flex flex-col lg:items-center ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 md:gap-16 lg:gap-0 lg:justify-between lg:bg-orange-50 lg:rounded-sm`}
            >
              <div className="flex flex-col gap-8 md:px-8 basis-2/4" id="feature-text-wrapper">
                <div className="flex-col flex gap-6" id="feature-title">
                  <div className="w-12 h-12 p-1.5 bg-orange-100 border-8 border-orange-100 rounded-2xl justify-center items-center max-lg:self-center flex">
                    <div className="w-9 h-12 flex justify-center items-center">
                      <div className="w-9 h-12 flex">
                        <UserIdIcon />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-8">
                    <div className="text-[#0f1728] max-lg:text-center max-sm:text-xl text-2xl md:text-[32px] font-bold leading-loose md:bg-orange-200 rounded md:pl-3 lg:pl-2">
                      {feature}
                    </div>
                    <div className="text-[#475466] text-base max-sm:text-center md:text-lg font-normal leading-normal md:leading-7">
                      {highlight}
                    </div>
                  </div>
                </div>
                <div className="pl-2 flex flex-col gap-4 md:gap-5">
                  {Object.values(points).map((point, index) => (
                    <div key={index} className="gap-3 flex">
                      <div className="w-7 h-7 bg-orange-100 rounded-2xl">
                        <CheckIcon />
                      </div>
                      <div className="text-[#475466] text-sm md:text-lg font-normal md:leading-normal">
                        {point}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="" id="feature-image-wrapper">
                <Image alt={alt} src={image} className="max-sm:rounded-xl" />
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex flex-col gap-7 md:gap-16" id="features-carousel">
        <div className="lg:px-64" id="carousel-navigation">
          <div className="bg-slate-50 rounded-xl flex lg:gap-0.5">
            <div className="py-5 rounded-xl md:rounded-xl border border-green-600 justify-center items-center grow shrink basis-0 flex">
              <div className="text-black text-xs md:text-lg font-medium leading-none">
                Administrators
              </div>
            </div>
            <div className="py-5 rounded-xl md:rounded-full justify-center items-center grow shrink basis-0 flex">
              <div className="text-black text-xs md:text-lg font-normal leading-none">
                Communities
              </div>
            </div>
            <div className="py-5 rounded-xl md:rounded-full justify-center items-center grow shrink basis-0 flex">
              <div className="text-black text-xs md:text-lg font-normal leading-none">
                Events
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col lg:flex-row justify-center gap-6 flex" id="carousel-wrapper">
          <div
            className="lg:basis-2/5 lg:bg-slate-50 rounded-xl flex py-10 md:px-3 lg:py-0"
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
          <div className="bg-slate-50 rounded-xl flex justify-center">
            <Image src={LoftAdmin} alt={`admin-dashboard-screenshot`} />
          </div>
        </div>
      </div>
    </>
  );
}
