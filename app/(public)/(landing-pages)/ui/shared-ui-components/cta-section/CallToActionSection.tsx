import { inter } from "@/app/ui/fonts";
import Button from "@/app/(public)/(landing-pages)/ui/shared-ui-components/Button/Button";

export default function CallToActionSection() {
  return (
    <div
      className="flex flex-col pt-16 md:pt-20 pb-24 lg:px-3 lg:py-36 lg:flex-row md:justify-between md:items-start gap-8 lg:gap-0"
      id="call-to-action-setion"
    >
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="text-[#0f1728] md:text-[22px] text-3xl font-semibold leading-[38px]">
          Get started on Lopht
        </div>
        <div
          className={`${inter.className} text-[#475466] text-base md:text-xl font-normal leading-[30px]`}
        >
          Join over 100+ Communities already using Lopht.
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button className={`px-9 py-4 bg-orange-100 text-orange-400`}>
          Learn More
        </Button>
        <Button className={`px-11 py-4 bg-orange-400 text-white`}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
