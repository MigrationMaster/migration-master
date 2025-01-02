import { useState } from "react";
import { useSidebar } from "../sidebar";

export default function CustomSidebarHeader({
  AppTitle,
}: {
  AppTitle: { Name: string; logo: React.ElementType; AccountType: string };
}) {
  return (
    <div className="flex gap-4">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <AppTitle.logo className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{AppTitle.Name}</span>
        <span className="truncate text-xs">{AppTitle.AccountType}</span>
      </div>
    </div>
  );
}
