# 1️⃣ Inline Styles (JS Object)

Use when:

- Style depends on props/state

- You need quick dynamic styling

- Small components

```js
function Button() {
  return (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "5px",
      }}
    >
      Click Me
    </button>
  );
}
```

# Conditional Styling (Important in Interviews)

```js
<button className={`btn ${isActive ? "active" : ""}`}>Click</button>
```
