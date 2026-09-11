"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Temporary mock until the authentication backend is implemented.
const MOCK_EXISTING_EMAILS = ["demo@workflow.ai"];

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const emailExists = MOCK_EXISTING_EMAILS.includes(normalizedEmail);

    if (!emailExists) {
      setError("We couldn’t find an account with that email address.");
      setSubmitted(false);
      return;
    }

    setError("");
    setEmail(normalizedEmail);
    setSubmitted(true);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (error) setError("");
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
          Workflow.ai
        </span>
      </div>

      {submitted ? (
        /* Success state */
        <div className="space-y-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>
          <div className="space-y-1 mb-6">
            <h2 className="font-serif text-3xl font-medium text-foreground">
              Check your email
            </h2>
            <p className="text-base font-normal text-muted-foreground">
              We sent a reset link to{" "}
              <span className="font-medium text-foreground">{email}</span>.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive it? Check your spam folder or{" "}
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="font-medium text-foreground hover:underline transition-all"
            >
              try again
            </button>
            .
          </p>
          <div className="pt-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to sign in
            </Link>
          </div>
        </div>
      ) : (
        /* Form state */
        <>
          <div className="mb-8 space-y-1">
            <h2 className="font-serif text-3xl font-medium text-foreground">
              Reset your password
            </h2>
            <p className="text-base font-normal text-muted-foreground">
              Enter your email and we&apos;ll send you a reset link.
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
                onChange={(e) => handleEmailChange(e.target.value)}
                required
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "email-error" : undefined}
                className={`h-11 rounded-md bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 ${
                  error ? "border-destructive focus-visible:ring-destructive" : "border-input"
                }`}
              />
              {error && (
                <p
                  id="email-error"
                  role="alert"
                  className="text-sm text-destructive pt-1"
                >
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-11 mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base rounded-md transition-colors shadow-none"
            >
              Send reset link
            </Button>
          </form>

          <p className="mt-8 text-center text-sm font-normal text-muted-foreground">
            Remembered your password?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground hover:underline transition-all"
            >
              Sign in
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
