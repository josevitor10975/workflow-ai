"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMoon,
  faBars,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/components/theme-provider";

const workspaceNames: Record<string, string> = {
  "1": "SaaS Landing Page",
  "2": "API Architecture",
  "3": "E-commerce Dashboard",
  "4": "Mobile App UI",
};

const routeLabels: Record<string, string> = {
  workspaces: "Workspaces",
  battles: "Battles",
  history: "History",
  analytics: "Analytics",
  settings: "Settings",
  profile: "Profile",
};

function getBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return [{ label: "Home", href: "/", current: true }];
  }

  if (segments[0] === "workspaces" && segments[1]) {
    const workspaceName =
      workspaceNames[segments[1]] ?? `Workspace ${segments[1]}`;
    const breadcrumbs = [
      { label: "Home", href: "/", current: false },
      { label: "Workspaces", href: "/workspaces", current: false },
      {
        label: workspaceName,
        href: `/workspaces/${segments[1]}`,
        current: segments.length === 2,
      },
    ];

    if (segments[2]) {
      const childLabel = routeLabels[segments[2]] ?? segments[2];
      breadcrumbs.push({
        label: childLabel,
        href: pathname,
        current: true,
      });
    }

    return breadcrumbs;
  }

  const label = routeLabels[segments[0]] ?? segments[0];
  return [
    { label: "Home", href: "/", current: false },
    { label, href: `/${segments[0]}`, current: true },
  ];
}

export function AppHeader() {
  const { state, toggleSidebar } = useSidebar();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur-md md:px-6">
      <div className="flex min-w-0 items-center gap-2">
        {state === "collapsed" && (
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Open sidebar"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        )}
        <div className="hidden h-5 w-px bg-border sm:block" />
        <nav
          aria-label="Breadcrumb"
          className="hidden min-w-0 items-center gap-2 text-sm sm:flex"
        >
          {breadcrumbs.map((item, index) => (
            <div
              key={`${item.href}-${item.label}`}
              className="flex min-w-0 items-center gap-2"
            >
              {index > 0 && <span className="text-muted-foreground/60">/</span>}
              {item.current ? (
                <span className="truncate font-medium text-foreground">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="truncate text-muted-foreground"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          title={isDark ? "Light theme" : "Dark theme"}
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <Avatar className="size-8">
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
