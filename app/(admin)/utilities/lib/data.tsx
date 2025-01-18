import { NavLinkProps } from "@/app/(landing-pages)/utilities/lib/definitions"

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
        children: <DashboardIconLight />
    },
    {
        href: "Analytics",
        children: <DashboardIconDark />
    },
    {
        href: "Role management",
        children: <RoleManagementIconDark />,
    },
    {
        href: "Security management",
        children: <SecurityManagementIconDark />
    },
    {
        href: "Community management",
        children: <CommunityManagementIconDark />
    },
    {
        href: "Newsfeed",
        children: <NewsfeedIconDark />
    }
]

export const secondNavbarLinks: NavLinkProps[] = [
    {
        href: "Tasks & Reports",
        children: <TasksandReportsIconDark />
    },
    {
        href: "Settings",
        children: <SettingsIconDark />
    },
    {
        href: "Upgrade",
        children: <UpgradePlanIconDark />
    }
]