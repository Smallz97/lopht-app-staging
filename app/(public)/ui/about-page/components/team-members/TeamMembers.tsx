import { teamMembers } from "@/app/lib/data"
import { TeamMember } from "@/app/lib/definitions"
import TeamMemberCard from "@/app/(public)/ui/about-page/components/team-member-card/TeamMemberCard"

export default function TeamMembers() {
    return (
        <div className="flex flex-col gap-y-6 md:grid grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16" id="cards-wrapper">
            {teamMembers.map((member: TeamMember, index) => (
                <TeamMemberCard member={member} key={index} />
            ))}
        </div>
    )
}