import {
  ArrowRight,
  Check,
  GitBranch,
  LayoutGrid,
  Scale,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create a workspace",
    description: "Organize projects, battles, and results in one place.",
    icon: LayoutGrid,
  },
  {
    number: "02",
    title: "Run a battle",
    description: "Compare multiple AI agents on the same task.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Evaluate & choose",
    description: "Review results and select the strongest output.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Ship with GitHub",
    description: "Turn the chosen result into traceable development work.",
    icon: GitBranch,
  },
];

export function AuthRightPanel() {
  return (
    <aside className="relative hidden min-h-full overflow-hidden rounded-lg bg-card text-card-foreground lg:flex lg:flex-col lg:justify-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl"
      />

      <div className="relative px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
        <div className="mb-10 max-w-lg">
          <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-5 bg-border" />
            How it works
          </div>
          <h2 className="max-w-md font-serif text-3xl font-medium leading-tight tracking-tight text-foreground xl:text-4xl">
            From idea to shipped work.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Compare AI outputs, make informed decisions, and turn the best
            result into real development work.
          </p>
        </div>

        <div className="relative max-w-xl">
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-[17px] top-7 w-px bg-border"
          />
          <div className="relative space-y-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.number}
                  className="group relative flex gap-4 rounded-xl py-2.5 transition-colors duration-200 hover:bg-background/60 sm:gap-5 sm:px-3"
                >
                  <div className="relative z-10 flex w-9 shrink-0 justify-center">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border bg-card shadow-sm transition-colors duration-200 ${
                        isLast
                          ? "border-foreground/30 text-foreground"
                          : "border-border text-muted-foreground group-hover:border-foreground/30 group-hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className={`min-w-0 flex-1 ${isLast ? "pb-1" : "pb-5"}`}>
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[10px] font-medium tracking-widest text-muted-foreground/70">
                        {step.number}
                      </span>
                      <h3 className="font-serif text-base font-medium text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 max-w-md text-sm leading-5 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-9 border-t border-border pt-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground">
              <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-serif text-base font-medium text-foreground">
                  More than a benchmark
                </p>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                Compare. Evaluate. Choose. Build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
