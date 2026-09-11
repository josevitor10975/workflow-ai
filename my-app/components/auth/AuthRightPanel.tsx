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
      <style jsx>{`
        @keyframes timeline-enter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes timeline-glow {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.92);
          }
          50% {
            opacity: 0.7;
            transform: scale(1);
          }
        }

        .timeline-step {
          animation: timeline-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .timeline-glow {
          animation: timeline-glow 3.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-step,
          .timeline-glow {
            animation: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 top-1/2 h-32 w-32 rounded-full bg-primary/[0.025] blur-3xl"
      />

      <div className="relative px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
        <div className="mb-9 max-w-lg">
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
            className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-border via-primary/35 to-border"
          />
          <div
            aria-hidden="true"
            className="timeline-glow absolute left-[15px] top-8 h-2 w-2 rounded-full bg-primary/70 blur-[2px]"
          />

          <div className="relative space-y-1">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.number}
                  className="timeline-step group relative flex gap-4 rounded-2xl p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/45 sm:gap-5 sm:p-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10 flex w-9 shrink-0 justify-center">
                    <div
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border bg-card/95 shadow-sm backdrop-blur transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${
                        isLast
                          ? "border-primary/40 text-foreground"
                          : "border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/[0.12] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <Icon
                        className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div
                    className={`min-w-0 flex-1 rounded-xl px-2 py-1 transition-all duration-300 group-hover:translate-x-0.5 ${
                      isLast ? "pb-2" : "pb-5"
                    }`}
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[10px] font-medium tracking-widest text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary/70">
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

        <div className="mt-8 border-t border-border/80 pt-5">
          <div className="group flex items-start gap-3 rounded-xl px-1 py-2 transition-colors duration-300 hover:bg-background/35">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40">
              <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-serif text-base font-medium text-foreground">
                  More than a benchmark
                </p>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
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
