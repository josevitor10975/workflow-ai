import Link from "next/link";
import { ArrowRight, GitBranch, Plus, Swords, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentBattles = [
  { name: "Landing page comparison", models: "GPT · Claude · Gemini", status: "Completed" },
  { name: "Dashboard architecture", models: "Claude · Gemini", status: "Completed" },
  { name: "Auth flow implementation", models: "GPT · Claude", status: "In review" },
];

export function HomeContent() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-4 md:p-8">
      <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">Workflow AI</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Build better with AI, side by side.</h1>
          <p className="max-w-2xl text-muted-foreground">
            Compare AI models. Evaluate what they build. Continue with what works.
          </p>
        </div>
        <Button render={<Link href="/battles/new" />}>
          <Plus />
          Start a Battle
        </Button>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Workspaces</CardTitle>
            <GitBranch className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">3</p>
            <p className="text-xs text-muted-foreground">Active projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Battles</CardTitle>
            <Swords className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">12</p>
            <p className="text-xs text-muted-foreground">Model comparisons</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Experiments</CardTitle>
            <Zap className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">28</p>
            <p className="text-xs text-muted-foreground">Artifacts preserved</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Recent battles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {recentBattles.map((battle) => (
              <Link
                key={battle.name}
                href="/battles"
                className="flex items-center justify-between rounded-lg px-3 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{battle.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{battle.models}</p>
                </div>
                <span className="ml-4 shrink-0 text-xs text-muted-foreground">{battle.status}</span>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-base">Ready to compare?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-sm text-primary-foreground/80">
              Give multiple models the same task and keep the result that works best for your workflow.
            </p>
            <Button render={<Link href="/battles/new" />} variant="secondary">
              Create your first battle
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
