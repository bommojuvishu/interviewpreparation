# 1️⃣ Dependency Injection (DI)

### First principle

Dependency Injection is not a React concept.

It’s a **design pattern**:

> Instead of creating what you depend on, you receive it from the outside.

---

## ❌ Without DI (Tightly Coupled)

```
class PaymentService {
  constructor() {
    this.db = new Database(); // tightly coupled
  }
}
```

Problem:

- Hard to test
- Hard to swap database
- Hard to mock

---

## ✅ With DI (Loosely Coupled)

```
class PaymentService {
  constructor(db) {
    this.db = db;
  }
}

const service = new PaymentService(new Database());
```

Now:

- You can pass MockDatabase for testing
- You can swap PostgreSQL → Mongo
- Code becomes modular

---

## Why This Matters Architecturally

DI enables:

- Testability
- Flexibility
- Inversion of control
- Clean boundaries

This is foundational in backend systems (Spring, NestJS, Angular, etc).

---

## How React Uses DI (Indirectly)

React Context is basically a DI system.

Instead of passing props down 10 levels:

```
<UserContext.Provider value={user}>
```

Components consume it:

```
const user = useContext(UserContext);
```

The component does NOT create `user`.  
It receives it.

That’s dependency injection.

---

## Important Nuance

Context does NOT manage state.

It just injects dependencies into the tree.

That’s why earlier I said:  
Context is dependency distribution — not state architecture.

---

# 2️⃣ React Fiber

Now let’s shift gears.

Fiber is internal to React.

To understand it, first understand the problem it solved.

---
