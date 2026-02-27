# Redux vs Context API

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 2/27/2026 8:18:46  
**Updated:** 2/27/2026 8:20:41  
**Exported:** 2/27/2026 8:22:18  
**Link:** [https://chatgpt.com/c/69a10601-1bc0-8321-8658-7a4032772128](https://chatgpt.com/c/69a10601-1bc0-8321-8658-7a4032772128)

## Response:

---

# 1️⃣ How **Context API** Actually Works

### Mental Model

`Context` is a **dependency injection mechanism**, not a state manager.

It allows you to:

- Create a context
- Provide a value at a high level
- Consume it anywhere below in the tree
- Trigger re-renders when the `value` reference changes

### Internal Flow

1.  `createContext()`
2.  `<Context.Provider value={...}>`
3.  React stores this value in Fiber tree.
4.  Any consumer (`useContext`) subscribes to it.
5.  When the `value` changes (reference changes), **all consumers re-render**.

### Example

```
const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}
```

### What Actually Happens in React Fiber?

- Each consuming component registers as a dependency.
- When provider value changes, React marks those fibers for re-render.
- There’s no selective subscription — unless you memoize and split contexts.

---

## ⚠️ The Core Limitation

Context re-renders **every consumer** when value changes.

If you store:

```
value={{ user, cart, notifications }}
```

Changing `cart` → components using only `user` still re-render.

You can optimize — but you must architect carefully.

---

# 2️⃣ How **Redux** Works (Modern Redux Toolkit)

Redux is **an external store with subscription granularity**.

### Mental Model

Redux =

- Single immutable store
- Pure reducers
- Explicit dispatch
- Selective subscriptions

### Flow

1.  Component dispatches action
2.  Reducer produces new state
3.  Store notifies subscribers
4.  `useSelector` compares selected slice (shallow compare)
5.  Only components whose slice changed re-render

### Example

```
const user = useSelector(state => state.user);
```

If `cart` updates → this component does NOT re-render.

That’s the critical architectural difference.

---

# 🔎 Architectural Difference

| Feature                  | Context API          | Redux                             |
| ------------------------ | -------------------- | --------------------------------- |
| Purpose                  | Dependency injection | Predictable state container       |
| Subscription granularity | Entire value         | Per selector                      |
| Middleware               | No                   | Yes                               |
| DevTools                 | No                   | Yes                               |
| Async handling           | Manual               | Built-in (thunk, saga, RTK query) |
| Boilerplate              | Low                  | Medium (low with RTK)             |
| Performance scaling      | Weak for large apps  | Designed for scale                |

---
