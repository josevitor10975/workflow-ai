"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Code2,
  FileCode2,
  Folder,
  Image,
  MoreHorizontal,
  Plus,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreateWorkspaceModal } from "@/components/home/CreateWorkspaceModal";

const recentWorkspaces = [
  {
    name: "SaaS Landing Page",
    lastBattle: "2 days ago",
    battles: 3,
    artifacts: 12,
    icon: Folder,
  },
  {
    name: "API Architecture",
    lastBattle: "4 days ago",
    battles: 2,
    artifacts: 8,
    icon: Code2,
  },
  {
    name: "E-commerce Dashboard",
    lastBattle: "1 week ago",
    battles: 4,
    artifacts: 16,
    icon: Image,
  },
  {
    name: "Mobile App UI",
    lastBattle: "1 week ago",
    battles: 2,
    artifacts: 7,
    icon: FileCode2,
  },
];

export function HomeContent() {
  const [isCreateWorkspaceOpen, setIsCreateWorkspaceOpen] = useState(false);

  return (
    <>
      <main className="flex flex-1 flex-col px-4 py-8 md:px-8 md:py-12 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <section className="max-w-2xl space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Welcome back,
              </p>
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Let&apos;s find the best AI agent for your next project.
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                Create a workspace, run a battle, compare results and turn the best outcome into real code.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={() => setIsCreateWorkspaceOpen(true)}>
                <Plus />
                Create workspace
              </Button>
              <Button variant="outline" nativeButton={false} render={<Link href="/battles" />}>
                View recent battles
              </Button>
            </div>
          </section>

          <section className="mt-20 md:mt-24">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-base font-semibold tracking-tight">Recent workspaces</h2>
              <Button
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<Link href="/workspaces" />}
                className="text-muted-foreground"
              >
                View all
                <ArrowRight />
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {recentWorkspaces.map((workspace) => {
                const Icon = workspace.icon;

                return (
                  <Link key={workspace.name} href="/workspaces" className="block">
                    <Card className="h-full">
                      <CardContent className="flex h-full min-h-44 flex-col p-5">
                        <div className="flex items-start justify-between gap-3">
                          <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                            <Icon className="size-4" />
                          </span>
                          <span
                            aria-hidden="true"
                            className="flex size-8 items-center justify-center text-muted-foreground"
                          >
                            <MoreHorizontal className="size-4" />
                          </span>
                        </div>

                        <div className="mt-4">
                          <h3 className="truncate text-sm font-semibold">{workspace.name}</h3>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Last battle: {workspace.lastBattle}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center gap-4 pt-6 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Trophy className="size-3.5" />
                            {workspace.battles} battles
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <FileCode2 className="size-3.5" />
                            {workspace.artifacts} artifacts
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <CreateWorkspaceModal
        open={isCreateWorkspaceOpen}
        onClose={() => setIsCreateWorkspaceOpen(false)}
      />
    </>
  );
}
