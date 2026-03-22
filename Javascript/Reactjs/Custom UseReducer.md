# Retry Logic Fix

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 3/19/2026 17:02:59  
**Updated:** 3/19/2026 17:18:02  
**Exported:** 3/19/2026 17:19:05  
**Link:** [https://chatgpt.com/c/69bbdeea-0494-8322-be81-bda530c9678e](https://chatgpt.com/c/69bbdeea-0494-8322-be81-bda530c9678e)  

## Response:
Here’s a **clean, structured, repo-ready document** you can drop into your project (README or `/docs/useReducer.md`).

* * *

Re-implementation of `useReducer` (Conceptual)
==============================================

Overview
--------

This document demonstrates a simplified, conceptual re-implementation of React’s `useReducer` hook.

The goal is **not to replicate React internals**, but to understand:

*   How state persists across renders
*   How dispatch updates state via a reducer
*   Why re-rendering is necessary

* * *

Problem Statement
-----------------

Implement a simplified version of `useReducer` that:

*   Accepts a `reducer(state, action)` function
*   Stores state across renders
*   Returns `[state, dispatch]`
*   Updates state using the reducer when `dispatch` is called
*   Triggers a re-render after every state update

* * *

Core Idea
---------

React hooks rely on two key mechanisms:

1.  **Persistent storage across renders**
2.  **Re-execution of the component on state updates**

Since we don’t have React’s rendering engine, we simulate both.

* * *

Basic Implementation (Single Hook)
----------------------------------

```
// Global state store (simulating React internals)
let stateStore;
let renderFn;

function useReducer(reducer, initialState) {
  // Initialize state only once
  if (stateStore === undefined) {
    stateStore = initialState;
  }

  function dispatch(action) {
    stateStore = reducer(stateStore, action);
    render(); // trigger re-render
  }

  return [stateStore, dispatch];
}

// Simulated render system
function render() {
  renderFn();
}
```

* * *

Example Reducer
---------------

```
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

* * *

Example Usage
-------------

```
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  console.log("Render:", state);

  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
}
```

```
// Attach render function
let app;

renderFn = () => {
  app = App();
};

// Initial render
render();

// Simulate user actions
app.increment();
app.increment();
app.decrement();
```

* * *

Expected Output
---------------

```
Render: { count: 0 }
Render: { count: 1 }
Render: { count: 2 }
Render: { count: 1 }
```

* * *

Limitations of This Implementation
----------------------------------

This is a **learning model**, not a production-ready system.

### 1\. Supports only one hook

*   Uses a single global state variable

### 2\. No batching

*   Every dispatch triggers an immediate re-render

### 3\. No scheduling

*   React can prioritize updates; this cannot

### 4\. No reconciliation (Fiber)

*   Entire “component” re-runs every time

* * *

Improved Version (Multiple Hooks Support)
-----------------------------------------

This version simulates how React tracks hooks using an index.

```
let hooks = [];
let currentIndex = 0;
let renderFn;

function useReducer(reducer, initialState) {
  const hookIndex = currentIndex;

  if (hooks[hookIndex] === undefined) {
    hooks[hookIndex] = initialState;
  }

  function dispatch(action) {
    hooks[hookIndex] = reducer(hooks[hookIndex], action);
    render();
  }

  currentIndex++;

  return [hooks[hookIndex], dispatch];
}

function render() {
  currentIndex = 0; // reset before each render
  renderFn();
}
```

* * *

Key Learnings
-------------

*   Hooks rely on **call order, not names**
*   State is stored **outside the component function**
*   `dispatch` does not mutate UI — it **triggers re-execution**
*   Each render reads from a **stable state source**

* * *

When to Use `useReducer` in Real Apps
-------------------------------------

Use `useReducer` when:

*   State transitions are complex
*   Multiple related state updates depend on previous state
*   You want predictable, centralized state logic

Avoid it when:

*   State is simple → prefer `useState`

* * *

Final Thought
-------------

The real value of this exercise is understanding:

> React is not “updating variables” — it is **re-running your component with new state**.

* * *

If you want to level this up further, the next logical step is:

*   Implement `useState` on top of this system
*   Add `useEffect` with dependency tracking
*   Build a tiny “React-like runtime”

That combination demonstrates deeper understanding than most engineers show in interviews.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)