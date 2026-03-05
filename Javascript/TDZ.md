# TDZ - Temporal Dead Zone

It’s not about time in seconds.  
It’s about **execution order during scope creation**.

---

## The Core Truth

When JavaScript enters a scope:

1.  It creates memory for variables.
2.  `var` → initialized with `undefined`.
3.  `let` and `const` → **created but NOT initialized**.

The time between:

- scope creation  
  and
- actual initialization line

is the **Temporal Dead Zone (TDZ)**.

Accessing the variable in that window → **ReferenceError**.

---

### Exmaple

```js
console.log(a);
var a = 10;

console.log(b);
let b = 20;
```

### Subtle Example (Interview Favorite)

```js
let x = 1;

{
  console.log(x); // ❌ ReferenceError
  let x = 2;
}
```
