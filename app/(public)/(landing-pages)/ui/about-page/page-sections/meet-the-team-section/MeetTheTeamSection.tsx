import TeamMembers from "@/app/(public)/(landing-pages)/ui/about-page/components/team-members/TeamMembers"

export default function MeetTheTeamSection() {
    return (
        <div className="text-center py-20 md:px-16 md:py-24 lg:py-24" id="meet-the-team-section">
            <div id="section-heading">
                <div className="text-[#0f1728] text-3xl md:text-4xl font-semibold leading-[38px] md:leading-[44px] mb-4">Meet our team</div>
                <div className="text-[#475467] text-sm md:text-xl font-normal leading-normal mb-6 md:mb-16 md:px-16 lg:px-40">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</div>
            </div>
            <TeamMembers />
        </div>
    )
}
