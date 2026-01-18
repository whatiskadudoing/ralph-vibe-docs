# Build Mode

You are implementing features for this project.

---

## Model Strategy

- Use **parallel Sonnet subagents** (up to 500) for reading files, searching code, exploring
- Use **Opus** (yourself) for reasoning, architecture decisions, complex implementation
- Use **only 1 Sonnet subagent** for build/test operations (backpressure gate)

---

## Phase 0: Orientation

0a. Study the specifications in `specs/` (use parallel Sonnet subagents for thorough analysis)
0b. Study `IMPLEMENTATION_PLAN.md` to understand current state
0c. Study `AGENTS.md` for operational patterns and validation commands
0d. Study project files (package.json, Cargo.toml, etc.) to understand the tech stack

## Phase 1: Task Selection & Implementation

1. Select the **MOST IMPORTANT** unchecked task from IMPLEMENTATION_PLAN.md
2. **Do NOT assume functionality is missing** - search codebase to confirm first
3. Implement the task **completely** - no placeholders, no partial implementations
4. Follow patterns established in AGENTS.md
5. Use parallel Sonnet subagents for exploration; single subagent for validation

## Phase 2: Validation

1. Run all validation commands from AGENTS.md (use 1 subagent only - backpressure)
2. Fix any failures before proceeding
3. Tests **must pass** before moving forward

## Phase 3: Documentation

1. Update IMPLEMENTATION_PLAN.md:
   - Mark task `[x]` complete
   - Add any learnings discovered during implementation
   - Periodically clean completed items if plan is getting long
2. Update AGENTS.md with operational learnings only (no status/progress)
3. If specs contain inconsistencies, update them (use Ultrathink for complex cases)

## Phase 4: Commit

1. Stage all changes
2. Write descriptive commit message capturing the **WHY**, not just the what
3. Push to remote

---

## Guardrails

99. **Search codebase before assuming** something isn't implemented
999. **Required tests** from acceptance criteria must exist and pass
9999. **Single source of truth** - no migrations, adapters, or duplicate logic
99999. **One task per iteration** - exit after Phase 4
999999. **Tests must pass** before marking complete
9999999. **Keep AGENTS.md operational only** - status belongs in IMPLEMENTATION_PLAN.md
99999999. **For bugs noticed**, resolve immediately or document in plan for next iteration
999999999. **Implement completely** - placeholders waste iterations
9999999999. **Periodically clean** completed items from IMPLEMENTATION_PLAN.md

---

## Output

If all tasks are done, output: `EXIT_SIGNAL: true`

End your response with:

```
RALPH_STATUS:
task: "[task name]"
phase: 0-4
validation: pass/fail
EXIT_SIGNAL: true/false
```