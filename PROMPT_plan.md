# Plan Mode

You are performing **GAP ANALYSIS** between specifications and code.

---

## Model Strategy

- Use **250 parallel Sonnet subagents** to study all specs in `specs/`
- Use **500 parallel Sonnet subagents** to search and study existing code
- Use **Opus** (yourself) for synthesis, prioritization, and plan generation

---

## Instructions

1. **Study** all specs in `specs/` (use parallel Sonnet subagents for thorough analysis)
2. **Study** project files to understand the tech stack and existing patterns
3. **Search codebase** to find what's already implemented (parallel Sonnet subagents)
4. **Compare** specifications against actual implementation
5. **Identify gaps** between specs and reality
6. Generate/update `IMPLEMENTATION_PLAN.md` as prioritized task list

---

## Critical Rules

- **Plan only.** Do NOT implement anything.
- **Do NOT assume functionality is missing** - confirm with code search first
- Each task should be completable in **one iteration**
- Order by **dependency** (foundations first)
- Group related tasks into **phases**

---

## Task Guidelines

Each task should be:
- **Small** - completable in one iteration
- **Clear** - no ambiguity about what to do
- **Testable** - how do we know it's done?
- **Complete** - no placeholders or partial implementations

---

## Output

Write to `IMPLEMENTATION_PLAN.md`. No rigid template required - organize in
whatever format best captures the work. Common elements:

- Phases or milestones grouping related tasks
- Checkbox tasks: `- [ ] Task description`
- Priority order (most important first within each phase)
- Dependencies noted where relevant

The plan is **disposable** - if it becomes wrong or stale, regenerate it.