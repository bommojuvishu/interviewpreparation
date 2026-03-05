# Implementing `forEach`, `map`, and `reduce` from Scratch

Most JavaScript array methods follow the same internal pattern:

1.  Iterate through the array
2.  Execute a callback
3.  Decide what to do with the result

Let’s implement **`forEach`**, **`map`**, and **`reduce`** to see how they differ.

---

# 1\. Implementing `forEach`

`forEach` simply runs a function on every element.

It **does not return anything**.

```js
Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const length = arr.length >>> 0;

  for (let i = 0; i < length; i++) {
    if (i in arr) {
      callback(arr[i], i, arr);
    }
  }
};
```

### Usage

```js
const arr = [1, 2, 3];

arr.myForEach((value, index) => {
  console.log(value, index);
});
```

Output

```
1 0
2 1
3 2
```

Key idea:

> `forEach` ignores the callback return value.

---

# 2\. Implementing `map`

`map` transforms each element and returns a **new array**.

```js
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const length = arr.length >>> 0;

  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in arr) {
      result[i] = callback(arr[i], i, arr);
    }
  }

  return result;
};
```

### Usage

```js
const numbers = [1, 2, 3];

const doubled = numbers.myMap((n) => n * 2);

console.log(doubled);
```

Output

```
[2,4,6]
```

Key idea:

> `map` stores the callback result in a new array.

---

# 3\. Implementing `reduce`

`reduce` accumulates values into a **single result**.

```js
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const length = arr.length >>> 0;

  let accumulator;
  let startIndex = 0;

  if (arguments.length > 1) {
    accumulator = initialValue;
  } else {
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};
```

### Usage

```js
const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, curr) => acc + curr, 0);

console.log(sum);
```

Output

```
10
```

Key idea:

> `reduce` feeds the callback result back into the next iteration.

---

# The Core Difference

All three methods use the **same loop pattern**.

| Method    | What happens with callback result |
| --------- | --------------------------------- |
| `forEach` | ignored                           |
| `map`     | stored in new array               |
| `reduce`  | becomes next accumulator          |

Internally they all look like this:

```
iterate array
   ↓
execute callback
   ↓
handle result differently
```

---

---

# Final Insight

Once you understand the internal pattern of these three methods, most of the JavaScript array API becomes predictable.

Methods like:

- `filter`
- `some`
- `every`
- `flatMap`

are simply **variations of the same iteration pattern**.

Understanding this is far more valuable than just memorizing syntax.
