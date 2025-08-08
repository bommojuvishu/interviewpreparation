# Bellman-Ford Algorithm Explanation

## Prompt:

Bellman-Ford algorithm

## Response:

The **Bellman-Ford algorithm** is a classic algorithm used in **graph theory** to find the **shortest path** from a single source vertex to all other vertices in a **weighted graph**. It works even when some of the edge weights are **negative**, which is something **Dijkstra's algorithm** cannot handle.

---

### 🔍 Key Features

- Works on **directed or undirected** graphs.
- Can handle **negative weights**.
- Detects **negative weight cycles** (a cycle whose total weight is negative).
- Time Complexity: **O(V × E)** where V = number of vertices and E = number of edges.

---

### 🧠 Algorithm Steps

1.  Initialize distances:

    - Set distance to source as 0.
    - Set distance to all other vertices as ∞ (infinity).

2.  Relax all edges **V - 1** times:

    - For each edge (u, v) with weight w:

      - If `distance[u] + w < distance[v]`, then update `distance[v] = distance[u] + w`.

3.  Detect negative weight cycle:

    - Repeat the same loop one more time. If any distance still gets updated, there’s a negative weight cycle.

---

### 🧾 Pseudocode

```python
def bellman_ford(graph, V, E, src):
    # Step 1: Initialize distances
    dist = [float("inf")] * V
    dist[src] = 0

    # Step 2: Relax edges V - 1 times
    for _ in range(V - 1):
        for u, v, w in graph:
            if dist[u] != float("inf") and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    # Step 3: Check for negative-weight cycles
    for u, v, w in graph:
        if dist[u] != float("inf") and dist[u] + w < dist[v]:
            print("Graph contains a negative weight cycle")
            return

    print("Vertex Distance from Source")
    for i in range(V):
        print(f"{i}\t\t{dist[i]}")
```

---

### 📌 Example Input

```python
V = 5  # Number of vertices
E = 8  # Number of edges
graph = [
    (0, 1, -1),
    (0, 2, 4),
    (1, 2, 3),
    (1, 3, 2),
    (1, 4, 2),
    (3, 2, 5),
    (3, 1, 1),
    (4, 3, -3)
]

bellman_ford(graph, V, E, 0)
```

---

Want a visualization or real-time demo of how it works? Or do you want to convert this into C++/Java?

## Prompt:

visualization

## Response:

Awesome! Here's a **step-by-step visualization** of how the **Bellman-Ford algorithm** works on a sample graph. We’ll use this example graph:

---

### 🎯 Graph (Directed and Weighted)

```
     (0)
    /   \
  -1     4
  /       \
(1)---3--->(2)
 | \       ^
 2  2     /
 |   \   /
(4)<--3--(3)
     <-5--
```

### 🧾 Graph Representation

```
Vertices = 5
Edges:
(0 → 1, weight = -1)
(0 → 2, weight = 4)
(1 → 2, weight = 3)
(1 → 3, weight = 2)
(1 → 4, weight = 2)
(3 → 2, weight = 5)
(3 → 1, weight = 1)
(4 → 3, weight = -3)
```

---

### 🧠 Initialization

We start at **source vertex 0**.  
Initial distances:

| Vertex | Distance from 0 |
| ------ | --------------- |
| 0      | 0               |
| 1      | ∞               |
| 2      | ∞               |
| 3      | ∞               |
| 4      | ∞               |

---

### 🔁 Step 1: First iteration

Relax all edges:

- (0→1): 0 + (-1) = -1 → dist\[1\] = -1
- (0→2): 0 + 4 = 4 → dist\[2\] = 4
- (1→2): -1 + 3 = 2 → dist\[2\] = 2 ✅
- (1→3): -1 + 2 = 1 → dist\[3\] = 1
- (1→4): -1 + 2 = 1 → dist\[4\] = 1
- (3→2): 1 + 5 = 6 → ❌ no update
- (3→1): 1 + 1 = 2 → ❌ no update
- (4→3): 1 + (-3) = -2 → dist\[3\] = -2 ✅

New distances:

| Vertex | Distance |
| ------ | -------- |
| 0      | 0        |
| 1      | \-1      |
| 2      | 2        |
| 3      | \-2      |
| 4      | 1        |

---

### 🔁 Step 2: Second iteration

- (3→1): -2 + 1 = -1 → ❌ (same)
- (4→3): 1 + (-3) = -2 → ❌ (same)
- No further updates to any distances

✅ Distances stabilized, but we continue to check in the next 2 rounds.

---

### 🔁 Step 3: Third iteration

No updates → ✅

---

### 🔁 Step 4: Fourth iteration

No updates → ✅

---

### 🧪 Final check for negative weight cycle

No further updates → ✅ **No negative weight cycle**

---

### ✅ Final Shortest Distances from Source (0)

| Vertex | Distance |
| ------ | -------- |
| 0      | 0        |
| 1      | \-1      |
| 2      | 2        |
| 3      | \-2      |
| 4      | 1        |

---

Would you like this turned into an **animation or interactive visual** (web-based), or a **static diagram image** to understand better?

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
