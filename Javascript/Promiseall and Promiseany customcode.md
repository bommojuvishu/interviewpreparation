## Prompt:

promiseAny custom code

## Response:

Here's a custom implementation of `Promise.any()` using `async/await` and basic promise handling.

---

### ✅ Behavior of `Promise.any()`

- Takes an array of promises.
- Resolves as soon as **any one promise resolves**.
- Rejects **only if all promises reject**, with an `AggregateError`.

---

### ✅ Custom `promiseAny` Implementation

```js
async function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    let rejections = [];
    let rejectedCount = 0;
    const total = iterable.length;

    if (total === 0) {
      reject(new AggregateError([], "All promises were rejected"));
      return;
    }

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value); // Resolve on first successful result
        })
        .catch((err) => {
          rejections[index] = err;
          rejectedCount++;
          if (rejectedCount === total) {
            reject(
              new AggregateError(rejections, "All promises were rejected")
            );
          }
        });
    });
  });
}
```

---

### 🧪 Test Case

```js
const p1 = Promise.reject("error 1");
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("success 2"), 100)
);
const p3 = Promise.reject("error 3");

try {
  const result = await promiseAny([p1, p2, p3]);
  console.log("Result:", result); // ✅ success 2
} catch (e) {
  console.error("Caught:", e); // ❌ only if all reject
}
```

---

### ℹ️ Edge Case: Empty Array

```js
await promiseAny([]); // ❌ throws AggregateError
```

---

Let me know if you want a `promiseAny` version using `async/await` inside a loop (not recommended, but possible for learning).

## Prompt:

how the code is different from the promiseAll

## Response:

Great follow-up! Let's break it down clearly:

---

### ✅ Core Difference Between `Promise.all` vs `Promise.any`:

| Feature       | `Promise.all`                  | `Promise.any`                                      |
| ------------- | ------------------------------ | -------------------------------------------------- |
| Resolves When | **All** promises resolve       | **Any one** promise resolves                       |
| Rejects When  | **Any one** promise rejects    | **All** promises reject                            |
| Reject Value  | The **first rejection reason** | An `AggregateError` with **all** rejection reasons |

---

### 🔍 Structural Differences in the Code

#### 1\. **Success Condition**

- **`promiseAll`** waits for _all_ to succeed:

  ```js
  if (completed === iterable.length) {
    resolve(results); // Only then resolve
  }
  ```

- **`promiseAny`** resolves on the _first success_:

  ```js
  .then((value) => {
    resolve(value); // Resolve immediately
  })
  ```

#### 2\. **Failure Condition**

- **`promiseAll`** rejects _on first failure_:

  ```js
  .catch((err) => {
    reject(err); // Fail early
  });
  ```

- **`promiseAny`** collects _all failures_, and only rejects if **none succeed**:

  ```js
  .catch((err) => {
    rejections[index] = err;
    rejectedCount++;
    if (rejectedCount === total) {
      reject(new AggregateError(rejections, "All promises were rejected"));
    }
  });
  ```

#### 3\. **Early Exit Behavior**

- `promiseAll` short-circuits on **first rejection**.
- `promiseAny` short-circuits on **first resolution**.

---

### 🧠 Summary (with Analogy)

- **`promiseAll`** is like: _"Everyone must agree (resolve), or else we fail (reject)."_
- **`promiseAny`** is like: _"If **anyone** agrees (resolves), we succeed. Only if **everyone** disagrees (rejects), we fail."_

---

Would you like a visual flowchart of both? Or a version that mimics `Promise.race` too?

## Prompt:

promiseAll code

## Response:

Here is a custom implementation of **`Promise.all`** from scratch, without using the built-in `Promise.all()`:

---

### ✅ Custom `promiseAll` Implementation

```js
async function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    const total = iterable.length;

    if (total === 0) {
      resolve([]); // handle empty iterable
      return;
    }

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value; // maintain order
          completed++;

          if (completed === total) {
            resolve(results); // all promises resolved
          }
        })
        .catch((err) => {
          reject(err); // reject on first failure
        });
    });
  });
}
```

---

### 🧪 Example Usage

```js
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 100));
const p3 = Promise.resolve(3);

try {
  const result = await promiseAll([p1, p2, p3]);
  console.log("All resolved:", result); // [1, 2, 3]
} catch (err) {
  console.error("Rejected:", err);
}
```

---

### ❌ Rejection Case

```js
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Oops");
const p3 = Promise.resolve(3);

try {
  const result = await promiseAll([p1, p2, p3]);
  console.log("All resolved:", result);
} catch (err) {
  console.error("Rejected:", err); // "Oops"
}
```

---

Let me know if you want a version with `async/await` and `for` loops (sequential style), or one that handles cancellation!

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
