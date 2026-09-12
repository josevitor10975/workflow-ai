"use client";

import { useEffect, useState } from "react";
import { Check, LoaderCircle } from "lucide-react";

const STEPS = [
  "Validating your credentials",
  "Creating your workspace",
  "Preparing your work environment",
  "Setting up your resources",
];

export function LoginState() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentStep((step) => (step < STEPS.length ? step + 1 : step));
    }, 1100);

    return () => window.clearInterval(timer);
  }, []);

  const isComplete = currentStep >= STEPS.length;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <section className="w-full max-w-[420px]">
        <div className="mb-10 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
            <span className="text-xs font-medium text-primary-foreground">
              AI
            </span>
          </div>
          <span className="text-base font-medium text-foreground">Workflow.ai</span>
        </div>

        <div className="mb-10 space-y-2">
          <h1 className="font-serif text-3xl font-medium text-foreground">
            {isComplete ? "Your workspace is ready" : "Setting things up"}
          </h1>
          <p className="text-base text-muted-foreground">
            {isComplete
              ? "Everything is ready. You can continue to Workflow AI."
              : "Please wait while we prepare your workspace."}
          </p>
        </div>

        <div className="space-y-1 rounded-lg border border-border bg-background p-4">
          {STEPS.map((step, index) => {
            const completed = currentStep > index;
            const active = currentStep === index;

            return (
              <div
                key={step}
                className="flex min-h-12 items-center gap-3 rounded-md px-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border">
                  {completed ? (
                    <Check
                      className="h-4 w-4 text-foreground"
                      aria-hidden="true"
                    />
                  ) : active ? (
                    <LoaderCircle
                      className="h-4 w-4 animate-spin text-foreground"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <span
                  className={
                    active || completed
                      ? "text-sm text-foreground"
                      : "text-sm text-muted-foreground"
                  }
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>

        {isComplete && (
          <div className="mt-6 rounded-md border border-border px-4 py-3 text-sm text-muted-foreground">
            Login state completed. Navigation to the application will be
            connected when the real authentication flow is implemented.
          </div>
        )}
      </section>
    </main>
  );
}
