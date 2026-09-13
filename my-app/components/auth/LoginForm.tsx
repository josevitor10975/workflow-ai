"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-[360px] flex flex-col">
      <div className="mb-10 flex items-center gap-2">
        <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-xs font-medium">
            AI
          </span>
        </div>
        <span className="text-base font-medium text-foreground">
          Workflow AI
        </span>
      </div>
      <div className="mb-8 space-y-1">
        <h2 className="font-serif text-3xl font-medium text-foreground">
          Welcome back
        </h2>
        <p className="text-base font-normal text-muted-foreground">
          Sign in to continue.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11 rounded-md border-input bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-11 rounded-md border-input bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
          />
        </div>
        <Button
          type="submit"
          className="mt-2 h-11 w-full rounded-md bg-primary text-base font-medium text-primary-foreground shadow-none transition-colors hover:bg-primary/90"
        >
          Sign in
        </Button>
      </form>
      <div className="relative my-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <span className="relative bg-background px-3 text-[11px] font-normal uppercase text-muted-foreground">
          OR
        </span>
      </div>
      <div className="space-y-2.5">
        <Button
          type="button"
          variant="outline"
          className="h-11 w-full rounded-md border-border bg-background text-sm font-medium text-foreground shadow-none transition-colors hover:bg-accent"
        >
          <FontAwesomeIcon icon={faGithub} className="size-4" />
          Continue with GitHub
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-11 w-full rounded-md border-border bg-background text-sm font-medium text-foreground shadow-none transition-colors hover:bg-accent"
        >
          <FontAwesomeIcon icon={faGoogle} className="size-4" />
          Continue with Google
        </Button>
      </div>
      <p className="mt-8 text-center text-sm font-normal text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-foreground hover:underline transition-all"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
