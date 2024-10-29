import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import { TeamMemberCardProps } from "@/app/lib/definitions";
import { TwitterIcon, LinkedInIcon, SocialIcon } from "@/app/lib/icons";

export default function TeamMemberCard({
  member: { image, name, position, description },
}: TeamMemberCardProps) {
  return (
    <div className="bg-[#f8f9fb] border-0 border-solid border-black rounded-lg p-7 bg-red-50">
      <div className="flex-col justify-start items-center gap-5 flex">
        <Image className="rounded-3xl" src={image} alt="team member's image" />
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="flex flex-col justify-start items-center gap-2">
            <div className={`${inter.className} flex flex-col justify-start items-center`}>
              <div
                className={`text-[#0f1728] text-lg font-semibold leading-7`}
              >
                {name}
              </div>
              <div
                className={`text-[#6840c6] md:text-orange-400 text-base font-normal leading-normal`}
              >
                {position}
              </div>
            </div>
            <div
              className={`${inter.className} text-center text-[#475466] text-sm font-normal leading-normal`}
            >
              {description}
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="w-6 h-4">
                <TwitterIcon />
              </div>
              <div className="w-6 h-4">
                <LinkedInIcon />
              </div>
              <div className="w-6 h-4">
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
