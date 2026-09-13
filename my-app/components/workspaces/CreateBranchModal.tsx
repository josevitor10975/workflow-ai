"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faChevronDown,
  faFileLines,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Artifact = {
  id: string;
  name: string;
  model: string;
  battle: string;
  score: string;
};

type CreateBranchModalProps = {
  open: boolean;
  onClose: () => void;
  artifacts?: Artifact[];
  onCreate?: (branch: {
    name: string;
    base: string;
    artifact?: Artifact;
  }) => void;
};

const defaultArtifacts: Artifact[] = [
  {
    id: "#001-A",
    name: "Initial landing page",
    model: "Claude 4.0",
    battle: "Battle #001",
    score: "9.2",
  },
  {
    id: "#002-A",
    name: "Pricing section",
    model: "Gemini 2.5",
    battle: "Battle #002",
    score: "8.7",
  },
  {
    id: "#001-B",
    name: "Alternative landing page",
    model: "GPT-5.6",
    battle: "Battle #001",
    score: "8.9",
  },
];

export function CreateBranchModal({
  open,
  onClose,
  artifacts = defaultArtifacts,
  onCreate,
}: CreateBranchModalProps) {
  const [branchName, setBranchName] = useState("");
  const [baseBranch, setBaseBranch] = useState("main");
  const [selectedArtifactId, setSelectedArtifactId] = useState("");
  const [baseOpen, setBaseOpen] = useState(false);
  const [artifactOpen, setArtifactOpen] = useState(false);

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
    if (open) return;
    setBaseOpen(false);
    setArtifactOpen(false);
  }, [open]);

  if (!open) return null;

  const selectedArtifact = artifacts.find(
    (artifact) => artifact.id === selectedArtifactId,
  );

  const canCreate = branchName.trim().length > 0;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canCreate) return;

    onCreate?.({
      name: branchName.trim(),
      base: baseBranch,
      artifact: selectedArtifact,
    });
    onClose();
  };

  return (
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
        aria-labelledby="create-branch-title"
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                <FontAwesomeIcon icon={faCodeBranch} className="size-5" />
              </div>
              <div>
                <h2
                  id="create-branch-title"
                  className="text-xl font-medium tracking-tight"
                >
                  Create new branch
                </h2>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  Create a development branch for this workspace.
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close create branch modal"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="branch-name">Branch name</Label>
              <Input
                id="branch-name"
                value={branchName}
                onChange={(event) => setBranchName(event.target.value)}
                placeholder="e.g. feature/pricing"
                autoComplete="off"
              />
              <p className="text-xs text-muted-foreground">
                Use a descriptive name such as feature/auth or feature/dashboard.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch-base">Create from</Label>
              <div className="relative">
                <button
                  id="branch-base"
                  type="button"
                  aria-expanded={baseOpen}
                  onClick={() => {
                    setBaseOpen((current) => !current);
                    setArtifactOpen(false);
                  }}
                  className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-sm"
                >
                  <span>{baseBranch}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="size-4 text-muted-foreground"
                  />
                </button>
                {baseOpen && (
                  <div className="absolute z-10 mt-1 w-full rounded-md border border-border bg-popover p-1 shadow-lg">
                    {["main"].map((branch) => (
                      <button
                        key={branch}
                        type="button"
                        onClick={() => {
                          setBaseBranch(branch);
                          setBaseOpen(false);
                        }}
                        className="flex w-full items-center rounded-sm px-3 py-2 text-left text-sm hover:bg-muted"
                      >
                        {branch}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="branch-artifact">Associated artifact</Label>
                <span className="text-xs text-muted-foreground">Optional</span>
              </div>
              <div className="relative">
                <button
                  id="branch-artifact"
                  type="button"
                  aria-expanded={artifactOpen}
                  onClick={() => {
                    setArtifactOpen((current) => !current);
                    setBaseOpen(false);
                  }}
                  className="flex min-h-9 w-full items-center justify-between gap-3 rounded-md border border-input bg-background px-3 py-2 text-left text-sm"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="size-4 shrink-0 text-muted-foreground"
                    />
                    <span className="truncate">
                      {selectedArtifact
                        ? `${selectedArtifact.name} · ${selectedArtifact.model}`
                        : "Select an artifact..."}
                    </span>
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="size-4 shrink-0 text-muted-foreground"
                  />
                </button>
                {artifactOpen && (
                  <div className="absolute z-10 mt-1 max-h-64 w-full overflow-y-auto rounded-md border border-border bg-popover p-1 shadow-lg">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedArtifactId("");
                        setArtifactOpen(false);
                      }}
                      className="w-full rounded-sm px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted"
                    >
                      No artifact
                    </button>
                    {artifacts.map((artifact) => (
                      <button
                        key={artifact.id}
                        type="button"
                        onClick={() => {
                          setSelectedArtifactId(artifact.id);
                          setArtifactOpen(false);
                        }}
                        className="flex w-full flex-col rounded-sm px-3 py-2 text-left hover:bg-muted"
                      >
                        <span className="text-sm font-medium">{artifact.name}</span>
                        <span className="mt-0.5 text-xs text-muted-foreground">
                          {artifact.model} · {artifact.battle} · {artifact.score} / 10
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs font-medium text-muted-foreground">Branch preview</p>
              <div className="mt-3 text-sm">
                <p className="font-medium">{baseBranch}</p>
                <p className="mt-1 pl-4 text-muted-foreground">
                  └── {branchName.trim() || "feature/your-branch"}
                </p>
                {selectedArtifact && (
                  <p className="mt-1 pl-8 text-xs text-muted-foreground">
                    Artifact {selectedArtifact.id} · {selectedArtifact.name}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-border pt-5">
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={!canCreate} className="gap-2">
                <FontAwesomeIcon icon={faCodeBranch} className="size-4" />
                Create branch
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
