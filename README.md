# Workflow AI

> Compare AI models. Evaluate what they build. Continue with what works.

[![Status](https://img.shields.io/badge/status-early%20stage-yellow)]()
[![Version](https://img.shields.io/badge/version-v0.1-blue)]()
[![Stage](https://img.shields.io/badge/stage-MVP-orange)]()

Workflow AI is an early-stage platform designed to run the same task across multiple AI models, compare the generated artifacts, evaluate the results, and continue development with the artifact that works best for the task.

The project is currently validating the MVP one part at a time. **The current implementation focus is the Frontend/UI layer.**

---

## Table of Contents

- [What is Workflow AI?](#what-is-workflow-ai)
- [How It Works](#how-it-works)
- [Core Concepts](#core-concepts)
- [Current Implementation Status](#current-implementation-status)
- [Frontend Implementation Checklist](#frontend-implementation-checklist)
- [Development Methodology](#development-methodology)
- [Current MVP (v0.1)](#current-mvp-v01)
- [Architecture](#architecture)
- [Functional Requirements](#functional-requirements)
- [Application Screens](#application-screens)
- [Roadmap](#roadmap)
- [License](#license)

---

## What is Workflow AI?

AI models can produce very different results for the same task. Workflow AI turns the manual comparison process into a structured workflow:

```text
Workspace
   ↓
Battle
   ↓
Same Task → Multiple AI Models
   ↓
Artifacts
   ↓
Evaluation
   ↓
Ranking
   ↓
Select Result
   ↓
Main Artifact
   ↓
Continue Development
```

The product is not intended to establish a universal ranking of AI models. A ranking belongs to a specific Battle and reflects the criteria defined for that task.

## Core Concepts

| Concept | Description |
| --- | --- |
| **User** | Creates Workspaces, configures providers, runs Battles, evaluates artifacts and selects results. |
| **Provider** | AI service such as OpenAI, Anthropic, Google or xAI. Credentials belong to the account. |
| **Model** | Specific AI model exposed by a Provider. |
| **Workspace** | Project/development environment. |
| **Battle** | Controlled experiment where multiple models receive the same task under the same conditions. |
| **Artifact** | Result produced by a model: code, files, UI, documentation, configuration or project structure. |
| **Evaluation** | Manual scoring of an artifact against configurable criteria. |
| **Ranking** | Ordering of artifacts by score within a Battle. |
| **Main Artifact** | Artifact selected by the user as the primary Workspace result. |
| **Experiment** | Alternative artifact preserved after another result is selected. |

---

# Current Implementation Status

> **Important:** Workflow AI is currently being developed **only at the Frontend/UI level**.
>
> A screen marked as implemented means that its interface, navigation, visual states and/or mocked interaction flow have been developed. It **does not mean that the feature is connected to a real API, backend, database, authentication service, AI provider, GitHub API or other external service**.
>
> The backend, API, database persistence and real integrations will be implemented in later development stages.

### Current frontend state

- Authentication flow: **implemented at frontend level**
- Onboarding flow: **implemented at frontend level**
- Other MVP screens: **not yet implemented / pending frontend development**
- API integration: **not implemented**
- Backend: **not implemented**
- Database: **not implemented**
- Real authentication/session management: **not implemented**
- Real AI provider execution: **not implemented**
- Real GitHub integration: **not implemented**

---

# Frontend Implementation Checklist

The checklist below maps the current UI progress to the functional requirements defined for the MVP.

## 1. Authentication — RF01 / RF02

### Frontend — Completed

- [x] Login screen
- [x] Email/password login interface
- [x] GitHub login interface
- [x] Google login interface
- [x] Account creation / registration interface
- [x] Password recovery flow
- [x] Password recovery confirmation state
- [x] Email-not-found state in the mocked recovery flow
- [x] Onboarding flow
- [x] Onboarding timeline layout
- [x] Static onboarding timeline presentation

### Backend / Integration — Pending

- [ ] Real user registration API
- [ ] Real login API
- [ ] Persistent authenticated session
- [ ] JWT/session implementation
- [ ] GitHub OAuth integration
- [ ] Google OAuth integration
- [ ] Password recovery API/email service
- [ ] User persistence in the database

**Status:** Frontend authentication flow completed. Backend and real authentication integrations are pending.

## 2. Home — MVP Navigation

- [ ] Home/Dashboard screen
- [ ] Welcome state
- [ ] Create Workspace entry point
- [ ] Recent Workspaces
- [ ] Recent Battles

## 3. Workspace Management — RF04

- [ ] Workspaces list
- [ ] Search Workspaces
- [ ] Create Workspace
- [ ] Open Workspace
- [ ] Edit Workspace
- [ ] Delete Workspace
- [ ] Workspace overview
- [ ] Workspace Battles section
- [ ] Workspace Artifacts section
- [ ] Workspace Experiments section
- [ ] Workspace Settings

## 4. Battle Creation — RF05 / RF06

- [ ] Battle information
- [ ] Task briefing
- [ ] Model selection
- [ ] Provider and connection status UI
- [ ] Inline provider connection flow
- [ ] Evaluation criteria configuration
- [ ] Advanced settings
- [ ] Battle review/create state

Backend/integration pending:

- [ ] Provider connection API
- [ ] Provider credential persistence
- [ ] Model availability from providers
- [ ] Battle persistence
- [ ] Real model execution

## 5. Battle Room — RF07 / RF08

- [ ] Battle Room screen
- [ ] Selected models view
- [ ] Execution status
- [ ] Progress state
- [ ] Elapsed time
- [ ] Completed models
- [ ] Failed models
- [ ] Error states
- [ ] Real-time execution updates

Backend/integration pending:

- [ ] Real AI execution
- [ ] Execution queue
- [ ] Execution persistence
- [ ] Token metrics
- [ ] Cost calculation
- [ ] Latency measurement
- [ ] Provider error handling

## 6. Battle Results — RF09 / RF10 / RF11 / RF12

- [ ] Artifact visualization
- [ ] Side-by-side artifact comparison
- [ ] Manual evaluation interface
- [ ] Configurable evaluation criteria
- [ ] 0–10 scoring
- [ ] Ranking view
- [ ] Per-criterion scores
- [ ] Execution metrics
- [ ] Recommended artifact
- [ ] Artifact selection

## 7. Artifact Preservation / Main Artifact / Experiments — RF13 / RF14 / RF15

- [ ] Artifact persistence UI
- [ ] Main Artifact state
- [ ] Set selected artifact as Main Artifact
- [ ] Experiments view
- [ ] Preserve non-selected artifacts
- [ ] Reopen preserved experiments

## 8. Settings / Providers / GitHub — RF03 / RF16

- [ ] General Settings
- [ ] Provider Settings
- [ ] Provider connection interface
- [ ] Provider status
- [ ] Credential management interface
- [ ] GitHub Settings
- [ ] GitHub connection interface
- [ ] Repository selection
- [ ] Branch selection
- [ ] Artifact export flow
- [ ] Security Settings

---

## Frontend Progress Overview

| Area | Frontend | API / Backend | Database / Persistence |
| --- | :---: | :---: | :---: |
| Authentication | ✅ | ❌ | ❌ |
| Onboarding | ✅ | ❌ | ❌ |
| Home | ⬜ | ❌ | ❌ |
| Workspaces | ⬜ | ❌ | ❌ |
| Workspace | ⬜ | ❌ | ❌ |
| Create Battle | ⬜ | ❌ | ❌ |
| Battle Room | ⬜ | ❌ | ❌ |
| Battle Results | ⬜ | ❌ | ❌ |
| Artifact Visualization | ⬜ | ❌ | ❌ |
| Evaluation | ⬜ | ❌ | ❌ |
| Ranking | ⬜ | ❌ | ❌ |
| Main Artifact | ⬜ | ❌ | ❌ |
| Experiments | ⬜ | ❌ | ❌ |
| Provider Settings | ⬜ | ❌ | ❌ |
| GitHub Integration | ⬜ | ❌ | ❌ |
| Security Settings | ⬜ | ❌ | ❌ |

**Legend:**

- ✅ Implemented at the current layer
- ⬜ Not implemented yet at the current layer
- ❌ Not implemented / integration pending

---

# Development Methodology

Workflow AI is itself being developed through a **Specification-Driven Agentic Development with Human-in-the-Loop** process.

The project separates planning, implementation, review and final integration instead of treating an AI agent as an autonomous decision-maker.

```text
Human defines task
       ↓
ChatGPT analyzes and specifies
       ↓
Gemini implements
       ↓
ChatGPT performs technical review
       ↓
Human approves
       ↓
Git integration
```

### Roles

| Role | Responsibility |
| --- | --- |
| **Human — José Vitor** | Project owner and final decision-maker. Defines goals, validates requirements, approves implementations and controls integration into `master`. |
| **ChatGPT** | Planning, architecture, technical specifications, documentation, acceptance criteria, test strategy, code review and technical validation. |
| **Gemini** | Primary implementation agent responsible for turning approved specifications into code and preparing implementation changes. |
| **GitHub** | Source of truth for branches, commits, pull requests, history and integration. |

### Branch Policy

The default integration branch is `master`.

Agent implementation work is currently performed on:

```text
branch-for-agents
```

Unreviewed AI-generated changes must not be integrated directly into `master`.

A change should reach `master` only after:

1. the requirement is defined;
2. the implementation is completed;
3. the implementation is technically reviewed;
4. identified issues are resolved;
5. the human coordinator approves the change.

### Engineering Principles

- Understand the problem before implementing.
- Prefer simple, maintainable solutions.
- Avoid unnecessary abstractions and complexity.
- Preserve existing behavior unless a change is intentional.
- Review for bugs, logic errors, coupling, duplication, security and performance problems.
- Define acceptance criteria before considering a task complete.
- Test important behavior instead of relying only on visual validation.
- Keep changes isolated and traceable through Git.
- Never treat AI-generated code as automatically correct.
- Require human approval before integration into `master`.

---

# Current MVP (v0.1)

The MVP is intended to validate the core loop end to end.

### In scope

- Authentication
- Provider connections
- Workspace creation
- Battle creation
- Model selection
- Same-task execution across models
- Battle Room
- Artifact visualization
- Manual evaluation
- Ranking
- Artifact selection
- Main Artifact
- Experiment preservation
- Initial GitHub integration

### Explicitly out of scope for v0.1

- MCP integration
- Advanced AI agent skills
- Complex agent orchestration
- Fully automated benchmarking
- Sophisticated AI judge systems
- Advanced team collaboration

---

# Architecture

### Planned stack

**Frontend:** React · Next.js · TypeScript · Tailwind CSS · shadcn/ui

**Backend:** Node.js · NestJS · TypeScript

**Database:** PostgreSQL · Prisma ORM

**Authentication:** JWT · OAuth providers

**AI Integration:** Provider-specific adapters behind a common abstraction layer.

### Planned data model

```text
User
 ├── ProviderConnection
 └── Workspace
       └── Battle
             ├── Artifact
             └── Evaluation
```

Provider credentials are intended to be configured at the account level rather than duplicated across Workspaces.

---

# Functional Requirements

## RF01 — User Registration

The system must allow users to create an account.

## RF02 — Authentication

Users must be able to sign in, sign out, maintain an authenticated session and recover access. Supported authentication methods: Email/password, GitHub and Google.

## RF03 — Provider Management

Users must be able to add, validate, view, remove and manage multiple provider credentials. Credentials must be protected and must not be unnecessarily exposed to the frontend.

## RF04 — Workspace Management

Users must be able to create, view, open, edit and delete Workspaces. A Workspace belongs to one User.

## RF05 — Battle Creation

A Battle contains a name, description, task briefing, selected models, evaluation configuration and execution settings.

## RF06 — Model Selection

Users select multiple models per Battle. Each model displays its Provider and connection status. A missing provider connection can be initiated from the Battle creation flow.

## RF07 — Battle Execution

The same task is executed independently against each selected model. The system records Provider, Model, start/end time, status, input/output/total tokens, cost, latency and errors.

Statuses:

```text
Queued · Running · Completed · Failed
```

## RF08 — Battle Room

The Battle Room provides execution monitoring including selected models, status, progress, elapsed time, completed/failed models and errors.

## RF09 — Artifact Visualization

Users can inspect the actual generated artifact, including code, files, interfaces, documentation, text and structures, with side-by-side comparison where applicable.

## RF10 — Manual Evaluation

Users can score artifacts from 0–10 using configurable criteria such as Quality, Precision, UX/UI, Code Quality, Performance and Requirements.

## RF11 — Ranking

The system displays artifacts, models, providers, total scores, per-criterion scores and relevant execution metrics.

## RF12 — Artifact Selection

Users select the artifact to continue with. The highest-scoring artifact may be recommended, but the user can override the recommendation.

## RF13 — Artifact Preservation

Artifacts remain accessible after a Battle. Non-selected results are not automatically discarded.

## RF14 — Main Artifact

The selected artifact can become the Workspace's Main Artifact.

## RF15 — Experiments

Alternative artifacts are preserved as Experiments:

```text
Workspace
├── Main
└── Experiments
    ├── Claude
    ├── Gemini
    └── GPT
```

## RF16 — GitHub Integration

Users can connect GitHub, select a repository and branch, export an artifact and continue development:

```text
Battle → Evaluate → Select Artifact → Main Artifact → GitHub Repository → Development
```

---

# Application Screens

Planned application navigation:

```text
Home · Workspaces · Battles · History · Settings · Profile / Logout
```

- **Login** — Email/password, GitHub, Google, account creation and password recovery.
- **Home** — Welcome, Create Workspace and recent Workspaces/Battles.
- **Workspaces** — Search, create, open, edit and delete.
- **Workspace** — Overview, Battles, Artifacts, Experiments and Settings.
- **Create Battle** — Battle Info → Task Briefing → Select Models → Evaluation Criteria → Advanced Settings → Create.
- **Battle Room** — Real-time execution view.
- **Battle Results** — Artifacts, comparison, evaluations, metrics, ranking, recommendation and selection.
- **Settings** — General, Providers, GitHub and Security.

The checklist in [Frontend Implementation Checklist](#frontend-implementation-checklist) is the authoritative record of what has actually been developed at the current stage.

---

# Roadmap

### v0.1 — Core MVP

Authentication, provider connections, Workspace/Battle creation, model selection, same-task execution, Battle Room, artifact visualization, manual evaluation, ranking, artifact selection, Main Artifact, experiment preservation and initial GitHub integration.

### v0.2 — Evaluation

Automated evaluation, AI Judges, objective metrics, evaluation consensus, advanced artifact comparison, Battle history and analytics.

### v0.3 — Development Workflow

Agent branches, artifact-to-branch synchronization, GitHub pull request workflow, versioned experiments and re-running previous Battles.

### v0.4 — Collaboration

Team Workspaces, roles and permissions, shared Battles, organization management, usage controls and audit logs.

---

# License

License to be defined.

---

**Status:** Workflow AI v0.1 — early-stage MVP, currently focused on Frontend/UI development.