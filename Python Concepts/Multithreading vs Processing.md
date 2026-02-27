---

# 🔹 What `concurrent.futures` Solves

Instead of manually managing:

- Thread lifecycle
- Process lifecycle
- Joins
- Error handling

You get:

- `ThreadPoolExecutor`
- `ProcessPoolExecutor`
- `Future` objects
- Built-in exception propagation

Cleaner. Safer. More maintainable.

---

# 1️⃣ ThreadPoolExecutor (I/O-bound)

Use when:

- API calls
- File operations
- DB queries
- Network calls

### Example: I/O-bound workload

```py
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

def fetch_data(n):
    time.sleep(2)  # simulate I/O
    return f"Result {n}"

def main():
    with ThreadPoolExecutor(max_workers=3) as executor:
        futures = [executor.submit(fetch_data, i) for i in range(5)]

        for future in as_completed(futures):
            print(future.result())

if __name__ == "__main__":
    main()
```

### Why this is good in interviews

- Uses context manager
- Uses `as_completed`
- Demonstrates result handling
- Clean shutdown

---

# 2️⃣ ProcessPoolExecutor (CPU-bound)

Use when:

- Heavy calculations
- Image processing
- Data transformation
- Anything GIL-bound

### Example: CPU-heavy task

```py
from concurrent.futures import ProcessPoolExecutor
import math

def heavy_compute(n):
    total = 0
    for i in range(10**7):
        total += math.sqrt(i)
    return total

def main():
    with ProcessPoolExecutor() as executor:
        results = executor.map(heavy_compute, [1, 2, 3, 4])
        for r in results:
            print(r)

if __name__ == "__main__":
    main()
```

Notice the `if __name__ == "__main__"` — critical for multiprocessing.

If you forget that in interviews, that’s a red flag.

---

# 3️⃣ Key Differences in Practice

| Executor            | Use Case  | GIL          | Memory |
| ------------------- | --------- | ------------ | ------ |
| ThreadPoolExecutor  | I/O-bound | Affected     | Low    |
| ProcessPoolExecutor | CPU-bound | Not affected | Higher |

---
