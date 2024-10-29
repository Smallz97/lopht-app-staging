import { BlazeIcon } from "@/app/lib/icons";

export default function FeaturesSectionHeading() {
  return (
    <div className="flex flex-col gap-4 md:gap-5 py-2 md:mx-20 lg:mx-60 max-md:bg-orange-50">
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
  );
}
