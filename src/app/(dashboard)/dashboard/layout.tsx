import AppSidebar from "@/components/UI/SideBarDesign/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/UI/sidebar";
import React, { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function Dashboardlayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full h-10 bg-slate-100 md:bg-transparent">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
