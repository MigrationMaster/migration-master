"use client";

import {
  BellIcon,
  BookOpen,
  CreditCard,
  DockIcon,
  GalleryVerticalEnd,
  LayoutDashboardIcon,
  PersonStandingIcon,
  SendIcon,
  User2Icon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../sidebar";
import { useUser } from "@clerk/nextjs";
import CustomSidebarHeader from "./SidebarHeader";
import MainNav from "./Main-Nav";
import FooterNav from "./Footer-Nav";

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  const data = {
    user: {
      name: user?.username?.toString() || "Unknown",
      email:
        user?.emailAddresses
          ?.map((email) => email.emailAddress.toString())
          ?.join(", ") || "",
      avatar: "",
      items: [
        {
          title: "Account",
          url: "/account",
          icon: User2Icon,
        },
        {
          title: "Billing",
          url: "/billing",
          icon: CreditCard,
        },
        {
          title: "Notification",
          url: "/notification",
          icon: BellIcon,
        },
      ],
    },
    AppHeader: {
      Name: "Migration Master",
      logo: GalleryVerticalEnd,
      AccountType: "Personal",
    },
    navMain: [
      {
        title: "Migration",
        url: "#",
        icon: SendIcon,
        isActive: true,
        items: [
          {
            title: "New Migration",
            url: "/new-migration",
          },
          {
            title: "All Migrations",
            url: "/migrations",
          },
          {
            title: "Group",
            url: "/migration-group",
          },
          {
            title: "Control",
            url: "/migration-settings",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        isActive: false,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mb-5">
        <CustomSidebarHeader AppTitle={data.AppHeader} />
      </SidebarHeader>
      <SidebarContent>
        <MainNav
          NavItems={data.navMain}
          DashboardItems={{
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboardIcon,
            isActive: false,
          }}
        />
      </SidebarContent>
      <SidebarFooter>
        <FooterNav items={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
