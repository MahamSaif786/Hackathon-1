---
id: 1
title: amend-constitution-ai-book-rag
stage: constitution
date: 2025-12-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Claude Code
command: /sp.constitution
labels: [constitution, ai-book, rag, spec-first]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
  - .specify/templates/spec-template.md
  - .specify/templates/tasks-template.md
tests: []
---

## Prompt

```text
/sp.constitution

Project: AI-Spec–Driven Technical Book with Embedded RAG Chatbot

Mission:
Build a unified, production-ready book project authored using AI and specifications, published via Docusaurus on GitHub Pages, and enhanced with an embedded Retrieval-Augmented Generation (RAG) chatbot that answers questions strictly from the book content or from user-selected text only.

Core Principles:
- Spec-first development: no implementation without a written spec
- AI-native authoring: content written, refined, and structured using Claude Code
- Grounded intelligence: zero hallucinations; answers must come only from retrieved context
- User-scoped reasoning: support global book queries and selected-text-only queries
- Production readiness: deployable, testable, and documented system

Book Creation Standards:
- Platform: Docusaurus
- Deployment: GitHub Pages
- Authoring: Markdown / MDX
- Audience: Software developers
- Tone: Clear, technical, instructional
- Structure: Modular chapters, logical sidebar navigation, internal linking
- Content must be accurate, coherent, and progressively structured
- Book content must be generated and refined via Claude Code using Spec-Kit Plus specs

RAG Chatbot Requirements:
- Embedded within the published Docusaurus site
- Must answer questions using:
  1) Entire book content, or
  2) Only user-selected text (strictly enforced)
- Must refuse to answer when relevant context is unavailable
- Must reference relevant sections or chapters in responses
- Must never fabricate information outside retrieved context

Technical Architecture:
- Backend: FastAPI
- LLM Interface: OpenAI Agents / ChatKit SDKs
- Vector Store: Qdrant Cloud (Free Tier)
- Relational DB: Neon Serverless Postgres

RAG Pipeline Rules:
- Deterministically chunk book content
- Generate embeddings using OpenAI-compatible embedding models
- Store vectors in Qdrant with rich metadata
- Store document and section metadata in Postgres
- Retrieve top-K relevant chunks per query
- Inject retrieved context into the agent prompt
- In selected-text mode: disable global retrieval and restrict answers to provided text only

Safety & Constraints:
- Zero hallucination tolerance
- No undocumented APIs
- Environment-based secrets only
- Respect free-tier service limits
- Explicitly state limitations when answers cannot be derived

Deliverables:
- GitHub repository containing:
  - Docusaurus book
  - FastAPI RAG backend
  - Spec-Kit Plus specifications
  - Deployment configuration
  - Clear README
- Live GitHub Pages deployment
- Embedded, functioning RAG chatbot
- Documentation covering architecture, RAG flow, setup, and deployment

Success Criteria:
- Book builds and deploys successfully
- Chatbot answers accurately from book content
- Selected-text-only QA works correctly
- Specs fully trace to implementation
- No hallucinations during testing
- Demonstrates AI-native, spec-driven engineering
```

## Response snapshot

Updated the project constitution to reflect the AI-Spec–Driven Technical Book with Embedded RAG Chatbot project. The new constitution includes six core principles:
1. Spec-First Development
2. AI-Native Authoring
3. Grounded Intelligence (NON-NEGOTIABLE)
4. User-Scoped Reasoning
5. Production Readiness
6. Deterministic RAG Pipeline

Also updated the template files to align with the new constitution:
- plan-template.md: Added constitution checks for RAG-specific requirements
- spec-template.md: Added functional requirements aligned with the new principles
- tasks-template.md: Updated with RAG-specific task examples and structure

## Outcome

- ✅ Impact: Updated constitution to reflect AI-book-RAG project principles and requirements
- 🧪 Tests: No tests required for constitution update
- 📁 Files: Updated 4 files (.specify/memory/constitution.md, 3 template files)
- 🔁 Next prompts: Ready to proceed with project implementation following new constitution
- 🧠 Reflection: Constitution now properly reflects the project's core principles and technical architecture

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification following new constitution