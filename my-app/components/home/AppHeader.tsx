"use client";

import { Bell } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background/95 px-4 md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <div className="hidden h-5 w-px bg-border sm:block" />
        <span className="hidden text-sm font-medium text-muted-foreground sm:block">Home</span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell />
        </Button>
        <Avatar className="size-8">
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
