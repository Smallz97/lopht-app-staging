import { NavbarLinkProps } from "@/app/admin/utilities/lib/definitions"

import {
    DashboardIconLight,
    DashboardIconDark,
    SecurityManagementIconLight,
    SecurityManagementIconDark,
    BillPaymentsIconDark,
    RoleManagementIconDark,
    CommunityManagementIconDark,
    NewsfeedIconDark,
    TasksandReportsIconDark,
    AuditLogsIconDark,
    SettingsIconDark,
    UpgradePlanIconDark
} from "@/app/admin/utilities/lib/icons"

export const firstNavbarLinks: NavbarLinkProps[] = [
    {
        link: "Dashboard",
        icon: <DashboardIconLight />,
        isHighlighted: true
    },
    {
        icon: <SecurityManagementIconDark />,
        link: "Security management",
        isHighlighted: false
    },
    // {
    // We'll include this after launch!!!
    //     icon: <BillPaymentsIconDark />,
    //     link: "Bills & Payments",
    //     isHighlighted: false
    // },
    {
        icon: <RoleManagementIconDark />,
        link: "Role management",
        isHighlighted: false
    },
    {
        icon: <CommunityManagementIconDark />,
        link: "Community management",
        isHighlighted: false
    },
    {
        icon: <NewsfeedIconDark />,
        link: "Newsfeed",
        isHighlighted: false
    }
]

export const secondNavbarLinks: NavbarLinkProps[] = [
    {
        icon: <TasksandReportsIconDark />,
        link: "Tasks & Reports",
        isHighlighted: false
    },
    // {
    // We'll include this after launch!!!
    //     icon: <AuditLogsIconDark />,
    //     link: "Audit Log",
    //     isHighlighted: false
    // },
    {
        icon: <SettingsIconDark />,
        link: "Settings",
        isHighlighted: false
    },
    {
        icon: <UpgradePlanIconDark />,
        link: "Upgrade",
        isHighlighted: false
    }
]