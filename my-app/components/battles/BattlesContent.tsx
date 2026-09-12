import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCode,
  faFileLines,
  faFolder,
  faEllipsis,
  faMagnifyingGlass,
  faGear,
  faMobileScreenButton,
  faSparkles,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const battles = [
  { name: "SaaS Landing Page", id: "#btl-001", created: "2 days ago", models: ["GPT-4o", "Claude 3.5", "Gemini 1.5", "Llama 3"], workspace: "SaaS Landing Page", status: "Completed", statusDetail: "2 days ago", progress: "100%", score: "8.9 / 10", icon: faSparkles },
  { name: "API Architecture", id: "#btl-002", created: "4 days ago", models: ["GPT-4o", "Claude 3.5", "Gemini 1.5"], workspace: "E-commerce Dashboard", status: "Running", statusDetail: "~ 8 min left", progress: "67%", score: "—", icon: faFileLines },
  { name: "Mobile App UI", id: "#btl-003", created: "1 week ago", models: ["GPT-4o", "Claude 3.5", "Gemini 1.5"], workspace: "Mobile App UI", status: "Queued", statusDetail: "Waiting for execution", progress: "0%", score: "—", icon: faMobileScreenButton },
  { name: "Documentation Generator", id: "#btl-004", created: "1 week ago", models: ["Claude 3.5", "Gemini 1.5"], workspace: "API Documentation", status: "Completed", statusDetail: "1 week ago", progress: "100%", score: "8.2 / 10", icon: faFileLines },
  { name: "Code Refactoring", id: "#btl-005", created: "1 week ago", models: ["GPT-4o", "Claude 3.5", "Gemini 1.5", "Llama 3"], workspace: "Legacy Codebase", status: "Failed", statusDetail: "2 days ago", progress: "25%", score: "—", icon: faGear },
  { name: "Feature Implementation", id: "#btl-006", created: "2 weeks ago", models: ["GPT-4o", "Claude 3.5", "Gemini 1.5"], workspace: "SaaS Platform", status: "Cancelled", statusDetail: "User stopped", progress: "0%", score: "—", icon: faCode },
];

function ProgressRing({ value }: { value: string }) {
  const numericValue = Number.parseInt(value, 10);
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (numericValue / 100) * circumference;
  return <div className="relative flex size-14 items-center justify-center"><svg className="absolute inset-0 size-14 -rotate-90" viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r={radius} fill="none" stroke="currentColor" strokeWidth="4" className="text-muted-foreground/20" /><circle cx="28" cy="28" r={radius} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className="text-foreground" /></svg><span className="relative text-sm font-semibold">{value}</span></div>;
}

export function BattlesContent() {
  return <main className="flex flex-1 flex-col px-4 py-8 md:px-8 md:py-12 lg:px-14"><div className="mx-auto w-full max-w-[1400px]">
    <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between"><section className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Battles</p><h1 className="mt-2 text-4xl font-medium tracking-tight md:text-5xl">Recent Battles</h1><p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">Track and manage your latest AI experiments. Compare results, evaluate artifacts and choose the best outcome for your workflow.</p></section><div className="flex flex-col gap-3 sm:flex-row xl:pb-1"><div className="relative w-full sm:w-64"><FontAwesomeIcon icon={faMagnifyingGlass} className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search battles..." className="pl-9" /></div><Button variant="outline" className="justify-start sm:w-48"><FontAwesomeIcon icon={faFolder} />All workspaces</Button></div></div>
    <div className="mt-10 hidden grid-cols-[1.55fr_1.2fr_1fr_0.85fr_1fr_36px] gap-4 px-4 text-sm font-medium text-muted-foreground xl:grid"><span>Battle</span><span>Workspace</span><span>Models</span><span>Status</span><span>Progress / Score</span><span>Actions</span></div>
    <section className="mt-3 space-y-2">{battles.map((battle) => <Card key={battle.id} className="overflow-hidden"><CardContent className="grid items-center gap-5 p-4 xl:grid-cols-[1.55fr_1.2fr_1fr_0.85fr_1fr_36px]"><div className="flex min-w-0 items-center gap-4"><span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground"><FontAwesomeIcon icon={battle.icon} className="size-5" /></span><div className="min-w-0"><h2 className="truncate text-base font-semibold">{battle.name}</h2><p className="mt-1 text-sm text-muted-foreground">{battle.id}</p><p className="mt-1 text-sm text-muted-foreground">Created {battle.created} · {battle.models.length} models</p></div></div><div className="min-w-0"><div className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faFolder} className="size-4 shrink-0 text-muted-foreground" /><span className="truncate">{battle.workspace}</span></div><p className="mt-1 pl-6 text-sm text-muted-foreground">1 battle</p></div><div className="space-y-1">{battle.models.map((model) => <p key={model} className="flex items-center gap-2 text-sm"><span className="flex size-4 shrink-0 items-center justify-center rounded bg-muted text-[9px] font-semibold text-foreground">{model === "Gemini 1.5" ? "G" : "AI"}</span>{model}</p>)}</div><div><span className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground">{battle.status}</span><p className="mt-2 text-sm text-muted-foreground">{battle.statusDetail}</p></div><div className="flex items-center gap-4"><ProgressRing value={battle.progress} /><div className="hidden min-w-0 sm:block"><p className="text-sm text-muted-foreground">Best result</p>{battle.score !== "—" ? <><p className="mt-1 text-sm font-medium">Claude 3.5</p><p className="mt-1 text-sm font-semibold">{battle.score}</p></> : <p className="mt-1 text-sm text-muted-foreground">—</p>}</div></div><Button variant="ghost" size="icon" className="hidden xl:inline-flex" aria-label={`Actions for ${battle.name}`}><FontAwesomeIcon icon={faEllipsis} /></Button><div className="flex flex-wrap gap-3 border-t pt-4 xl:hidden"><span className="rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground">{battle.status}</span><span className="text-sm text-muted-foreground">{battle.models.length} models</span><span className="text-sm text-muted-foreground">{battle.progress} progress</span></div></CardContent></Card>)}</section>
    <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground"><span>Showing 6 of 6 battles</span><div className="flex items-center gap-1"><Button variant="outline" size="icon" disabled aria-label="Previous page"><FontAwesomeIcon icon={faChevronLeft} /></Button><Button variant="outline" size="icon" aria-label="Page 1">1</Button><Button variant="outline" size="icon" aria-label="Next page"><FontAwesomeIcon icon={faChevronRight} /></Button></div></div>
  </div></main>;
}
