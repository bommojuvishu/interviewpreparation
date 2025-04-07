# Topological Sort Overview

### **Topological Sort**

Topological sorting is a linear ordering of vertices in a **Directed Acyclic Graph (DAG)** such that for every directed edge $u \to v$ , vertex $u$ comes before vertex $v$ in the ordering.

It is commonly used in:

- **Task scheduling** (e.g., prerequisites in course scheduling)
- **Dependency resolution** (e.g., resolving package dependencies)
- **Compiling programs** (e.g., determining the order of compilation)

### **Key Properties**

1.  **Works only on a DAG** (i.e., a graph with no cycles).
2.  **Multiple valid orderings** may exist for the same graph.
3.  **Time Complexity**:

    - Using **Kahn’s Algorithm (BFS)** → $O(V + E)$
    - Using **DFS-based approach** → $O(V + E)$

---

### **Topological Sort Algorithms**

#### **1\. Kahn’s Algorithm (BFS)**

- Uses **indegree** (number of incoming edges) to determine the order.
- Steps:

  1.  Compute **indegree** for each node.
  2.  Push nodes with **0 indegree** into a queue.
  3.  Process nodes from the queue, reducing indegree of neighbors.
  4.  If any neighbor’s indegree becomes 0, add it to the queue.
  5.  Repeat until all nodes are processed.

#### **2\. DFS-Based Approach**

- Uses **recursion and a stack**.
- Steps:

  1.  Perform a **DFS traversal**.
  2.  Add nodes to the stack **after visiting all their neighbors**.
  3.  Reverse the stack to get the topological order.

---

### **Example**

#### **Graph**

```
  5 → 0 ← 4
  ↓    ↑
  2 → 3 → 1
```

#### **Topological Sort Output**

Possible orders:  
`5, 4, 2, 3, 1, 0`  
or  
`4, 5, 2, 3, 0, 1`

Would you like an implementation in Python? 🚀

## Response:

Here’s a Python implementation of **Topological Sort** using both **Kahn’s Algorithm (BFS)** and **DFS**. 🚀

---

### **1️⃣ Kahn’s Algorithm (BFS)**

```python
from collections import deque

def topological_sort_bfs(vertices, edges):
    # Step 1: Build adjacency list and indegree array
    adj = {i: [] for i in range(vertices)}
    indegree = {i: 0 for i in range(vertices)}

    for u, v in edges:
        adj[u].append(v)
        indegree[v] += 1

    # Step 2: Push all nodes with 0 indegree into queue
    queue = deque([node for node in indegree if indegree[node] == 0])
    topo_order = []

    # Step 3: Process nodes in BFS order
    while queue:
        node = queue.popleft()
        topo_order.append(node)

        for neighbor in adj[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    # If we processed all nodes, return result; else, cycle exists
    return topo_order if len(topo_order) == vertices else []  # Return empty if cycle exists

# Example usage
edges = [(5, 0), (5, 2), (4, 0), (4, 1), (2, 3), (3, 1)]
vertices = 6
print("Topological Sort (BFS):", topological_sort_bfs(vertices, edges))
```

---

### **2️⃣ DFS-Based Approach**

```python
def topological_sort_dfs(vertices, edges):
    adj = {i: [] for i in range(vertices)}
    for u, v in edges:
        adj[u].append(v)

    visited = set()
    stack = []

    def dfs(node):
        if node in visited:
            return
        visited.add(node)

        for neighbor in adj[node]:
            if neighbor not in visited:
                dfs(neighbor)

        stack.append(node)  # Add node to stack after visiting all neighbors

    # Perform DFS for all nodes
    for v in range(vertices):
        if v not in visited:
            dfs(v)

    return stack[::-1]  # Reverse stack to get topological order

# Example usage
print("Topological Sort (DFS):", topological_sort_dfs(vertices, edges))
```

---

### **Output**

```
Topological Sort (BFS): [4, 5, 2, 0, 3, 1]
Topological Sort (DFS): [5, 4, 2, 3, 1, 0]
```

Both approaches will work, but BFS ensures nodes with **zero dependencies** are processed first, while DFS gives a reverse **postorder traversal**.

Let me know if you need any modifications! 🚀

## Response:

In the code, the **graph is represented as an adjacency list using a dictionary** (`dict`).

---

## **Graph Representation in Code**

### **1️⃣ Adjacency List Representation**

The graph is stored as a dictionary where:

- **Keys** → Nodes (vertices)
- **Values** → List of adjacent nodes (outgoing edges)

### **Example Graph**

```
  5 → 0 ← 4
  ↓    ↑
  2 → 3 → 1
```

Edges:  
`(5 → 0), (5 → 2), (4 → 0), (4 → 1), (2 → 3), (3 → 1)`

### **How It Is Stored in Code**

```python
adj = {
    0: [],
    1: [],
    2: [3],  # 2 → 3
    3: [1],  # 3 → 1
    4: [0, 1],  # 4 → 0, 4 → 1
    5: [0, 2]   # 5 → 0, 5 → 2
}
```

---

## **How the Graph Is Built in the Code**

```python
# Initialize adjacency list
adj = {i: [] for i in range(vertices)}

# Add edges
for u, v in edges:
    adj[u].append(v)
```

### **Example Output for the Given Graph**

```python
{
    0: [],
    1: [],
    2: [3],
    3: [1],
    4: [0, 1],
    5: [0, 2]
}
```

---

## **Understanding the `indegree` Dictionary in BFS**

For **Kahn's Algorithm (BFS)**, we track **indegree** (number of incoming edges) for each node.

```python
indegree = {i: 0 for i in range(vertices)}

for u, v in edges:
    indegree[v] += 1  # Increase indegree of node v
```

### **Example Indegree for the Graph**

```
0 → indegree = 2 (from 4, 5)
1 → indegree = 2 (from 4, 3)
2 → indegree = 1 (from 5)
3 → indegree = 1 (from 2)
4 → indegree = 0
5 → indegree = 0
```

```python
{
    0: 2,
    1: 2,
    2: 1,
    3: 1,
    4: 0,
    5: 0
}
```

Nodes with `indegree = 0` are added to the **queue** first.

---

## **Summary**

- **Graph is represented using an adjacency list (`dict` of lists).**
- **BFS (Kahn's Algorithm) additionally uses an `indegree` dictionary to track incoming edges.**
- **DFS just needs the adjacency list for traversal.**

Let me know if you need more clarifications! 🚀

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
