import { CheckIcon, UserIdIcon } from "@/app/lib/icons";
import { FeatureCardProps } from "@/app/lib/definitions";
import ResponsiveImage from "@/app/(public)/ui/home-page/components/responsive-image/ResponsiveImage";

export default function FeatureCard({
  feature: { feature, highlight, points, imageSm, imageMd, alt },
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col ${className} items-center gap-10 md:px-8 md:gap-24`}
    >
      <div
        className="grow shrink basis-0 flex flex-col gap-8"
        id="feature-text-wrapper"
      >
        <div
          className="flex-col flex gap-6 items-center lg:items-start"
          id="feature-title"
        >
          <div className="w-12 h-12 p-1.5 bg-orange-100 border-8 border-orange-50 rounded-3xl justify-center items-center flex">
            <div className="w-9 h-full flex justify-center items-center">
              <div className="w-full h-full flex">
                <UserIdIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="self-stretch text-[#0f1728] max-md:text-center text-2xl md:text-[32px] font-bold leading-loose">
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
