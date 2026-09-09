# Workflow.ai

> Compare AI models, evaluate their results, and turn the best approach into your development workflow.

[![Status](https://img.shields.io/badge/status-in%20development-yellow)]()
[![Version](https://img.shields.io/badge/version-v0.1-blue)]()
[![Stage](https://img.shields.io/badge/stage-MVP-orange)]()
[![License](https://img.shields.io/badge/license-TBD-lightgrey)]()

**Workflow.ai** is a platform for running controlled experiments with multiple AI models on the same task, comparing their outputs, evaluating the resulting artifacts, and selecting the most suitable approach for continued development.

---

## Table of Contents

- [Overview](#overview)
- [The Problem](#the-problem)
- [Product Vision](#product-vision)
- [Core Concepts](#core-concepts)
- [Core User Flow](#core-user-flow)
- [MVP Scope](#mvp-scope)
- [Functional Requirements](#functional-requirements)
- [Git Workflow](#git-workflow)
- [Evaluation Architecture](#evaluation-architecture)
- [Metrics](#metrics)
- [Application Screens](#application-screens)
- [Data Model](#data-model)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Security Requirements](#security-requirements)
- [Non-Functional Requirements](#non-functional-requirements)
- [MVP Constraints](#mvp-constraints)
- [Monetization](#monetization)
- [Design Principles](#design-principles)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Success Criteria — v0.1](#success-criteria--v01)
- [License](#license)

---

## Overview

AI models can produce significantly different results when solving the same problem. Developers often need to manually switch between providers, repeat the same prompt, compare responses, inspect generated code or interfaces, and decide which result is most useful.

**Workflow.ai** centralizes this process. Instead of asking:

> "Which AI is the best?"

it focuses on a more practical question:

> "Which model produced the best result for this task under the criteria I defined?"

Users create a workspace, configure AI providers, create a **Battle**, run the same task across multiple models, compare the resulting **artifacts**, evaluate them, and select the result they want to continue developing.

---

## The Problem

Working with multiple AI models currently involves considerable manual effort:

```text
Choose AI → Write prompt → Run task → Inspect result → Switch AI
   → Repeat task → Compare results manually → Choose a result → Continue development
```

Workflow.ai replaces this with a structured pipeline:

```text
Workspace → Battle → Same Task → Multiple AI Models
   → Artifacts → Evaluation → Ranking → Select Result → Continue Development
```

---

## Product Vision

The long-term vision connects:

```
AI Model Comparison + Evaluation + Artifact Management + Development Workflow + Version Control
```

The MVP establishes the core loop:

> **Compare → Evaluate → Choose → Develop**

---

## Core Concepts

| Concept           | Description                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **User**          | Creates workspaces, configures providers, runs Battles, evaluates and selects artifacts.                                                  |
| **Provider**      | An AI service (OpenAI, Anthropic, Google, xAI) configured at the account level. Credentials are not duplicated across workspaces.         |
| **Model**         | A specific model exposed by a Provider (e.g. GPT, Claude, Gemini). The Battle UI focuses on Models while showing the associated Provider. |
| **Workspace**     | A project/development environment. In `v0.1`, each Workspace contains one Battle.                                                         |
| **Battle**        | A controlled experiment: multiple models receive the same task under the same conditions, each producing an independent artifact.         |
| **Artifact**      | The result produced by a model — code, files, UI, documentation, text, configuration, or project structure.                               |
| **Evaluation**    | Scores an artifact (0–10) against configurable criteria: Quality, Precision, UX/UI, Code Quality, Performance, Requirements.              |
| **Ranking**       | Orders artifacts by evaluation score **within a given Battle** — not a universal AI ranking.                                              |
| **Main Artifact** | The artifact selected as the Workspace's primary result. The top-scoring artifact is recommended, but the user can override it.           |
| **Experiment**    | Non-selected artifacts, preserved so alternative approaches aren't lost.                                                                  |

**MVP hierarchy:**

```text
User
 └── Workspace
      └── Battle
           ├── Artifact
           ├── Artifact
           └── Artifact
```

---

## Core User Flow

```text
Auth → Home → Create Workspace → Create Battle → Select Models → Define Task
   → Configure Evaluation → Run Battle → Battle Room → Artifacts
   → Evaluation → Ranking → Select Artifact → Main / Experiment
   → GitHub → Continue Development
```

---

## MVP Scope

The `v0.1` MVP allows a user to complete this end-to-end flow:

```text
Create Account → Configure Providers → Create Workspace → Create Battle
   → Select Models → Submit Same Task → Execute Models → Monitor Execution
   → View Artifacts → Evaluate Results → View Ranking
   → Select Artifact → Set Main Artifact
```

GitHub integration is included as a core development-workflow capability.

---

## Functional Requirements

<details>
<summary><strong>RF01 — User Registration</strong></summary>

The system must allow users to create an account.

</details>

<details>
<summary><strong>RF02 — Authentication</strong></summary>

Users must be able to sign in, sign out, maintain an authenticated session, and recover access when applicable.

Supported providers: Email/password, GitHub, Google.

</details>

<details>
<summary><strong>RF03 — Provider Management</strong></summary>

Users must be able to add, validate, view the status of, remove, and manage multiple provider credentials. API keys must not be unnecessarily exposed to the frontend, and stored credentials must be protected.

</details>

<details>
<summary><strong>RF04 — Workspace Management</strong></summary>

Create, view, open, edit, and delete Workspaces. A Workspace belongs to exactly one User.

</details>

<details>
<summary><strong>RF05 — Battle Creation</strong></summary>

A Battle within a Workspace must contain: name, description, task briefing, selected models, evaluation configuration, and execution settings.

</details>

<details>
<summary><strong>RF06 — Model Selection</strong></summary>

Users select multiple models per Battle; each displays its Provider and connection status. If a required provider isn't connected, the user can connect it without leaving the Battle creation flow.

```text
GPT      · OpenAI    · Connected
Claude   · Anthropic · Connected
Gemini   · Google    · Not connected [Connect]
```

</details>

<details>
<summary><strong>RF07 — Battle Execution</strong></summary>

Executes the same task against each selected model, independently. Records: Provider, Model, start/end time, status, input/output/total tokens, cost, latency, and errors.

Statuses: `Queued` · `Running` · `Completed` · `Failed`

</details>

<details>
<summary><strong>RF08 — Battle Room</strong></summary>

Real-time monitoring: selected models, execution status, progress, elapsed time, completed/failed models, and errors.

</details>

<details>
<summary><strong>RF09 — Artifact Visualization</strong></summary>

Inspect the actual generated artifact (code, files, interfaces, documentation, text, structures), with side-by-side comparison where applicable.

</details>

<details>
<summary><strong>RF10 — Manual Evaluation</strong></summary>

Configurable criteria (Quality, Precision, UX/UI, Code Quality, Performance, Requirements) scored 0–10.

</details>

<details>
<summary><strong>RF11 — Ranking</strong></summary>

Displays Artifact, Model, Provider, total score, per-criterion scores, and relevant execution metrics.

</details>

<details>
<summary><strong>RF12 — Artifact Selection</strong></summary>

Users select an artifact post-evaluation; the top-scoring one is recommended but can be overridden.

</details>

<details>
<summary><strong>RF13 — Artifact Preservation</strong></summary>

Artifacts remain accessible after a Battle ends — losing results are never auto-discarded.

</details>

<details>
<summary><strong>RF14 — Main Artifact</strong></summary>

The selected artifact can become the Workspace's Main Artifact, representing the result chosen for continued development.

</details>

<details>
<summary><strong>RF15 — Experiments</strong></summary>

```text
Workspace
├── Main
└── Experiments
    ├── Claude
    ├── Gemini
    └── GPT
```

</details>

<details>
<summary><strong>RF16 — GitHub Integration</strong></summary>

Connect GitHub, select a repository/branch, export an artifact, and continue development from it:

```text
Battle → Evaluate → Select Artifact → Main Artifact → GitHub Repository → Development
```

</details>

---

## Git Workflow

Git branches represent AI experiments rather than the primary domain model:

```text
main
├── agent/claude
├── agent/gemini
└── agent/gpt
```

Each AI-generated approach stays isolated until the user selects one to promote:

```text
main
  └── Battle
       ├── Claude Artifact
       ├── Gemini Artifact
       └── GPT Artifact
              └── User selects Claude → Claude becomes Main
```

---

## Evaluation Architecture

The MVP starts with **manual evaluation**. Future versions may add:

```
Human Evaluation + Automated Tests + AI Evaluation + Objective Metrics
```

Potential objective metrics: Lighthouse performance, accessibility tests, functional tests, visual regression, HTML validation, execution time, token usage, cost.

**AI Judges (future):** one model evaluates another's result — e.g. Gemini evaluates Claude's artifact, Claude evaluates GPT's. Multiple judges distribute evaluator bias but don't eliminate it, so the system distinguishes objective metrics, human evaluation, AI evaluation, and evaluator agreement.

---

## Metrics

| Category                  | Fields                                                     |
| ------------------------- | ---------------------------------------------------------- |
| **Tokens**                | Input, Output, Total                                       |
| **Cost**                  | Calculated per Provider/Model pricing — token count ≠ cost |
| **Latency**               | Start time, End time, Execution duration                   |
| **Tool Calls** _(future)_ | Number and type of tools invoked by an AI agent            |

---

## Application Screens

**Navigation:** Home · Workspaces · Battles · History · Settings · Upgrade to Pro · Profile / Logout

- **Login** — Email/password, GitHub, Google auth, account creation, password recovery
- **Home** — Welcome, Create Workspace, recent Workspaces/Battles, plan info
- **Workspaces** — Search, create, open, edit, delete
- **Workspace** — Overview, Battles, Artifacts, Experiments, Settings
- **Create Battle** — Battle Info → Task Briefing → Select Models → Evaluation Criteria → Advanced Settings → Create
- **Battle Room** — Real-time execution view
- **Battle Results** — Artifacts, comparison, evaluations, metrics, ranking, recommended artifact, selection
- **Settings** — General, Providers, GitHub, Security, Billing

---

## Data Model

```text
User
 ├── ProviderConnection
 └── Workspace
       └── Battle
             ├── Artifact
             └── Evaluation
```

Core entities: `User` · `Provider` · `Model` · `ProviderConnection` · `Workspace` · `Battle` · `Artifact` · `Evaluation`

---

## Architecture

```text
┌─────────────────────────────┐
│           Client            │
│      React / TypeScript     │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│            API              │
│       NestJS / Node.js      │
└──────────────┬──────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌─────────────┐  ┌─────────────┐
│ PostgreSQL  │  │ AI Providers│
│   Prisma    │  │    APIs     │
└─────────────┘  └─────────────┘
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
           OpenAI  Anthropic   Google
```

---

## Tech Stack

**Frontend:** React · Vite · TypeScript · Tailwind CSS · shadcn/ui
**Backend:** Node.js · NestJS · TypeScript
**Database:** PostgreSQL · Prisma ORM
**Auth:** JWT · OAuth providers
**AI Integration:** Provider-specific adapters behind a common abstraction layer, so adding a provider doesn't require rewriting the Battle system.

---

## Security Requirements

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

---

## Non-Functional Requirements

**Performance**

```
API response:       ≤ 2s
AI execution:        provider-dependent
Battle evaluation:   provider-dependent
```

**Reliability** — isolate failed model executions, preserve completed artifacts, report provider errors, allow execution status recovery. A single model failure must not invalidate the whole Battle.

**Scalability** — asynchronous execution queue:

```text
Battle → Execution Queue → [Model A, Model B, Model C, Model D]
```

---

## MVP Constraints

Out of scope for `v0.1`: MCP integration, advanced AI agent skills, team workspaces, organization management, SSO, advanced collaboration, complex agent orchestration, fully automated benchmarking, sophisticated AI judge systems, large-scale workflow automation.

---

## Monetization

| Tier                | Includes                                                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Free**            | Limited Workspaces, Battles, model executions, and history                                                                                                  |
| **Pro**             | More Battles/models/providers, advanced & AI-assisted evaluation, extended history, artifact comparison, GitHub integration, export, re-running experiments |
| **Team** _(future)_ | Shared Workspaces, permissions, org management, centralized billing, audit logs, usage controls, SSO                                                        |

**Retention loop:**

```text
Create → Compare → Evaluate → Choose → Develop → Encounter New Task → Battle Again → Compare
```

---

## Design Principles

1. **Compare results, not marketing** — focus on what models actually produce.
2. **Context over absolutes** — there's no universally "best" model; performance depends on task, prompt, constraints, model, criteria, and environment.
3. **Preserve experiments** — alternative results are valuable data and are never discarded unnecessarily.
4. **User decides** — the system can recommend, but the user makes the final call.
5. **Development is the destination** — comparison should lead to: `AI Experiment → Artifact → Evaluation → Selection → Development`.

---

## Project Structure

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

---

## Roadmap

### v0.1 — MVP

- [ ] Authentication
- [ ] Provider connections
- [ ] Workspace creation
- [ ] Battle creation
- [ ] Model selection
- [ ] AI execution
- [ ] Battle Room
- [ ] Artifact visualization
- [ ] Manual evaluation
- [ ] Ranking
- [ ] Artifact selection
- [ ] Main Artifact
- [ ] Experiment preservation
- [ ] GitHub integration

### v0.2 — Automated Evaluation

- [ ] Automated evaluation
- [ ] AI Judges
- [ ] Objective metrics
- [ ] Evaluation consensus
- [ ] Advanced artifact comparison
- [ ] Battle history and analytics

### v0.3 — Development Workflow

- [ ] Agent branches
- [ ] Artifact-to-branch synchronization
- [ ] GitHub pull request workflow
- [ ] Versioned experiments
- [ ] Re-run previous Battles
- [ ] Improved development continuity

### v0.4 — Collaboration

- [ ] Team Workspaces
- [ ] Roles and permissions
- [ ] Shared Battles
- [ ] Organization management
- [ ] Usage controls
- [ ] Audit logs

---

## Success Criteria — v0.1

The MVP is functional when a user can complete this scenario without leaving Workflow.ai:

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

> The MVP succeeds if it transforms a normally manual comparison process into a single structured workflow.

---

## License

License to be defined.

---

**Status:** Workflow.ai v0.1 — MVP, currently in development.
