import { ChevronsUpDown, LogOut, LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { useEffect, useState } from "react";
import { useClerk } from "@clerk/nextjs";

export default function FooterNav({
  items,
}: {
  items: {
    name: string;
    email: string;
    avatar: string;
    items?: {
      title: string;
      url: string;
      icon: LucideIcon;
    }[];
  };
}) {
  const [NameAvatar, setNameAvatar] = useState("");

  useEffect(() => {
    if (items) {
      const FirstLetter = items.name[0]?.toUpperCase() || "";
      setNameAvatar(FirstLetter);
    }
  });

  const { isMobile } = useSidebar();
  const { signOut } = useClerk();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size={"lg"}
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={items.avatar} alt={items.name} />
                <AvatarFallback className="rounded-full bg-blue-500 text-white">
                  {NameAvatar}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{items.name}</span>
                <span className="truncate text-xs">{items.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left tet-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={items.avatar} alt={items.name} />
                  <AvatarFallback className="rounded-full bg-blue-500 text-white">
                    {NameAvatar}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{items.name}</span>
                  <span className="truncate text-xs">{items.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {items.items?.map((subItem) => (
                <a href={subItem.url}>
                  <DropdownMenuItem
                    key={subItem.title}
                    className="cursor-pointer"
                  >
                    {subItem.icon && <subItem.icon />}
                    {subItem.title}
                  </DropdownMenuItem>
                </a>
              ))}
              {/* <DropdownMenuItem></DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut({ redirectUrl: "/sign-in" })}
            >
              <LogOut />
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
