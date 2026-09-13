import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faCodeBranch,
  faScaleBalanced,
  faTableCellsLarge,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    number: "01",
    title: "Create a workspace",
    description: "Organize projects, battles, and results in one place.",
    icon: faTableCellsLarge,
  },
  {
    number: "02",
    title: "Run a battle",
    description: "Compare multiple AI agents on the same task.",
    icon: faWandMagicSparkles,
  },
  {
    number: "03",
    title: "Evaluate & choose",
    description: "Review results and select the strongest output.",
    icon: faScaleBalanced,
  },
  {
    number: "04",
    title: "Ship with GitHub",
    description: "Turn the chosen result into traceable development work.",
    icon: faCodeBranch,
  },
];

export function AuthRightPanel() {
  return (
    <aside className="relative hidden min-h-full overflow-hidden rounded-lg bg-card text-card-foreground lg:flex lg:flex-col lg:justify-center">
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
          <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight text-foreground xl:text-4xl">
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
          <div className="relative space-y-1">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <div
                  key={step.number}
                  className="relative flex gap-4 rounded-2xl p-2.5 sm:gap-5 sm:p-3"
                >
                  <div className="relative z-10 flex w-9 shrink-0 justify-center">
                    <div
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border bg-card/95 shadow-sm backdrop-blur ${isLast ? "border-primary/40 text-foreground" : "border-border text-muted-foreground"}`}
                    >
                      <FontAwesomeIcon icon={step.icon} className="size-4" />
                    </div>
                  </div>
                  <div
                    className={`min-w-0 flex-1 rounded-xl px-2 py-1 ${isLast ? "pb-2" : "pb-5"}`}
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[10px] font-medium tracking-widest text-muted-foreground/60">
                        {step.number}
                      </span>
                      <h3 className="text-base font-medium text-foreground">
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
          <div className="flex items-start gap-3 rounded-xl px-1 py-2">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground">
              <FontAwesomeIcon icon={faCheck} className="size-3.5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-base font-medium text-foreground">
                  More than a benchmark
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="size-3.5 text-muted-foreground"
                />
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
