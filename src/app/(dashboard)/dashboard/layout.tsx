import AppSidebar from "@/components/UI/SideBarDesign/AppSidebar";
import SearchBar from "@/components/UI/form/searchBar";
import { Separator } from "@/components/UI/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/UI/sidebar";
import React, { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function Dashboardlayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger className="ring-0 focus-within:ring-0 border-0" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div className="flex items-center mr-4 gap-2 ml-auto">
            <SearchBar />
          </div>
        </header>
        <div className="m-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
