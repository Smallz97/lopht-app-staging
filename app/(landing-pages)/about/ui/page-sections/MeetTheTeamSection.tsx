import Image from "next/image";
import { inter } from "@/app/fonts";
import { teamMembers } from "@/app/(landing-pages)/utilities/lib/data";
import { TwitterIcon, LinkedInIcon, SocialIcon } from "@/app/(landing-pages)/utilities/lib/icons";

export default function MeetTheTeamSection() {
    return (
        <div className="text-center py-20 md:px-16 md:py-24 lg:py-24" id="meet-the-team-section">
            <div id="section-heading">
                <div className="text-[#0f1728] text-3xl md:text-4xl font-semibold leading-[38px] md:leading-[44px] mb-4">Meet our team</div>
                <div className="text-[#475467] text-sm md:text-xl font-normal leading-normal mb-6 md:mb-16 md:px-16 lg:px-40">
                    Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                </div>
            </div>
            <div className="flex flex-col gap-y-6 px-4 md:px-0 md:grid grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16" id="members-grid">
                {teamMembers.map(({ image, name, position, description }, index) => (
                    <div key={index} className="bg-[#f8f9fb] border-0 border-solid border-black rounded-lg p-7 bg-red-50">
                        <div className="flex-col justify-start items-center gap-5 flex">
                            <Image className="rounded-3xl" src={image} alt="team member's image" />
                            <div className="flex flex-col justify-start items-center gap-4">
                                <div className="flex flex-col justify-start items-center gap-2">
                                    <div className={`${inter.className} flex flex-col justify-start items-center`}>
                                        <div className="text-[#0f1728] text-lg font-semibold leading-7">{name}</div>
                                        <div className="text-[#6840c6] md:text-orange-400 text-base font-normal leading-normal">{position}</div>
                                    </div>
                                    <div className={`${inter.className} text-center text-[#475466] text-sm font-normal leading-normal`}>
                                        {description}
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="w-3 h-1.5"><TwitterIcon /></div>
                                        <div className="w-3 h-1.5"><LinkedInIcon /></div>
                                        <div className="w-3 h-1.5"><SocialIcon /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

