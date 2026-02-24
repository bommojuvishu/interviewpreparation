# Round 2 Platform Prep

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 2/23/2026 16:21:00  
**Updated:** 2/23/2026 16:25:29  
**Exported:** 2/24/2026 8:05:37  
**Link:** [https://chatgpt.com/c/699c3106-ae48-83ab-ba42-5e4ee507f4cf](https://chatgpt.com/c/699c3106-ae48-83ab-ba42-5e4ee507f4cf)  

## Prompt:
Interview-Prep-2.0-FE-IC4+.pdf

PDF

What questions i can expect round 2?

## Response:
For Round 2 at Agoda (Platform round), expect **deep system + web engineering discussion**, not LeetCode.

Based on the prep guide (see Stage 2 – Platform on pages 3–4

Interview-Prep-2.0-FE-IC4+

), they will assess:

*   HLD + LLD
*   Web architecture expertise (FE/FS specific)
*   Scale + testing rigor
*   Trade-offs
*   Clear structured communication

Now let’s get practical.

* * *

What They Are Actually Testing
==============================

At your experience level (10+ years, strong FE + FS exposure), they’re checking:

1.  Can you design a production-grade platform?
2.  Do you understand scale beyond one team?
3.  Can you reason about trade-offs?
4.  Do you think about testing, observability, resilience?
5.  Can you lead technically?

* * *

Types of Questions You Can Expect
=================================

1️⃣ System Design – Web Platform Or Feature
-------------------------------------------

You may get something like:

*   Design a hotel search platform like Agoda
*   Design a booking system
*   Design a review system at scale
*   Design a notification system (email/push/SMS)
*   Design a pricing or inventory service
*   Design a rate-limiting system
*   Design a feature flag system
*   Design a CDN-backed content delivery system

What they’ll probe:

*   How you handle 1M+ daily users
*   Caching strategy (Redis, CDN, edge caching)
*   Database choice (SQL vs NoSQL)
*   Data consistency vs availability trade-offs
*   Horizontal scaling
*   Deployment strategy
*   Observability (metrics, logs, tracing)

If you stop at “use microservices + load balancer” — that’s too shallow.

You must justify:

*   Why?
*   What are bottlenecks?
*   What fails first?
*   How do we measure success?

* * *

2️⃣ Frontend-Focused Deep Dive (Very Likely For You)
----------------------------------------------------

Since you’re strong in React, expect:

*   How would you architect a large React app?
*   SSR vs CSR vs SSG trade-offs?
*   How to handle 10k+ search results efficiently?
*   How do you improve performance of a slow React page?
*   Virtualization?
*   Memoization?
*   Code splitting?
*   Bundle optimization?
*   Handling race conditions in API calls?
*   State management strategy at scale?
*   How would you test this app end-to-end?

They may go deep into:

*   Browser rendering pipeline
*   Event loop
*   React reconciliation
*   React rendering phases
*   Why use React Query vs Redux?
*   When not to use global state?

* * *

3️⃣ Full Stack Architecture
---------------------------

If they go FS:

*   API design principles (REST vs GraphQL)
*   Idempotency
*   Retries and exponential backoff
*   Pagination strategy
*   Data versioning
*   Backward compatibility
*   Schema evolution
*   Authentication/authorization patterns
*   Rate limiting
*   Circuit breaker pattern
*   API gateway necessity

* * *

4️⃣ Testing & Quality (They Emphasize This Strongly)
----------------------------------------------------

From the guide (page 4

Interview-Prep-2.0-FE-IC4+

):

> End-to-end with high coverage of unit tests

Expect:

*   What’s your testing pyramid?
*   Unit vs integration vs E2E?
*   How do you test distributed systems?
*   How do you test race conditions?
*   How do you test React hooks?
*   What’s contract testing?
*   How do you prevent flaky tests?

Most candidates ignore testing depth. That’s a differentiator.

* * *

5️⃣ Trade-offs Discussion
-------------------------

They love this:

*   Monolith vs microservices?
*   SQL vs NoSQL?
*   Event-driven vs request-response?
*   Strong vs eventual consistency?
*   Client-side filtering vs server-side filtering?
*   Websocket vs polling?

If you give one-sided answers → red flag.

You must always show:

> “Here’s why I’d choose X given Agoda’s scale and constraints.”

* * *

How This Round Usually Fails Strong Engineers
=============================================

Let me challenge you here.

You’re technically strong.

But:

*   Do you structure answers clearly?
*   Do you start with requirements clarification?
*   Do you define constraints?
*   Do you define success metrics?
*   Do you explicitly talk about trade-offs?

Most experienced devs jump into solutions.

Agoda wants structured thinkers.

* * *

How You Should Structure Every Answer
=====================================

Use this pattern:

1.  Clarify requirements
2.  Define constraints
3.  Define scale assumptions
4.  High-level architecture
5.  Component deep dive
6.  Data model
7.  Scalability strategy
8.  Failure handling
9.  Observability
10.  Testing strategy
11.  Trade-offs

If you follow this — you will stand out.

* * *

For YOU Specifically
====================

Given:

*   React
*   Flask
*   Aurora Postgres
*   EKS
*   Rules engine
*   Complex financial app

Be prepared to discuss:

*   Designing high-performance dashboards
*   Handling heavy data visualization
*   Backend API optimization
*   Distributed systems coordination
*   Feature flag systems
*   Multi-tenant architecture
*   Performance optimization in large React apps
*   Cross-team technical decision making

They’ll likely probe:

> “Tell me about a time you made a platform-level decision.”

Prepare 2 strong stories:

*   One architecture decision
*   One cross-team conflict decision

* * *

High-Impact Next Step
=====================

Instead of random prep:

1.  Pick ONE problem:  
    → “Design Agoda search system.”
2.  Fully design it end-to-end.
3.  I’ll critique it like an interviewer.
4.  Then refine.

That’s 10x more effective than passive prep.

* * *

If you want, tell me:

*   Is Round 2 FE-focused or FS-focused?
*   Duration?
*   Is it with engineering manager or IC?

Let’s sharpen this strategically.

## Prompt:
What about third round ? Second vs third round

2/2

## Response:
Good question. The difference is subtle — but strategically important.

From the prep guide:

*   **Stage 2 = Platform** (page 4)
    Interview-Prep-2.0-FE-IC4+
*   **Stage 3 = Architecture** (page 5)
    Interview-Prep-2.0-FE-IC4+

They sound similar. They are not.

Let’s break this down clearly.

* * *

🔵 Round 2 — Platform (Execution-Level System Thinking)
=======================================================

**What they test:**  
Can you design and build a scalable web system _correctly_?

This is still execution-heavy. You’re designing a system, but they want to see:

*   Practical engineering knowledge
*   Framework depth
*   Web platform mechanics
*   Testing rigor
*   Production awareness

Think:

> “Can this person build and ship complex systems reliably?”

### Typical Round 2 Questions

*   Design a hotel search system
*   Architect a large React application
*   Design booking flow with concurrency control
*   Build notification service
*   Design an API gateway layer
*   How would you test this platform?
*   How do you scale this system?

They will go into:

*   DB schema decisions
*   Caching strategy
*   API contracts
*   Deployment
*   Testing pyramid
*   Failure handling

You are evaluated as a **strong senior / tech lead engineer** here.

* * *

🔴 Round 3 — Architecture (Strategic-Level Thinking)
====================================================

This is not about building.

This is about _owning technical direction across teams_.

From page 5:  
They emphasize cross-team impact, optimization, trade-offs, and architectural leadership

Interview-Prep-2.0-FE-IC4+

This is where Staff-level expectations kick in.

* * *

What Changes in Round 3?
------------------------

### 1️⃣ Scope expands

Round 2: “Design search system.”  
Round 3: “Our entire platform struggles with scaling across regions. What would you change?”

You’re now designing:

*   Cross-region architecture
*   Multi-team systems
*   Platform abstractions
*   Long-term evolution
*   Company-wide impact

* * *

### 2️⃣ Trade-offs become deeper

In Round 2:

*   You justify Redis vs DB.

In Round 3:

*   You justify moving from monolith to service mesh.
*   You define migration strategy.
*   You consider org structure impact.
*   You discuss cost implications.

This is a different mental level.

* * *

### 3️⃣ They Probe Leadership

Expect questions like:

*   You want to migrate architecture but 3 teams disagree. What do you do?
*   How do you drive adoption of a new platform?
*   How do you balance speed vs technical debt?
*   When do you say “no” to product?

They test:

*   Influence
*   Conviction
*   Diplomacy
*   Strategic thinking

* * *

Side-by-Side Comparison
=======================

| Dimension | Round 2 – Platform | Round 3 – Architecture |
| --- | --- | --- |
| Scope | Single system | Multi-system / org-wide |
| Depth | Implementation | Strategic architecture |
| Focus | How to build | What to build + why |
| Trade-offs | Technical | Technical + organizational |
| Testing | Unit, E2E, coverage | Platform reliability strategy |
| Leadership | Project level | Cross-team leadership |
| Evaluation Level | Senior+ | Staff / Lead |

* * *

Where Strong Engineers Usually Fail Round 3
===========================================

Let me challenge you directly.

In Round 3, if you:

*   Stay too detailed (API endpoints, schema)
*   Focus only on tech
*   Ignore org alignment
*   Ignore migration strategy

You look like a strong implementer — not a Staff engineer.

They want to see:

*   Systems thinking
*   Long-term vision
*   Prioritization
*   Influence

* * *

For You Specifically
====================

You’ve:

*   Built financial dashboards
*   Worked with EKS
*   Built rule engines
*   Owned production systems

Round 3 may probe:

*   How would you redesign your existing platform to handle 10x scale?
*   How do you manage ETL-heavy backend architecture?
*   How do you prevent frontend from becoming tightly coupled?
*   How do you standardize engineering across teams?

Prepare:

1.  One story where you drove architecture change.
2.  One story where you influenced multiple stakeholders.
3.  One story where you prevented a bad technical decision.

* * *

The Strategic Difference in One Line
====================================

Round 2 asks:

> Can you build scalable systems?

Round 3 asks:

> Can you shape how scalable systems are built across the company?

* * *

Now let me ask you something important:

Do you naturally think in “architecture roadmap” terms —  
or mostly in “system design implementation” terms?

Your answer determines how we prepare next.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)