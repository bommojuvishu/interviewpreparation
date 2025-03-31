# Priority Queue

A Priority Queue is a special type of queue where elements are dequeued based on their priority rather than their order of arrival.

```python
import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []

    def push(self, item, priority):
        heapq.heappush(self.heap, (priority, item))  # Min-heap (smallest priority first)

    def pop(self):
        return heapq.heappop(self.heap)[1]  # Returns the item with the highest priority

    def peek(self):
        return self.heap[0][1] if self.heap else None  # Returns the highest-priority element

    def is_empty(self):
        return len(self.heap) == 0

# Example usage
pq = PriorityQueue()
pq.push("Task 1", 2)
pq.push("Task 2", 1)  # Higher priority (lower number)
pq.push("Task 3", 3)

print(pq.pop())  # Output: "Task 2" (since it has the highest priority)

```

## Implementations:

1.  **Using a Binary Heap** (Efficient)

    - Insert: O(log⁡n)O(\log n)O(logn)
    - Delete: O(log⁡n)O(\log n)O(logn)
    - Peek: O(1)O(1)O(1)

2.  **Using an Unsorted List** (Inefficient)

    - Insert: O(1)O(1)O(1)
    - Delete: O(n)O(n)O(n)

3.  **Using a Sorted List** (Moderate)

    - Insert: O(n)O(n)O(n)
    - Delete: O(1)O(1)O(1)

## Applications:

- **Dijkstra’s Algorithm** (Shortest Path)
- \__A_ Search Algorithm\_\* (Pathfinding)
- **CPU Scheduling** (Task Prioritization)
- **Event-driven Simulations**
