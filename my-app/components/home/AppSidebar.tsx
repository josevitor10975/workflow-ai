"use client";

import Link from "next/link";
import {
  BarChart3,
  Clock3,
  GitBranch,
  Home,
  Settings,
  Swords,
  Users,
  X,
} from "lucide-react";

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
  { label: "Home", href: "/", icon: Home },
  { label: "Workspaces", href: "/workspaces", icon: GitBranch },
  { label: "Battles", href: "/battles", icon: Swords },
  { label: "History", href: "/history", icon: Clock3 },
];

const secondaryNavigation = [
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

const menuButtonClassName = "!translate-x-0 !transition-none font-sans text-sm";

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="font-sans">
      <SidebarHeader className="h-16 justify-center px-4">
        {state === "expanded" ? (
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center overflow-hidden whitespace-nowrap">
              <span className="text-base font-semibold tracking-tight">Workflow AI</span>
            </Link>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Close sidebar"
              onClick={toggleSidebar}
            >
              <X />
            </Button>
          </div>
        ) : null}
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-sans text-xs">Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      isActive={item.href === "/"}
                      tooltip={item.label}
                      className={menuButtonClassName}
                      render={<Link href={item.href} />}
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-sans text-xs">Manage</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      className={menuButtonClassName}
                      render={<Link href={item.href} />}
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
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
                <span className="truncate text-xs text-muted-foreground">Free plan</span>
              </span>
              <Users className="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
