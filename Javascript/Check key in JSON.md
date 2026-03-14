# Check key in JSON

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 3/14/2026 17:23:47  
**Updated:** 3/14/2026 17:24:03  
**Exported:** 3/14/2026 17:26:18  
**Link:** [https://chatgpt.com/c/69b54c42-6758-8324-8ae5-65e26b759e26](https://chatgpt.com/c/69b54c42-6758-8324-8ae5-65e26b759e26)  

## Prompt:
Check if a key exists inside a JSON object - JavaScript

## Response:
In JavaScript, checking whether a **key exists in a JSON object** is really about checking a property on a normal JavaScript object (JSON becomes a JS object once parsed).

There are **three reliable patterns**, each useful in slightly different situations.

* * *

1\. Using `in` operator (very common)
-------------------------------------

```
const obj = {
  name: "John",
  age: 30
};

if ("name" in obj) {
  console.log("Key exists");
}
```

**Why this works**

*   Checks if the key exists **anywhere in the object**
*   Includes properties from the **prototype chain**

**Example**

```
console.log("age" in obj);   // true
console.log("salary" in obj); // false
```

**Trade-off**

If prototype properties matter, this might give unexpected `true`.

* * *

2\. Using `hasOwnProperty()` (safer for most cases)
---------------------------------------------------

```
const obj = {
  name: "John",
  age: 30
};

if (obj.hasOwnProperty("name")) {
  console.log("Key exists");
}
```

**Why engineers prefer this**

*   Checks **only the object's own keys**
*   Ignores prototype chain

Example:

```
console.log(obj.hasOwnProperty("age"));   // true
console.log(obj.hasOwnProperty("salary")); // false
```

**Best practice (modern style)**

```
Object.hasOwn(obj, "name")
```

This avoids edge cases where `hasOwnProperty` might be overridden.

* * *

3\. Checking against `undefined`
--------------------------------

```
if (obj.name !== undefined) {
  console.log("Key exists");
}
```

⚠️ **Problem**

This fails if the value itself is `undefined`.

```
const obj = { name: undefined };

obj.name !== undefined // false (but key exists)
```

So this method is **not reliable**.

* * *

Practical example with parsed JSON
----------------------------------

```
const json = '{"user":"vishwanath","role":"admin"}';
const data = JSON.parse(json);

if (Object.hasOwn(data, "user")) {
  console.log("User key exists");
}
```

* * *

My recommendation (clean + modern)
----------------------------------

For production code:

```
Object.hasOwn(obj, "key")
```

It is:

*   safer
*   explicit
*   avoids prototype pitfalls

* * *

💡 **Interview follow-up they often ask**

> How do you check nested keys like `user.address.city` safely?

Then the clean answer is:

```
obj?.user?.address?.city !== undefined
```

or using optional chaining.

* * *

If you'd like, I can also show **the 5 JSON/JS object interview problems FAANG companies love** (deep clone, flatten object, path lookup, etc.). They appear surprisingly often.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)