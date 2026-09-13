"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faChevronDown,
  faFolder,
  faCircleInfo,
  faLightbulb,
  faPlus,
  faBullseye,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateBranchModal } from "@/components/workspaces/CreateBranchModal";

type CreateBattleModalProps = {
  open: boolean;
  workspaceName: string;
  onClose: () => void;
};
const agents = ["GPT-5.6", "Gemini 2.5", "Claude 4.0", "Kimi K2"];
const agentProviders: Record<string, string> = {
  "GPT-5.6": "OpenAI",
  "Gemini 2.5": "Google",
  "Claude 4.0": "Anthropic",
  "Kimi K2": "Moonshot AI",
};

export function CreateBattleModal({
  open,
  workspaceName,
  onClose,
}: CreateBattleModalProps) {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([
    "GPT-5.6",
    "Gemini 2.5",
    "Claude 4.0",
  ]);
  const [isCreateBranchOpen, setIsCreateBranchOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    const handleNewBranchClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const button = target?.closest("button");
      if (button?.textContent?.trim() === "New branch")
        setIsCreateBranchOpen(true);
    };
    document.addEventListener("click", handleNewBranchClick);
    return () => document.removeEventListener("click", handleNewBranchClick);
  }, []);

  if (!open)
    return (
      <CreateBranchModal
        open={isCreateBranchOpen}
        onClose={() => setIsCreateBranchOpen(false)}
      />
    );

  const toggleAgent = (agent: string) =>
    setSelectedAgents((current) =>
      current.includes(agent)
        ? current.filter((item) => item !== agent)
        : [...current, agent],
    );
  const selectedProviders = Array.from(
    new Set(
      selectedAgents.map((agent) => agentProviders[agent]).filter(Boolean),
    ),
  );
  const providerText =
    selectedProviders.length === 0
      ? "Select agents to see which API keys are required."
      : selectedProviders.length === 1
        ? `Configure your ${selectedProviders[0]} API key to use this agent.`
        : `Configure your ${selectedProviders.join(", ")} API keys to use these agents.`;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/75 p-4 backdrop-blur-sm"
        role="presentation"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="create-battle-title"
          className="grid max-h-[calc(100vh-2rem)] w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-background shadow-2xl md:grid-cols-[1.6fr_.8fr]"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="min-h-0 overflow-y-auto p-6 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  <FontAwesomeIcon icon={faBullseye} className="size-5" />
                </div>
                <div>
                  <h2
                    id="create-battle-title"
                    className="text-xl font-medium tracking-tight"
                  >
                    Create Battle
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    Set up your challenge, choose the agents and let them
                    compete.
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close create battle modal"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </div>
            <form
              className="mt-6 space-y-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="space-y-2">
                <Label htmlFor="battle-workspace">Workspace</Label>
                <button
                  id="battle-workspace"
                  type="button"
                  className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-sm"
                >
                  <span className="flex items-center gap-2 truncate">
                    <FontAwesomeIcon
                      icon={faFolder}
                      className="size-4 text-muted-foreground"
                    />
                    {workspaceName}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="size-4 text-muted-foreground"
                  />
                </button>
                <p className="text-xs text-muted-foreground">
                  The battle will be associated with this workspace.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="battle-name">Battle name</Label>
                <Input
                  id="battle-name"
                  placeholder="e.g. Create the initial landing page"
                />
                <p className="text-xs text-muted-foreground">
                  Give your battle a clear and descriptive name.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="battle-description">
                  Description (optional)
                </Label>
                <textarea
                  id="battle-description"
                  placeholder="Describe the task, context or expected outcome."
                  rows={4}
                  maxLength={500}
                  className="flex min-h-24 w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                />
                <p className="text-right text-xs text-muted-foreground">
                  0/500
                </p>
              </div>
              <div className="border-t border-border pt-5" />
              <div className="space-y-3">
                <div>
                  <Label>Select agents</Label>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The same task will be sent to every selected agent.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                  {agents.map((agent) => {
                    const selected = selectedAgents.includes(agent);
                    return (
                      <button
                        key={agent}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleAgent(agent)}
                        className={`relative flex min-h-20 flex-col items-start justify-between rounded-lg border p-3 text-left ${selected ? "border-foreground bg-muted" : "border-border"}`}
                      >
                        <span className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                          {agent === "Gemini 2.5" ? "✦" : agent.charAt(0)}
                        </span>
                        <span className="text-sm font-medium">{agent}</span>
                        <span
                          className={`absolute right-2 top-2 flex size-4 items-center justify-center rounded-sm border ${selected ? "border-foreground bg-foreground text-background" : "border-input"}`}
                        >
                          {selected && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="size-3"
                            />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="border-t border-border pt-5">
                <Link
                  href="/settings"
                  className="flex items-center justify-between gap-4 rounded-lg border border-border p-4"
                >
                  <div className="min-w-0">
                    <p className="text-base font-medium">Configure API keys</p>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      {providerText} These keys are global and can be reused
                      across your workspaces and battles.
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="size-4 shrink-0 text-muted-foreground"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-end gap-2 border-t border-border pt-5">
                <Button type="button" variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={selectedAgents.length < 2}
                  className="gap-2"
                >
                  <FontAwesomeIcon icon={faPlus} className="size-4" />
                  Create battle
                </Button>
              </div>
            </form>
          </div>
          <aside className="hidden border-l border-border bg-muted/30 p-7 md:block">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="size-4 text-muted-foreground"
              />
              <h3 className="text-sm font-medium">Battle summary</h3>
            </div>
            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faFolder}
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                />
                <div>
                  <p className="text-xs text-muted-foreground">Workspace</p>
                  <p className="mt-1 text-sm font-medium">{workspaceName}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                />
                <div>
                  <p className="text-xs text-muted-foreground">Agents</p>
                  <p className="mt-1 text-sm leading-5">
                    {selectedAgents.join(", ") || "No agents selected"}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-7 border-t border-border" />
            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
              />
              <div>
                <h3 className="text-sm font-medium">Tips</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A good battle has a clear goal, specific instructions and
                  well-defined criteria. This helps the agents produce better
                  results.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-medium text-foreground"
                >
                  Learn more →
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <CreateBranchModal
        open={isCreateBranchOpen}
        onClose={() => setIsCreateBranchOpen(false)}
      />
    </>
  );
}
