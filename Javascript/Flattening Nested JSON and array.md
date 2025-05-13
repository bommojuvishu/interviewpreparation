## Prompt:

flatten the nested json interview question

## Response:

Flattening a nested JSON object is a common interview question to test your knowledge of working with JSON structures and recursion. The goal is to convert a deeply nested JSON object into a flat object where nested keys are combined into a single key.

Here’s how you could flatten a nested JSON object in JavaScript:

### Example:

```javascript
function flatten(obj, prefix = "", result = {}) {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      flatten(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

const nestedJson = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: {
      code: "10001",
      extra: {
        detail: "Near the park",
      },
    },
  },
  age: 30,
};

const flattenedJson = flattenObject(nestedJson);
console.log(flattenedJson);
```

### Output:

```json
{
  "name": "John",
  "address.street": "123 Main St",
  "address.city": "New York",
  "address.zip.code": "10001",
  "address.zip.extra.detail": "Near the park",
  "age": 30
}
```

### 🔹 Basic Interview Question: Flatten a Nested Array

**Input:**

```javascript
const arr = [1, [2, [3, [4]], 5]];
```

**Expected Output:**

```javascript
[1, 2, 3, 4, 5];
```

---

### ✅ Solution 1: Using Recursion

```javascript
function flatten(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
```

---

### ✅ Solution 2: Using Stack (Iterative)

```javascript
function flatten(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item); // Spread to individual elements
    } else {
      result.push(item);
    }
  }

  return result.reverse(); // Because we used stack (LIFO)
}
```
