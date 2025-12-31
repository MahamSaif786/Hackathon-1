---
ID: 1
TITLE: Create Specification Homepage Content Upgrade
STAGE: spec
DATE_ISO: 2025-12-31
SURFACE: agent
MODEL: claude-sonnet-4-5-20250929
FEATURE: homepage-content-upgrade
BRANCH: null
USER: claude
COMMAND: /sp.specify
LABELS: ["specification", "homepage", "docusaurus", "ui-ux"]
SPEC: ./fronted-book/specs/3-homepage-content-upgrade.spec.md
TICKET: null
ADR: null
PR: null
FILES_YAML: |
 - ./fronted-book/specs/3-homepage-content-upgrade.spec.md
 - ./fronted-book/specs/3-homepage-content-upgrade/checklists/requirements.md
TESTS_YAML: |
 - null
---

# Prompt History Record

## PROMPT_TEXT

```
Upgrade UI and homepage content for an existing Docusaurus book project

Project context:
- Project folder name: fronted-book
- Framework: Docusaurus (classic preset)
- Purpose: Educational book website titled “Physical AI & Humanoid Robotics”
- Deployment target: GitHub Pages / Vercel
- Existing project must remain functional (no breaking changes)

Goal:
Replace the default Docusaurus homepage feature content
(“Easy to Use”, “Focus on What Matters”, “Powered by React”)
with book-specific educational content, and improve the UI styling.

Target audience:
- Students learning Physical AI, Robotics, ROS 2, Simulation, and Humanoid Systems
- Beginners to intermediate learners

Content requirements:
- Replace homepage feature titles and descriptions with book-aligned topics such as:
  - Physical AI & Embodied Intelligence
  - Simulation-to-Real Robotics Learning
  - Humanoid Robotics Learning Path
- Content should reflect learning outcomes, not Docusaurus marketing text
- Language should be clear, educational, and professional

UI / UX requirements:
- Improve visual appearance of homepage feature cards
- Add better spacing, typography, and modern card-like layout
- Use ONLY Docusaurus-supported customization methods:
  - CSS via custom.css OR existing styles.module.css
  - React components without unsafe inline CSS hacks
- Do NOT introduce runtime errors or unsupported React patterns

Constraints (very important):
- Do NOT change folder structure
- Do NOT remove or rename existing files
- Do NOT break build or dev server
- Do NOT auto-mark tasks as completed without verification
- Do NOT use experimental or unsupported React features
- All changes must be compatible with Docusaurus v2

Success criteria:
- Homepage shows book-related content instead of default Docusaurus text
- UI looks cleaner and more professional
- Project runs successfully with `npm start`
- No console or build errors

Not building:
- No backend
- No authentication
- No API integration
- No new pages or modules
- No task automation or execution commands

Output format:
- Clear explanation of what files were modified
- Safe, minimal changes only
```

## RESPONSE_TEXT

Created comprehensive specification for homepage content upgrade of the Physical AI & Humanoid Robotics book website. The specification includes all required sections: Feature Description, User Scenarios & Testing, Functional Requirements, Non-Functional Requirements, Success Criteria, Key Entities, Constraints & Assumptions, and Out of Scope. Also created a quality checklist to validate the specification. The spec focuses on replacing default Docusaurus homepage content with book-specific educational content about Physical AI, Simulation-to-Real Robotics, and Humanoid Robotics Learning Path, while improving UI styling with modern card layouts and enhanced typography.

## OUTCOME

Specification successfully created at ./fronted-book/specs/3-homepage-content-upgrade.spec.md with all required sections. Ready for planning phase.