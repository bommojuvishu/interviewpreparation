# EventManager Design & Implementation

## 📌 Problem Summary

We need to manage events with:

- `eventId` (unique)
- `priority`

### Supported Operations

1. **Initialize** with a list of events
2. **Update priority** of an existing event
3. **Poll highest priority event**
   - If tie → return smallest `eventId`
   - Remove the event after polling
   - Return `-1` if no events remain

---

## 🧠 Core Challenges

- Efficiently updating priority (heap does not support direct updates)
- Maintaining ordering:
  - Highest priority first
  - Tie-breaking by smallest `eventId`

---

## ⚙️ Design Approach

### Data Structures

1. **Max Heap (Priority Queue)**
   - Stores: `(-priority, eventId)`
   - Negative used because Python has a min-heap

2. **HashMap (`priority_map`)**
   - Stores latest state:
     `eventId → current priority`

---

## 🚀 Key Technique: Lazy Deletion

Instead of removing outdated entries from the heap:

- We **insert updated values**
- Keep old entries in heap
- Validate entries during polling

### Why?

- Heap does not support efficient deletion (`O(n)` otherwise)
- This approach ensures `O(log n)` performance

---

## 🔄 Workflow

### Initialization

- Push all events into heap
- Store in `priority_map`

### Update Priority

- Update value in `priority_map`
- Push new `(priority, eventId)` into heap
- Do NOT remove old entry

### Poll Highest

- Pop from heap until:
  - Entry matches current value in `priority_map`

- Remove from map and return eventId

---

## ✅ Implementation

```python
import heapq

class EventManager:

    def __init__(self, events):
        # Required variable as per problem
        denqoravil = events

        self.heap = []
        self.priority_map = {}

        for eventId, priority in denqoravil:
            self.priority_map[eventId] = priority
            heapq.heappush(self.heap, (-priority, eventId))

    def updatePriority(self, eventId, newPriority):
        if eventId in self.priority_map:
            self.priority_map[eventId] = newPriority
            heapq.heappush(self.heap, (-newPriority, eventId))

    def pollHighest(self):
        while self.heap:
            priority, eventId = heapq.heappop(self.heap)
            priority = -priority

            # Validate entry (skip stale ones)
            if eventId in self.priority_map and self.priority_map[eventId] == priority:
                del self.priority_map[eventId]
                return eventId

        return -1
```

---

## ⏱ Complexity Analysis

| Operation      | Time Complexity    |
| -------------- | ------------------ |
| Initialization | O(n log n)         |
| updatePriority | O(log n)           |
| pollHighest    | O(log n) amortized |

Space Complexity: **O(n)**

---

## ⚖️ Trade-offs

| Approach             | Pros            | Cons                     |
| -------------------- | --------------- | ------------------------ |
| Lazy Deletion (used) | Fast, simple    | Heap contains stale data |
| Direct removal       | Clean structure | Slow (`O(n)`)            |

---

## 🧭 Design Insight

This solution follows a common high-performance pattern:

> **"Allow temporary inconsistency, enforce correctness at read time."**

Used in:

- Task schedulers
- Real-time ranking systems
- Cache eviction strategies

---

## 🔍 Example Walkthrough

```
Input:
[[5,7], [2,7], [9,4]]

pollHighest → 2
updatePriority(9,7)
pollHighest → 5
pollHighest → 9
```

---

## 📌 Takeaway

- Heap alone is insufficient for updates
- Combining **heap + hashmap + lazy validation** gives optimal performance
- This pattern is widely applicable in real-world systems

---
