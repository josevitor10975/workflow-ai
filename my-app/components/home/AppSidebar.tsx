"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faClock,
  faCodeBranch,
  faHouse,
  faGear,
  faSwords,
  faUsers,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNavigation = [
  { label: "Home", href: "/", icon: faHouse },
  { label: "Workspaces", href: "/workspaces", icon: faCodeBranch },
  { label: "Battles", href: "/battles", icon: faSwords },
  { label: "History", href: "/history", icon: faClock },
];

const secondaryNavigation = [
  { label: "Analytics", href: "/analytics", icon: faChartColumn },
  { label: "Settings", href: "/settings", icon: faGear },
];

const menuButtonClassName = "!translate-x-0 !transition-none font-sans text-sm";

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="font-sans">
      <SidebarHeader className="h-16 justify-center px-4">
        {state === "expanded" ? (
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="flex items-center overflow-hidden whitespace-nowrap"
            >
              <span className="text-base font-semibold tracking-tight">
                Workflow AI
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Close sidebar"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>
        ) : null}
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-sans text-xs">
            Workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={item.href === "/"}
                    tooltip={item.label}
                    className={menuButtonClassName}
                    render={<Link href={item.href} />}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-sans text-xs">
            Manage
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavigation.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    tooltip={item.label}
                    className={menuButtonClassName}
                    render={<Link href={item.href} />}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              tooltip="Profile"
              className={menuButtonClassName}
              render={<Link href="/profile" />}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sidebar-accent text-xs font-semibold">
                JV
              </span>
              <span className="flex min-w-0 flex-col text-left">
                <span className="truncate font-medium">José Vitor</span>
                <span className="truncate text-xs text-muted-foreground">
                  Free plan
                </span>
              </span>
              <FontAwesomeIcon icon={faUsers} className="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
