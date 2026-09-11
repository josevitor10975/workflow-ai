"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submitted:", { name, email, password });
  };

  return (
    <div className="w-full max-w-[360px] flex flex-col">
      {/* Logo */}
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

      {/* Header */}
      <div className="mb-8 space-y-1">
        <h2 className="font-serif text-3xl font-medium text-foreground">
          Create an account
        </h2>
        <p className="text-base font-normal text-muted-foreground">
          Start comparing AI agents today.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-11 rounded-md border-input bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
          />
        </div>

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
          <Label
            htmlFor="password"
            className="text-sm font-medium text-foreground"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Min. 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="h-11 rounded-md border-input bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-11 mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base rounded-md transition-colors shadow-none"
        >
          Create account
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <span className="relative bg-background px-3 text-[11px] font-normal uppercase text-muted-foreground">
          OR
        </span>
      </div>

      {/* Social buttons */}
      <div className="space-y-2.5">
        <Button
          type="button"
          variant="outline"
          className="w-full h-11 bg-background hover:bg-accent text-foreground border-border font-medium text-base rounded-md transition-colors flex items-center justify-center gap-2 shadow-none"
        >
          <svg
            className="h-4 w-4 fill-current text-foreground"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          Continue with GitHub
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full h-11 bg-background hover:bg-accent text-foreground border-border font-medium text-base rounded-md transition-colors flex items-center justify-center gap-2 shadow-none"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </Button>
      </div>

      {/* Footer */}
      <p className="mt-8 text-center text-sm font-normal text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-foreground hover:underline transition-all"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
