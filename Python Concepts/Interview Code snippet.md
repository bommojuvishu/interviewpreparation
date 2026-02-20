## Problem

```py
def add_item(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst

add_item(1)        # should return [1]
add_item(2)        # should return [2], not [1, 2]

```

## Response:

Here’s the **tight, interview-ready explanation**:

```py
def add_item(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst
```

**Why this pattern is used:**

- Default arguments in Python are evaluated **once** at function definition time.
- Using a mutable default like `[]` would be **shared across calls**.
- `None` is immutable and safe as a default.

**What happens:**

- If no list is passed, `lst` is `None`
- A **new list** is created inside the function
- Each call gets its **own list**

**One-liner for interviews:**

> “Using `None` avoids shared mutable defaults and ensures a fresh list per call.”

That’s all they’re looking for.
