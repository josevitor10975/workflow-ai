export function AuthRightPanel() {
  return (
    <div className="bg-card text-card-foreground hidden lg:flex flex-col justify-center p-8 sm:p-12 lg:p-16 order-2 rounded-lg overflow-hidden relative">
      {/* Label */}
      <p className="text-xs font-semibold uppercase text-muted-foreground mb-10 tracking-widest">
        How it works
      </p>

      {/* Steps */}
      <div className="flex flex-col gap-0">
        {/* Step 1 */}
        <div className="flex gap-5 relative">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-7 h-7 rounded-full border border-border bg-background text-foreground text-xs font-medium shrink-0 z-10">
              1
            </div>
            <div className="w-px flex-1 bg-border mt-1 mb-1" />
          </div>
          <div className="pb-8 pt-0.5">
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="h-4 w-4 text-muted-foreground shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                <path d="M16 3v4M8 3v4" />
              </svg>
              <p className="text-sm font-semibold text-foreground">
                Create a workspace
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Organize your projects and keep your battles, results and
              development in one place.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-5 relative">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-7 h-7 rounded-full border border-border bg-background text-foreground text-xs font-medium shrink-0 z-10">
              2
            </div>
            <div className="w-px flex-1 bg-border mt-1 mb-1" />
          </div>
          <div className="pb-8 pt-0.5">
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="h-4 w-4 text-muted-foreground shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
              </svg>
              <p className="text-sm font-semibold text-foreground">
                Run a battle
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Select multiple AI agents, send the same briefing and compare
              their results side by side.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-5 relative">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-7 h-7 rounded-full border border-border bg-background text-foreground text-xs font-medium shrink-0 z-10">
              3
            </div>
            <div className="w-px flex-1 bg-border mt-1 mb-1" />
          </div>
          <div className="pb-8 pt-0.5">
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="h-4 w-4 text-muted-foreground shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className="text-sm font-semibold text-foreground">
                Evaluate &amp; choose
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analyze results with detailed criteria. Pick the best output and
              continue where it matters.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-5 relative">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-7 h-7 rounded-full border border-border bg-background text-foreground text-xs font-medium shrink-0 z-10">
              4
            </div>
          </div>
          <div className="pb-2 pt-0.5">
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="h-4 w-4 text-muted-foreground shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <p className="text-sm font-semibold text-foreground">
                Ship with GitHub
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Turn your chosen result into a real project. We handle branches,
              commits and keep your workflow smooth.
            </p>
          </div>
        </div>
      </div>

      {/* Footer highlight */}
      <div className="mt-10 pt-8 border-t border-border flex items-start gap-3">
        <svg
          className="h-4 w-4 text-primary mt-0.5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <div>
          <p className="text-sm font-semibold text-foreground">
            More than a benchmark
          </p>
          <p className="text-sm text-muted-foreground mt-0.5">
            It&apos;s your AI development workflow. Compare, evaluate and build
            — faster.
          </p>
        </div>
      </div>
    </div>
  );
}
