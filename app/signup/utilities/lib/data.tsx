import { WizardFormStepsProps } from "@/app/signup/utilities/lib/definition";
import NavLink from "@/app/signup/utilities/ui/components/navigation-bar/NavLink";

export const WizardFormStepsData = [
    {
        step: 1,
        label: "Personal Information",
        description: "Add Your Personal info",
        href: "/signup/index",
    },
    {
        step: 2,
        label: "Community Information",
        description: "Add Your Company info",
        href: "/signup/communityinformation",
    },
    {
        step: 3,
        label: "Community Members",
        description: "Add Collaborators",
        href: "/signup/communitymembers",
    },
    {
        step: 4,
        label: "Review all Information",
        description: "Review information provided",
        href: "/signup/reviewinformation",
    },
];

export const FormSteps: WizardFormStepsProps[] = WizardFormStepsData.map(({ step, label, description, href }) => ({
    step,
    href,
    children: <NavLink label={label} description={description} />,
}));