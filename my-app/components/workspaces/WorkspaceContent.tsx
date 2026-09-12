"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCalendarDays,
  faChevronDown,
  faClock,
  faFilter,
  faFolder,
  faEllipsis,
  faPlus,
  faMagnifyingGlass,
  faWandMagicSparkles,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CreateBattleModal } from "@/components/workspaces/CreateBattleModal";

const mockWorkspaces = [
  {
    name: "SaaS Landing Page",
    description:
      "Landing page for a SaaS product. Focus on modern design, clear value proposition and conversion.",
    created: "Created 2 days ago",
    battles: 3,
    members: 1,
  },
  {
    name: "API Architecture",
    description:
      "Design and evaluate a scalable API architecture for a modern web application.",
    created: "Created 4 days ago",
    battles: 2,
    members: 1,
  },
  {
    name: "E-commerce Dashboard",
    description:
      "Build a clear and functional dashboard for managing an e-commerce operation.",
    created: "Created 1 week ago",
    battles: 4,
    members: 1,
  },
  {
    name: "Mobile App UI",
    description:
      "Create a modern mobile interface with a strong focus on usability and consistency.",
    created: "Created 1 week ago",
    battles: 2,
    members: 1,
  },
];
const battles = [
  {
    id: "#001",
    title: "Create the initial landing page",
    description: "Design a modern and clean landing page for a SaaS product.",
    models: ["GPT-5.6", "Gemini 2.5", "Claude 4.0"],
    status: "Completed",
    date: "Sep 10, 2026 · 14:32",
    winner: "Claude 4.0",
    score: "9.2",
  },
  {
    id: "#002",
    title: "Add the pricing section",
    description: "Create a pricing section with different plans and features.",
    models: ["GPT-5.6", "Gemini 2.5", "Claude 4.0"],
    status: "Completed",
    date: "Sep 11, 2026 · 10:21",
    winner: "Gemini 2.5",
    score: "8.7",
  },
  {
    id: "#003",
    title: "Build a dashboard interface",
    description:
      "Create a user dashboard with key metrics and recent activity.",
    models: ["GPT-5.6", "Gemini 2.5", "Claude 4.0"],
    status: "In progress",
    date: "Sep 12, 2026 · 09:45",
    progress: "2/3 completed",
  },
  {
    id: "#004",
    title: "Implement the authentication flow",
    description: "Create the login, register and password recovery pages.",
    models: ["GPT-5.6", "Gemini 2.5", "Claude 4.0"],
    status: "Scheduled",
    date: "Sep 13, 2026 · 09:00",
    progress: "Pending",
  },
];
const tabs = ["Battles", "Artifacts", "Branches", "Settings"];

export function WorkspaceContent({ workspaceId }: { workspaceId: string }) {
  const [isCreateBattleOpen, setIsCreateBattleOpen] = useState(false);
  const index = Number.parseInt(workspaceId, 10) - 1;
  const workspace = mockWorkspaces[index] ?? mockWorkspaces[0];

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
        <Link
          href="/workspaces"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="size-4" />
          Back to workspaces
        </Link>
        <section className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex min-w-0 items-start gap-5">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
              <FontAwesomeIcon icon={faFolder} className="size-8" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Workspace
              </p>
              <h1 className="mt-1 text-3xl font-medium tracking-tight md:text-4xl">
                {workspace.name}
              </h1>
              <p className="mt-2 max-w-2xl text-base leading-6 text-muted-foreground">
                {workspace.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="size-4" />
                  {workspace.created}
                </span>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <span className="inline-flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faWandMagicSparkles}
                    className="size-4"
                  />
                  {workspace.battles} battles
                </span>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <span className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faUsers} className="size-4" />
                  {workspace.members} member
                </span>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 lg:pt-8">
            <Button
              className="gap-2"
              onClick={() => setIsCreateBattleOpen(true)}
            >
              <FontAwesomeIcon icon={faPlus} className="size-4" />
              Create battle
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Workspace actions"
            >
              <FontAwesomeIcon icon={faEllipsis} className="size-4" />
            </Button>
          </div>
        </section>
        <nav
          className="mt-10 border-b border-border"
          aria-label="Workspace sections"
        >
          <div className="flex gap-7 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                disabled={tab !== "Battles"}
                className={`relative shrink-0 pb-3 text-sm font-medium ${tab === "Battles" ? "text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground" : "text-muted-foreground disabled:cursor-default"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>
        <section className="pt-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-medium tracking-tight">Battles</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Compare experiments and choose the best result for this
                workspace.
              </p>
            </div>
            <div className="flex w-full gap-2 md:w-auto">
              <div className="relative min-w-0 flex-1 md:w-64">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  aria-label="Search battles"
                  placeholder="Search battles..."
                  className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <Button variant="outline" className="shrink-0 gap-2">
                <FontAwesomeIcon icon={faFilter} className="size-4" />
                Filter
              </Button>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {battles.map((battle) => (
              <article
                key={battle.id}
                className="rounded-lg border border-border bg-card px-4 py-4 md:px-5 md:py-5"
              >
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(180px,1fr)_minmax(170px,.7fr)_minmax(170px,.65fr)_28px] lg:items-center">
                  <div className="flex min-w-0 gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-medium text-muted-foreground">
                      {battle.id}
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-medium md:text-base">
                        {battle.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">
                        {battle.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        {battle.models.map((model) => (
                          <span
                            key={model}
                            className="inline-flex items-center gap-1.5"
                          >
                            <span className="flex size-5 items-center justify-center rounded-full bg-muted text-[9px] font-semibold text-foreground">
                              {model === "Gemini 2.5" ? "✦" : model.charAt(0)}
                            </span>
                            {model}
                          </span>
                        ))}
                        <span className="flex size-6 items-center justify-center rounded-full border border-border text-muted-foreground">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-border lg:border-l lg:pl-5">
                    <span className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                      {battle.status}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {battle.date}
                    </span>
                  </div>
                  <div className="min-w-0 border-border lg:border-l lg:pl-5">
                    {battle.winner ? (
                      <>
                        <p className="text-xs text-muted-foreground">Winner</p>
                        <p className="mt-1 truncate text-sm font-medium">
                          {battle.winner}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-xs text-muted-foreground">
                          Progress
                        </p>
                        <p className="mt-1 text-sm font-medium">
                          {battle.progress}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="border-border lg:border-l lg:pl-5">
                    {battle.score ? (
                      <>
                        <p className="text-xs text-muted-foreground">
                          Overall score
                        </p>
                        <p className="mt-1 text-lg font-medium">
                          {battle.score}{" "}
                          <span className="text-sm text-muted-foreground">
                            / 10
                          </span>
                        </p>
                      </>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FontAwesomeIcon icon={faClock} className="size-4" />
                        {battle.progress}
                      </div>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`Open ${battle.title}`}
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
            <span>Showing 4 battles</span>
            <Button variant="outline" size="sm" className="gap-2">
              All battles
              <FontAwesomeIcon icon={faChevronDown} className="size-4" />
            </Button>
          </div>
        </section>
      </div>
      <CreateBattleModal
        open={isCreateBattleOpen}
        workspaceName={workspace.name}
        onClose={() => setIsCreateBattleOpen(false)}
      />
    </>
  );
}
