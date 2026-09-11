# Workflow AI

> Compare AI models. Evaluate what they build. Continue with what works.

[![Status](https://img.shields.io/badge/status-early%20stage-yellow)]()
[![Version](https://img.shields.io/badge/version-v0.1-blue)]()
[![Stage](https://img.shields.io/badge/stage-MVP-orange)]()
[![License](https://img.shields.io/badge/license-TBD-lightgrey)]()

Workflow AI is a product in early development. It explores a structured way to run the same task across multiple AI models, compare what they actually produce, evaluate the results, and carry the one that works forward into a development workflow.

This is not a finished platform — it's a concept being built and validated one core loop at a time, currently at `v0.1` / MVP.

---

## Table of Contents

- [What is Workflow AI?](#what-is-workflow-ai)
- [The Problem](#the-problem)
- [How It Works](#how-it-works)
- [Core Concepts](#core-concepts)
- [What Makes This Different](#what-makes-this-different)
- [Artifacts](#artifacts)
- [Evaluation & Ranking](#evaluation--ranking)
- [From Battle to Development](#from-battle-to-development)
- [Specification-Driven Agentic Development with Human-in-the-Loop](#specification-driven-agentic-development-with-human-in-the-loop)
- [Current MVP (v0.1)](#current-mvp-v01)
- [Architecture](#architecture)
- [Roadmap](#roadmap)
- [Product Specification](#product-specification)
- [License](#license)

---

## What is Workflow AI?

AI models can produce meaningfully different results on the same task. Right now, comparing them means manually switching providers, repeating the same prompt, inspecting each response, and deciding by hand which one is worth keeping.

Workflow AI is an attempt to turn that manual process into a structured workflow: define a task once, run it across several models under the same conditions, compare what each one actually built, and choose which result to continue developing.

## The Problem

<img width="2280" height="448" alt="Gemini_Generated_Image_1c0on01c0on01c0o" src="https://github.com/user-attachments/assets/ae545d66-111b-4f2b-82db-5e45fd3c9016" />

This works for a single quick comparison, but it doesn't scale — repeating it across models and tasks is tedious, undocumented, and easy to do inconsistently. Workflow AI proposes a structured pipeline instead:

```text
Workspace → Battle → Same Task → Multiple AI Models
   → Artifacts → Evaluation → Ranking → Select Result → Continue Development
```

## How It Works

The core loop the MVP is built around:

<img width="1917" height="544" alt="Gemini_Generated_Image_cuxhobcuxhobcuxh" src="https://github.com/user-attachments/assets/6544d890-86e6-46b6-a2a3-a40a5fa9bde4" />

A user creates a **Workspace**, configures the AI providers they want to use, and starts a **Battle** — the same task briefing sent to several models at once. Each model produces its own independent **Artifact**. The user compares the artifacts, scores them against a set of criteria, and picks the one to move forward with.

## Core Concepts

| Concept | Description |
| --- | --- |
| **User** | Creates workspaces, configures providers, runs Battles, evaluates and selects artifacts. |
| **Provider** | An AI service (OpenAI, Anthropic, Google, xAI) configured at the account level. Credentials are not duplicated across workspaces. |
| **Model** | A specific model exposed by a Provider (e.g. GPT, Claude, Gemini). The Battle UI focuses on Models while showing the associated Provider. |
| **Workspace** | A project/development environment. In `v0.1`, each Workspace contains one Battle — the architecture is meant to support multiple Battles per Workspace later. |
| **Battle** | A controlled experiment: multiple models receive the same task under the same conditions, each producing an independent artifact. |
| **Artifact** | The result produced by a model — code, files, UI, documentation, text, configuration, or project structure. |
| **Evaluation** | Scores an artifact (0–10) against configurable criteria. |
| **Ranking** | Orders artifacts by evaluation score **within a given Battle** — not a universal AI ranking. |
| **Main Artifact** | The artifact selected as the Workspace's primary result. The top-scoring artifact is recommended, but the user can override it. |
| **Experiment** | Non-selected artifacts, preserved so alternative approaches aren't lost. |

<img width="2280" height="448" alt="Gemini_Generated_Image_b5p67ub5p67ub5p6" src="https://github.com/user-attachments/assets/a73bc344-a0bf-4186-b1dc-02a1756eec16" />

## What Makes This Different

Workflow AI isn't trying to answer:

> "Which AI is the best?"

There isn't a universally "best" model — performance depends on the task, the prompt, the constraints, and the criteria used to judge the result. So the question the product is actually built around is:

> "Which model produced the best result for this task, under the criteria I defined?"

A Ranking is a result **within one Battle**, not a claim about model quality in general. The user always makes the final call — the system can recommend an artifact, but it never decides on the user's behalf.

## Artifacts

An Artifact is what a model actually produced during a Battle — not just its text response. Depending on the task, that can be:

- source code
- files
- a UI
- documentation
- configuration
- a project structure
- other generated output

Workflow AI is built around comparing artifacts directly — viewing the generated result, side by side across models, rather than reading through each model's written explanation of what it did.

## Evaluation & Ranking

The MVP starts with **manual evaluation**: a user scores each artifact (0–10) against a set of configurable criteria, for example:

```text
Quality
Precision
UX / UI
Code Quality
Performance
Requirements
```

Workflow AI then produces a **Ranking** — an ordering of artifacts by score, scoped to that Battle. The highest-scoring artifact can be presented as a recommendation, but selecting a different one is always available to the user.

Later stages may combine manual scoring with other signals:

```text
Human Evaluation + Automated Tests + AI Evaluation + Objective Metrics
```

One direction being considered is **AI Judges** — one model evaluating another's artifact. Multiple judges can help distribute evaluator bias across a Battle, but they don't eliminate it, so the system is meant to keep objective metrics, human evaluation, and AI evaluation clearly distinguished rather than blended into a single opaque score.

## From Battle to Development

Comparison is meant to lead somewhere — the long-term flow connects a Battle to an actual codebase:

<img width="2280" height="448" alt="Gemini_Generated_Image_o2afw4o2afw4o2af" src="https://github.com/user-attachments/assets/b6883649-b215-4ced-b132-55e3e1e58d4f" />

Artifacts that aren't selected don't disappear — they're preserved as **Experiments**, so an alternative approach can be revisited later instead of being discarded the moment one artifact is chosen.

A direction under consideration for representing this in Git is isolating each model's approach on its own branch:

```text
master
├── agent/claude
├── agent/gemini
└── agent/gpt
```

This is a way to represent AI experiments in version control — Git branches are a representation of that process, not the primary domain model of the application. The Battle/Artifact/Evaluation structure described above is what Workflow AI is actually built around.

## Specification-Driven Agentic Development with Human-in-the-Loop

Workflow AI is also being developed using a **Specification-Driven Agentic Development with Human-in-the-Loop** methodology.

The development process treats AI agents as specialized engineering participants rather than autonomous decision-makers. Work is first analyzed and specified, then implemented by an agent, technically reviewed, corrected when necessary, and only integrated after human approval.

The methodology is built around three principles:

1. **Specification-driven** — implementation starts from a clear technical specification that defines the problem, expected behavior, requirements, constraints, architecture, acceptance criteria, and tests.
2. **Agentic** — AI agents are assigned specialized responsibilities within the development process instead of treating one model as responsible for everything.
3. **Human-in-the-loop** — architectural decisions, quality control, and final integration remain under human responsibility. AI output is never considered automatically correct.

### Development Structure

The repository keeps the process traceable through documentation and Git:

```text
docs/
├── requirements/
│   ├── 001-feature-x.md
│   ├── 002-feature-y.md
│   └── 003-feature-z.md
│
├── reviews/
│   ├── 001-feature-x-review.md
│   └── 002-feature-y-review.md
│
└── architecture/
    └── ...
```

A requirement/specification describes what should be built and how it should behave. A review records what was actually delivered, what was missed, which issues were found, and whether the implementation is ready for human approval.

### Roles

| Role | Responsibility |
| --- | --- |
| **Human — José Vitor** | Project owner and final decision-maker. Defines goals, validates requirements, reviews proposed changes, approves or rejects implementations, and controls what reaches `master`. |
| **ChatGPT** | Planning, architecture, technical specifications, documentation, task decomposition, acceptance criteria, test strategy, code review, risk analysis, and technical validation. |
| **Gemini** | Primary implementation agent. Turns approved specifications into code, modifies the necessary files, implements features, fixes identified issues, and prepares commits for review. |
| **GitHub** | Source of truth for version control, branches, commits, pull requests, history, and integration. |

### Feature Development Cycle

Each feature or significant change follows a controlled cycle. Features are developed incrementally, one cycle at a time:

<img width="1024" height="1536" alt="ChatGPT Image 11 de set  de 2026, 10_45_39" src="https://github.com/user-attachments/assets/f53dda28-20fa-4fa3-a429-6a99eb3a9bc3" />

In practice, the cycle is:

<img width="1024" height="1536" alt="ChatGPT Image 11 de set  de 2026, 10_49_02" src="https://github.com/user-attachments/assets/97b2f1e4-b1c5-4276-b492-bb5c5b727683" />

### Branch Policy

The default integration branch is `master`.

Agent implementation work is performed on an isolated working branch, currently `branch-for-agents`, unless a task explicitly requires another branch strategy.

The main branch must not receive unreviewed AI-generated changes. A change should reach `master` only after:

1. the requirement is clearly defined;
2. the implementation has been completed;
3. the implementation has been technically reviewed;
4. identified issues have been resolved;
5. the human coordinator has approved the change.

### Division of Work

The project intentionally separates **planning/review** from **implementation**:

<img width="1024" height="1536" alt="ChatGPT Image 11 de set  de 2026, 10_51_44" src="https://github.com/user-attachments/assets/7e08cdc9-4466-4bdd-a111-57f22b6fcdb0" />

This separation reduces duplicated work and makes responsibilities explicit. ChatGPT should not unnecessarily reimplement a feature that Gemini is responsible for coding, while Gemini should not be treated as the final authority for architecture or integration decisions.

### Engineering Principles

The AI-assisted process follows the same engineering principles expected from a conventional software development workflow:

- Understand the problem before implementing.
- Prefer simple and maintainable solutions.
- Avoid unnecessary abstractions and complexity.
- Preserve existing behavior unless a change is intentional.
- Review for bugs, logic errors, coupling, duplication, security issues, and performance problems.
- Define acceptance criteria before considering a task complete.
- Test important behavior rather than relying only on visual or superficial validation.
- Keep changes isolated and traceable through Git.
- Never treat AI-generated code as automatically correct.
- Human approval is required before integration into `master`.

This section describes the **development methodology used to build the repository**, not a runtime workflow or feature of the Workflow AI application itself.

## Current MVP (v0.1)

The current stage focuses on validating the core loop end to end, not on the full long-term vision. What's in scope for `v0.1`:

- Authentication
- Provider connections
- Workspace creation
- Battle creation
- Model selection
- Same-task execution across models
- Battle Room (execution monitoring)
- Artifact visualization
- Manual evaluation
- Ranking
- Artifact selection
- Main Artifact
- Experiment preservation
- Initial GitHub integration

**Explicitly out of scope for now:**

- MCP integration
- Advanced AI agent skills
- Complex agent orchestration
- Fully automated benchmarking
- Sophisticated AI judge systems
- Advanced team collaboration

## Architecture

<img width="1392" height="768" alt="Gemini_Generated_Image_t59pb3t59pb3t59p" src="https://github.com/user-attachments/assets/d7cb9d3f-130d-4936-9b43-5ef2b3e36961" />

**Frontend:** React · Next.js · TypeScript · Tailwind CSS · shadcn/ui
**Backend:** Node.js · NestJS · TypeScript
**Database:** PostgreSQL · Prisma ORM
**Auth:** JWT · OAuth providers
**AI Integration:** Provider-specific adapters behind a common abstraction layer, so adding a new provider doesn't require rewriting the Battle system.

**Provider credentials are configured once at the account level, not duplicated per workspace:**

<img width="1394" height="768" alt="Gemini_Generated_Image_oc7xooc7xooc7xoo" src="https://github.com/user-attachments/assets/248c5480-c482-4b8c-9f2c-3a147d320026" />

At Battle creation, the user selects **Models** — the associated Provider is shown alongside each one. If a required provider isn't connected yet, the user can connect it from that screen without leaving the Battle creation flow or pasting an API key directly into the Battle form:

```text
GPT      · OpenAI    · Connected
Claude   · Anthropic · Connected
Gemini   · Google    · Not connected [Connect]
```

## Roadmap

This is a direction, not a commitment — later stages depend on what the MVP validates.

**v0.1 — Core MVP** _(current)_
Authentication, provider connections, Workspace/Battle creation, model selection, same-task execution, Battle Room, artifact visualization, manual evaluation, ranking, artifact selection, Main Artifact, experiment preservation, initial GitHub integration.

**v0.2 — Evaluation**
Automated evaluation, AI Judges, objective metrics, evaluation consensus, advanced artifact comparison, Battle history and analytics.

**v0.3 — Development Workflow**
Agent branches, artifact-to-branch synchronization, GitHub pull request workflow, versioned experiments, re-running previous Battles.

**v0.4 — Collaboration**
Team Workspaces, roles and permissions, shared Battles, organization management, usage controls, audit logs.

---

## Product Specification

The sections below document the current technical specification in more detail. This is implementation-level detail for `v0.1` — the product narrative above is what Workflow AI is meant to be; this section is how it's currently built.

<details>
<summary><strong>Functional Requirements</strong></summary>

**RF01 — User Registration**
The system must allow users to create an account.

**RF02 — Authentication**
Users must be able to sign in, sign out, maintain an authenticated session, and recover access when applicable. Supported providers: Email/password, GitHub, Google.

**RF03 — Provider Management**
Users must be able to add, validate, view the status of, remove, and manage multiple provider credentials. API keys must not be unnecessarily exposed to the frontend, and stored credentials must be protected.

**RF04 — Workspace Management**
Create, view, open, edit, and delete Workspaces. A Workspace belongs to exactly one User.

**RF05 — Battle Creation**
A Battle within a Workspace must contain: name, description, task briefing, selected models, evaluation configuration, and execution settings.

**RF06 — Model Selection**
Users select multiple models per Battle; each displays its Provider and connection status. If a required provider isn't connected, the user can connect it without leaving the Battle creation flow.

**RF07 — Battle Execution**
Executes the same task against each selected model, independently. Records: Provider, Model, start/end time, status, input/output/total tokens, cost, latency, and errors.
Statuses: `Queued` · `Running` · `Completed` · `Failed`

**RF08 — Battle Room**
Real-time monitoring: selected models, execution status, progress, elapsed time, completed/failed models, and errors.

**RF09 — Artifact Visualization**
Inspect the actual generated artifact (code, files, interfaces, documentation, text, structures), with side-by-side comparison where applicable.

**RF10 — Manual Evaluation**
Configurable criteria (Quality, Precision, UX/UI, Code Quality, Performance, Requirements) scored 0–10.

**RF11 — Ranking**
Displays Artifact, Model, Provider, total score, per-criterion scores, and relevant execution metrics.

**RF12 — Artifact Selection**
Users select an artifact post-evaluation; the top-scoring one is recommended but can be overridden.

**RF13 — Artifact Preservation**
Artifacts remain accessible after a Battle ends — losing results are never auto-discarded.

**RF14 — Main Artifact**
The selected artifact can become the Workspace's Main Artifact, representing the result chosen for continued development.

**RF15 — Experiments**

```text
Workspace
├── Main
└── Experiments
    ├── Claude
    ├── Gemini
    └── GPT
```

**RF16 — GitHub Integration**
Connect GitHub, select a repository/branch, export an artifact, and continue development from it:

```text
Battle → Evaluate → Select Artifact → Main Artifact → GitHub Repository → Development
```

</details>

<details>
<summary><strong>Metrics</strong></summary>

| Category | Fields |
| --- | --- |
| **Tokens** | Input, Output, Total |
| **Cost** | Calculated per Provider/Model pricing |
| **Latency** | Start time, End time, Execution duration |
| **Tool Calls** _(future)_ | Number and type of tools invoked by an AI agent |

Token count is not treated as equivalent to cost — cost depends on the specific provider and model pricing, along with factors like caching, and must be calculated accordingly rather than derived from token count alone.

</details>

<details>
<summary><strong>Data Model</strong></summary>

```text
User
 ├── ProviderConnection
 └── Workspace
       └── Battle
             ├── Artifact
             └── Evaluation
```

Core entities: `User` · `Provider` · `Model` · `ProviderConnection` · `Workspace` · `Battle` · `Artifact` · `Evaluation`

</details>

<details>
<summary><strong>Application Screens</strong></summary>

**Navigation:** Home · Workspaces · Battles · History · Settings · Profile / Logout

- **Login** — Email/password, GitHub, Google auth, account creation, password recovery
- **Home** — Welcome, Create Workspace, recent Workspaces/Battles
- **Workspaces** — Search, create, open, edit, delete
- **Workspace** — Overview, Battles, Artifacts, Experiments, Settings
- **Create Battle** — Battle Info → Task Briefing → Select Models → Evaluation Criteria → Advanced Settings → Create
- **Battle Room** — Real-time execution view
- **Battle Results** — Artifacts, comparison, evaluations, metrics, ranking, recommended artifact, selection
- **Settings** — General, Providers, GitHub, Security

</details>

<details>
<summary><strong>Security Requirements</strong></summary>

- Encrypt stored credentials
- Never expose complete API keys after storage
- Avoid logging API keys or storing them in source code
- Avoid sending credentials unnecessarily to the frontend
- Isolate provider credentials from generated artifacts
- Validate provider connections securely

```text
Frontend → Provider connection request → Backend
    ├── Validate credential
    ├── Encrypt credential
    └── Store securely
```

</details>

<details>
<summary><strong>Non-Functional Requirements</strong></summary>

**Performance**

```text
API response:        ≤ 2s
AI execution:        provider-dependent
Battle evaluation:   provider-dependent
```

**Reliability** — isolate failed model executions, preserve completed artifacts, report provider errors, allow execution status recovery. A single model failure must not invalidate the whole Battle.

**Scalability** — asynchronous execution queue:

```text
Battle → Execution Queue → [Model A, Model B, Model C, Model D]
```

</details>

<details>
<summary><strong>Project Structure</strong></summary>

```text
workflow-ai/
│
├── apps/
│   ├── web/
│   └── api/
│
├── packages/
│   ├── ui/
│   ├── ai-providers/
│   └── shared/
│
├── docs/
├── prisma/
│
├── README.md
├── package.json
└── LICENSE
```

</details>

<details>
<summary><strong>Success Criteria — v0.1</strong></summary>

The MVP is functional when a user can complete this scenario without leaving Workflow AI:

1. Create an account
2. Connect at least one AI Provider
3. Create a Workspace
4. Create a Battle
5. Select multiple AI Models
6. Provide the same task
7. Execute the Battle
8. Inspect each Artifact
9. Evaluate the Artifacts
10. View the ranking
11. Select an Artifact
12. Set it as the Workspace Main Artifact
13. Preserve alternative results
14. Continue the workflow through GitHub

</details>

---

## License

License to be defined.

---

**Status:** Workflow AI v0.1 — early-stage MVP, in development.
