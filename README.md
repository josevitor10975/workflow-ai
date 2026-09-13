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
- Home/Dashboard: **implemented at frontend level**
- Workspace list and workspace view: **implemented at frontend level**
- Workspace tabs: **implemented at frontend level**
- Create Workspace flow: **implemented as mocked frontend interaction**
- Create Battle flow: **implemented as mocked frontend interaction**
- Create Branch flow: **implemented as mocked frontend interaction**
- Evaluation defaults UI: **implemented at frontend level**
- Battle Room: **pending frontend development**
- Battle Results: **pending frontend development**
- Real API integration: **not implemented**
- Backend: **not implemented**
- Database: **not implemented**
- Real authentication/session management: **not implemented**
- Real AI provider execution: **not implemented**
- Real GitHub integration: **not implemented**

---

# Frontend Implementation Checklist

This checklist is the authoritative record of what has actually been developed at the current stage. It tracks **Frontend/UI progress only**. Backend, API, database and external integrations are tracked separately as pending work.

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
- [x] Default application typography applied consistently

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

### Frontend — Completed

- [x] Home/Dashboard screen
- [x] Welcome state
- [x] Create Workspace entry point
- [x] Create Workspace modal
- [x] Recent Workspaces
- [x] Recent Battles navigation entry point
- [x] Workspace navigation from recent Workspaces

### Backend / Integration — Pending

- [ ] Load Workspaces from API
- [ ] Load recent Battles from API
- [ ] Persist created Workspaces

**Status:** Frontend Home flow implemented with mocked data and navigation.

## 3. Workspace Management — RF04

### Frontend — Completed

- [x] Workspaces list
- [x] Workspace cards
- [x] Open Workspace
- [x] Workspace overview
- [x] Workspace metadata and summary
- [x] Workspace Battles section
- [x] Workspace Artifacts section
- [x] Workspace Branches section
- [x] Workspace Settings section
- [x] Navigation between Workspace sections
- [x] Create Workspace interface

### Frontend — Partial / Pending

- [ ] Functional Workspace search
- [ ] Edit Workspace flow
- [ ] Delete Workspace flow
- [ ] Complete Workspace management interactions

### Backend / Integration — Pending

- [ ] Workspace CRUD API
- [ ] Workspace persistence
- [ ] Search through persisted Workspaces

**Status:** Core Workspace frontend implemented. Management actions and persistence remain pending.

## 4. Workspace Sections

The current Workspace interface contains four sections:

```text
Workspace
├── Battles
├── Artifacts
├── Branches
└── Settings
```

### Battles — Frontend

- [x] Battles list
- [x] Battle metadata
- [x] Models displayed per Battle
- [x] Status display
- [x] Winner display
- [x] Score display
- [x] Progress display for non-completed Battles
- [x] Search UI
- [x] Filter UI
- [x] Create Battle entry point

### Artifacts — Frontend

- [x] Artifact list
- [x] Artifact name
- [x] Artifact type
- [x] Originating model
- [x] Originating Battle
- [x] Score
- [x] Main Artifact status
- [x] Experiment status
- [x] Date metadata
- [x] Search UI

### Branches — Frontend

- [x] Branch list
- [x] Main branch representation
- [x] Feature/experiment branch representation
- [x] Branch status
- [x] Branch origin/source
- [x] Last update metadata
- [x] New Branch modal
- [x] Branch name field
- [x] Create-from branch field
- [x] Optional Artifact association
- [x] Branch preview

### Settings — Frontend

- [x] Settings section
- [x] General settings interface
- [x] Evaluation defaults interface
- [x] Evaluation criteria list
- [x] Reusable Checkbox component for evaluation criteria
- [x] Workspace-scoped settings presentation

**Status:** Workspace structure and its four main frontend sections are implemented. Data persistence and advanced interactions are pending.

## 5. Battle Creation — RF05 / RF06

### Frontend — Implemented / Mocked

- [x] Create Battle modal
- [x] Workspace selection presentation
- [x] Battle name
- [x] Optional description
- [x] Multiple model/agent selection
- [x] Selected/unselected model states
- [x] Reusable Checkbox component for model selection
- [x] Provider/API key configuration entry point
- [x] Battle summary panel
- [x] Basic validation requiring at least two selected agents
- [x] Create Battle action presentation
- [x] Create Branch flow entry point

> **Implementation note:** The current frontend uses a single Create Battle modal. The original requirements describe a multi-step creation flow; that multi-step structure has **not** been implemented yet.

### Backend / Integration — Pending

- [ ] Provider connection API
- [ ] Provider credential persistence
- [ ] Model availability from providers
- [ ] Battle persistence
- [ ] Real model execution
- [ ] Real evaluation configuration persistence

**Status:** Core Create Battle frontend implemented as a mocked flow. Real execution and provider integration are pending.

## 6. Battle Room — RF07 / RF08

### Frontend — Pending

- [ ] Battle Room screen
- [ ] Selected models view
- [ ] Execution status
- [ ] Progress state
- [ ] Elapsed time
- [ ] Completed models
- [ ] Failed models
- [ ] Error states
- [ ] Real-time execution presentation

### Backend / Integration — Pending

- [ ] Real AI execution
- [ ] Execution queue
- [ ] Execution persistence
- [ ] Token metrics
- [ ] Cost calculation
- [ ] Latency measurement
- [ ] Provider error handling

**Status:** Pending frontend development.

## 7. Battle Results — RF09 / RF10 / RF11 / RF12

