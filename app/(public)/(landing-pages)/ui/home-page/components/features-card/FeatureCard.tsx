import { CheckIcon, UserIdIcon } from "@/app/lib/icons";
import { FeatureCardProps } from "@/app/lib/definitions";
import ResponsiveImage from "@/app/(public)/(landing-pages)/ui/home-page/components/responsive-image/ResponsiveImage";

export default function FeatureCard({
  feature: { feature, highlight, points, imageSm, imageMd, alt },
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col ${className} items-center gap-10 md:gap-24 md:px-8 lg:bg-orange-50 lg:rounded-lg`}
    >
      <div
        className="grow shrink basis-0 flex flex-col gap-8"
        id="feature-text-wrapper"
      >
        <div
          className="flex-col flex gap-6"
          id="feature-title"
        >
          <div className="w-12 h-12 p-1.5 bg-orange-100 border-8 border-orange-100 rounded-3xl justify-center items-center flex max-lg:self-center">
            <div className="w-9 h-12 flex justify-center items-center">
              <div className="w-9 h-12 flex">
                <UserIdIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <div className="text-[#0f1728] max-lg:text-center text-xl sm:text-2xl md:text-[32px] font-bold leading-loose md:bg-orange-200 rounded md:pl-3 lg:pl-2">
              {feature}
            </div>
            <div className="self-stretch text-[#475466] text-base max-md:text-center md:text-lg font-normal leading-normal md:leading-7">
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
      <div className="flex grow shrink basis-0" id="feature-image-wrapper">
        <ResponsiveImage alt={alt} imageSm={imageSm} imageMd={imageMd} />
      </div>
    </div>
  );
}
