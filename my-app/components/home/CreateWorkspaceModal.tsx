"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Code2,
  Folder,
  Image,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const workspaceIcons = [
  { id: "folder", label: "Folder", icon: Folder },
  { id: "code", label: "Code", icon: Code2 },
  { id: "grid", label: "Image", icon: Image },
  { id: "box", label: "Box", icon: Box },
  { id: "sparkles", label: "Sparkles", icon: Sparkles },
];

type CreateWorkspaceModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CreateWorkspaceModal({ open, onClose }: CreateWorkspaceModalProps) {
  const [selectedIcon, setSelectedIcon] = useState("folder");

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 backdrop-blur-[2px]"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-workspace-title"
        className="w-full max-w-lg rounded-xl border bg-background p-7 shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h2 id="create-workspace-title" className="text-2xl font-medium tracking-tight">
              Create workspace
            </h2>
            <p className="max-w-md text-sm leading-5 text-muted-foreground">
              Organize your projects and keep your Battles, results and development in one place.
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="-mr-2 -mt-1 shrink-0"
            aria-label="Close create workspace modal"
            onClick={onClose}
          >
            <X />
          </Button>
        </div>

        <form className="mt-7 space-y-5" onSubmit={(event) => event.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="workspace-name">Name</Label>
            <Input id="workspace-name" placeholder="e.g. SaaS Landing Page" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workspace-description">Description (optional)</Label>
            <textarea
              id="workspace-description"
              placeholder="What are you building? (optional)"
              rows={4}
              className="flex min-h-24 w-full resize-y rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
            />
          </div>

          <div className="space-y-2">
            <Label>Workspace icon</Label>
            <div className="flex gap-2">
              {workspaceIcons.map(({ id, label, icon: Icon }) => {
                const isSelected = selectedIcon === id;

                return (
                  <button
                    key={id}
                    type="button"
                    aria-label={label}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedIcon(id)}
                    className={`flex size-12 items-center justify-center rounded-lg border transition-none ${
                      isSelected
                        ? "border-foreground bg-muted text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Create workspace</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
