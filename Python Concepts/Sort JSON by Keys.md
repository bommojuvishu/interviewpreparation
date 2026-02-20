# Sort JSON by Keys

## Response:

Let’s keep this precise and practical.

### Problem

You have a **list of JSON objects (Python dicts)** and want to sort it using **two keys**, with control over priority and direction.

---

## Core Pattern (Correct & Pythonic)

### Example data

```python
data = [
    {"name": "A", "age": 30, "score": 90},
    {"name": "B", "age": 25, "score": 95},
    {"name": "C", "age": 25, "score": 85},
]
```

### Sort by **age (ASC)**, then **score (DESC)**

```python
sorted_data = sorted(
    data,
    key=lambda x: (x["age"], -x["score"])
)
```

### Result

```python
[
 {'name': 'B', 'age': 25, 'score': 95},
 {'name': 'C', 'age': 25, 'score': 85},
 {'name': 'A', 'age': 30, 'score': 90}
]
```

---

## Why this works (important detail)

- Python sorts **tuples left → right**
- First key decides primary order
- Second key breaks ties
- Use `-value` for descending **only on numeric fields**

---

## When keys may be missing (real-world safe)

If the JSON is not clean:

```python
sorted_data = sorted(
    data,
    key=lambda x: (
        x.get("age", float("inf")),
        -x.get("score", 0)
    )
)
```

This prevents runtime crashes.

---

## Mixed directions without hacks (cleaner for readability)

### Using multiple sorts (stable sort)

Python’s sort is **stable**, so this is valid and readable:

```python
data.sort(key=lambda x: x["score"], reverse=True)
data.sort(key=lambda x: x["age"])
```

Use this when:

- Code clarity matters
- Sorting logic evolves frequently

---

## Sorting strings + numbers together

Example: **country ASC**, **salary DESC**

```python
sorted_data = sorted(
    data,
    key=lambda x: (x["country"], -x["salary"])
)
```

---

## Strategic advice (don’t skip this)

- **Tuple-based key** → fastest & cleanest (default choice)
- **Multiple `.sort()` calls** → best for maintainability
- **Never sort inside loops**
- Validate missing keys early if JSON comes from APIs

---

### If you want

Tell me:

- Are keys **optional**?
- Are values **strings, numbers, dates**?
- Is this **API response, DB result, or in-memory processing**?

I’ll tailor the sorting logic to production-grade robustness.

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