### Frontend — Pending

- [ ] Detailed Artifact visualization
- [ ] Side-by-side Artifact comparison
- [ ] Manual evaluation interface
- [ ] Configurable evaluation criteria in results
- [ ] 0–10 scoring interface
- [ ] Ranking view
- [ ] Per-criterion scores
- [ ] Execution metrics presentation
- [ ] Recommended Artifact
- [ ] Artifact selection action

### Backend / Integration — Pending

- [ ] Artifact result persistence
- [ ] Evaluation persistence
- [ ] Ranking calculation
- [ ] Execution metrics collection
- [ ] Artifact selection persistence

**Status:** Pending frontend development.

## 8. Artifact Preservation / Main Artifact / Experiments — RF13 / RF14 / RF15

### Frontend — Partial

- [x] Main Artifact visual state
- [x] Experiment visual state
- [x] Artifact-to-Battle relationship display
- [x] Artifact-to-Model relationship display
- [x] Artifact-to-Branch relationship display
- [ ] Detailed Artifact result view
- [ ] Set selected Artifact as Main Artifact interaction
- [ ] Complete Experiments workflow
- [ ] Reopen preserved Experiment workflow

### Backend / Integration — Pending

- [ ] Artifact persistence
- [ ] Main Artifact persistence
- [ ] Experiment persistence
- [ ] Artifact retrieval

**Status:** Core concepts are represented in the frontend, but the complete selection and preservation workflow is pending.

## 9. Settings / Providers / GitHub — RF03 / RF16

### Frontend — Partial / Pending

- [x] Workspace General Settings interface
- [x] Workspace Evaluation Defaults interface
- [x] Provider/API key configuration entry point from Create Battle
- [ ] Dedicated Provider Settings screen
- [ ] Provider connection interface
- [ ] Provider status
- [ ] Credential management interface
- [ ] GitHub Settings
- [ ] GitHub connection interface
- [ ] Repository selection
- [ ] Branch selection
- [ ] Artifact export flow
- [ ] Security Settings

### Backend / Integration — Pending

- [ ] Provider credential storage and protection
- [ ] Provider validation
- [ ] Real provider connections
- [ ] GitHub OAuth/API integration
- [ ] Repository and branch retrieval
- [ ] Artifact export
- [ ] Secure credential handling

**Status:** Only workspace settings and frontend entry points currently exist. Provider and GitHub integrations are pending.

---

## Frontend Progress Overview

| Area | Frontend | API / Backend | Database / Persistence |
| --- | :---: | :---: | :---: |
| Authentication | ✅ | ❌ | ❌ |
| Onboarding | ✅ | ❌ | ❌ |
| Home | ✅ | ❌ | ❌ |
| Workspaces | 🟡 | ❌ | ❌ |
| Workspace | ✅ | ❌ | ❌ |
| Battles | 🟡 | ❌ | ❌ |
| Create Battle | 🟡 | ❌ | ❌ |
| Battle Room | ⬜ | ❌ | ❌ |
| Battle Results | ⬜ | ❌ | ❌ |
| Artifact Visualization | 🟡 | ❌ | ❌ |
| Evaluation | 🟡 | ❌ | ❌ |
| Ranking | ⬜ | ❌ | ❌ |
| Main Artifact | 🟡 | ❌ | ❌ |
| Experiments | 🟡 | ❌ | ❌ |
| Branches | ✅ | ❌ | ❌ |
| Create Branch | ✅ | ❌ | ❌ |
| Workspace Settings | 🟡 | ❌ | ❌ |
| Provider Settings | ⬜ | ❌ | ❌ |
| GitHub Integration | ⬜ | ❌ | ❌ |
| Security Settings | ⬜ | ❌ | ❌ |

**Legend:**

- ✅ Core frontend flow implemented
- 🟡 Partially implemented at the frontend level
- ⬜ Not implemented yet at the frontend level
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

Current frontend navigation and implemented screens:

```text
Login
  ↓
Onboarding
  ↓
Home
  ↓
Workspaces
  ↓
Workspace
  ├── Battles
  │    └── Create Battle
  ├── Artifacts
  ├── Branches
  │    └── New Branch
  └── Settings
       └── Evaluation Defaults
```

### Current frontend screens

- **Login** — Email/password, GitHub, Google, account creation and password recovery.
- **Onboarding** — Static onboarding timeline and progression UI.
- **Home** — Welcome state, Create Workspace, recent Workspaces and recent Battles entry point.
- **Workspaces** — Workspace listing and navigation.
- **Workspace** — Overview plus Battles, Artifacts, Branches and Settings sections.
- **Create Battle** — Single frontend modal with Battle information, model selection, API key entry point and summary.
- **New Branch** — Branch name, source branch, optional Artifact association and preview.
- **Settings** — Workspace general settings and Evaluation Defaults.

### Pending frontend screens

- **Battle Room** — Execution monitoring.
- **Battle Results** — Artifact comparison, evaluation, ranking and selection.
- **Provider Settings** — Dedicated provider/credential management.
- **GitHub Settings / Integration** — Repository, branch and export workflow.
- **Security Settings** — Security and account controls.

The [Frontend Implementation Checklist](#frontend-implementation-checklist) is the authoritative record of what has actually been developed at the current stage.

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

**Status:** Workflow AI v0.1 — early-stage MVP, currently focused on Frontend/UI development. Backend, database, API integrations and external service integrations are not yet implemented.