# Top JS Interview Snippets

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 2/26/2026 7:48:09  
**Updated:** 2/26/2026 7:52:16  
**Exported:** 2/26/2026 7:55:04  
**Link:** [https://chatgpt.com/c/699fad49-1b50-83a9-a569-20307f9b352f](https://chatgpt.com/c/699fad49-1b50-83a9-a569-20307f9b352f)

## Prompt:

top coding javascript snippet questions for the interview

## Response:

You’re preparing for serious frontend rounds (Agoda-level). So don’t just memorize snippets — understand _why they break_ and _where they fail at scale_. Below are the **high-frequency JavaScript snippet patterns** interviewers use to test depth, not syntax.

---

## 1️⃣ Closures + `var` vs `let`

```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

**Expected Output?** → `3 3 3`

Why?

- `var` is function-scoped.
- The callback closes over the same `i`.

Fix:

```
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Or IIFE pattern.

📌 What they're testing:

- Scope
- Closure memory model
- Event loop timing

---

## 2️⃣ Event Loop: Microtask vs Macrotask

```
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");
```

Output:

```
start
end
promise
timeout
```

Why?

- Synchronous first
- Microtasks (Promise)
- Macrotasks (setTimeout)

📌 They’re testing:

- Call stack
- Microtask queue priority
- Render cycle knowledge

If this isn’t instant for you — fix that first.

---

## 3️⃣ `this` Binding Traps

```
const obj = {
  name: "JS",
  getName() {
    return this.name;
  }
};

const fn = obj.getName;
console.log(fn());
```

Output → `undefined` (in strict mode)

Why?

- `this` depends on call site.
- Function extracted → global context.

Fix:

```
const fn = obj.getName.bind(obj);
```

📌 Testing:

- Execution context
- `bind`, `call`, `apply`
- Arrow vs normal functions

---

## 4️⃣ Hoisting Edge Case

```
console.log(a);
var a = 10;
```

Output → `undefined`

But:

```
console.log(b);
let b = 10;
```

→ ReferenceError (TDZ)

📌 Testing:

- Temporal Dead Zone
- Declaration vs initialization

---

## 5️⃣ Equality Trap

```
[] == ![]
```

Output → `true`

Why?

- `![]` → false
- `[] == false`
- Type coercion → `[]` → "" → 0
- `0 == 0`

📌 Testing:

- Abstract equality algorithm

If you can’t explain step-by-step coercion, interviewers push deeper.

---

## 6️⃣ Prototypal Inheritance

```
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi", this.name);
};

const p = new Person("Vish");
p.sayHi();
```

Know:

- Where `sayHi` lives?
- How lookup works?
- `__proto__` vs `prototype`
- Difference between class sugar and constructor functions

---

## 7️⃣ Promise Chain Behavior

```
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error("err") })
  .catch(() => 100)
  .then(x => console.log(x));
```

Output → `100`

They check:

- Error propagation
- Promise state transitions

---

## 8️⃣ Debounce Implementation

Common ask:

```
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

You must explain:

- Closure usage
- Why `apply`
- Memory implications

---

## 9️⃣ Deep vs Shallow Copy

```
const obj = { a: { b: 1 } };
const copy = { ...obj };
copy.a.b = 5;
console.log(obj.a.b); // ?
```

Output → `5`

Understand:

- Spread is shallow
- structuredClone vs JSON stringify vs manual recursion

---
