import { NavLinkProps } from "@/app/(landing-pages)/utilities/lib/definitions";
import { createLinkContent } from "@/app/(admin)/utilities/lib/utils";
import {
    DashboardIconLight,
    DashboardIconDark,
    SecurityManagementIconLight,
    SecurityManagementIconDark,
    RoleManagementIconDark,
    CommunityManagementIconDark,
    NewsfeedIconDark,
    TasksandReportsIconDark,
    SettingsIconDark,
    UpgradePlanIconDark
} from "@/app/(admin)/utilities/lib/icons"

export const firstNavbarLinks: NavLinkProps[] = [
    {
        href: "Dashboard",
        children: createLinkContent(<DashboardIconLight />, "Dashboard"),
    },
    {
        href: "Analytics",
        children: createLinkContent(<DashboardIconDark />, "Analytics"),
    },
    {
        href: "Role management",
        children: createLinkContent(<RoleManagementIconDark />, "Role management"),
    },
    {
        href: "Security management",
        children: createLinkContent(<SecurityManagementIconDark />, "Security management"),
    },
    {
        href: "Community management",
        children: createLinkContent(<CommunityManagementIconDark />, "Community management"),
    },
    {
        href: "Newsfeed",
        children: createLinkContent(<NewsfeedIconDark />, "Newsfeed"),
    }
]

export const secondNavbarLinks: NavLinkProps[] = [
    {
        href: "Tasks & Reports",
        children: createLinkContent(<TasksandReportsIconDark />, "Tasks & Reports"),
    },
    {
        href: "Settings",
        children: createLinkContent(<SettingsIconDark />, "Settings"),
    },
    {
        href: "Upgrade",
        children: createLinkContent(<UpgradePlanIconDark />, "Upgrade"),
    }
]