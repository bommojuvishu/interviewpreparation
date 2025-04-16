# Dijkstra vs Prim Algorithms

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 4/16/2025 8:52  
**Updated:** 4/16/2025 8:52  
**Exported:** 4/16/2025 9:13  

## Prompt:
Dijkstra Algorithm and Prims algo difference in code wise

## Response:
Dijkstra's Algorithm and Prim's Algorithm are **very similar** in terms of their structure and both use a **greedy approach** with a **priority queue**, but their goals are different:

*   **Dijkstra's Algorithm**: Finds the **shortest path** from a source node to all other nodes.
    
*   **Prim's Algorithm**: Finds a **Minimum Spanning Tree (MST)** of a graph.
    

* * *

Here’s a **code-wise comparison** using **Python with `heapq`**:

* * *

### ✅ Dijkstra's Algorithm

```python
import heapq

def dijkstra(graph, start):
    n = len(graph)
    dist = [float('inf')] * n
    dist[start] = 0
    pq = [(0, start)]  # (distance, node)

    while pq:
        current_dist, u = heapq.heappop(pq)
        if current_dist > dist[u]:
            continue
        for v, weight in graph[u]:
            if dist[v] > dist[u] + weight:
                dist[v] = dist[u] + weight
                heapq.heappush(pq, (dist[v], v))
    
    return dist
```

> **Input format**: `graph[u] = [(v1, weight1), (v2, weight2), ...]`  
> **Output**: Shortest distance from `start` to all nodes

* * *

### ✅ Prim's Algorithm

```python
import heapq

def prim(graph):
    n = len(graph)
    visited = [False] * n
    mst_cost = 0
    pq = [(0, 0)]  # (weight, node)

    while pq:
        weight, u = heapq.heappop(pq)
        if visited[u]:
            continue
        visited[u] = True
        mst_cost += weight

        for v, w in graph[u]:
            if not visited[v]:
                heapq.heappush(pq, (w, v))

    return mst_cost
```

> **Input format**: `graph[u] = [(v1, weight1), (v2, weight2), ...]`  
> **Output**: Total cost of Minimum Spanning Tree

* * *

### 🔍 Key Differences in Code

| Aspect | Dijkstra | Prim |
| --- | --- | --- |
| Goal | Shortest path from source to all nodes | Build MST (connect all nodes with min cost) |
| Priority Queue Key | Distance from source | Edge weight |
| Visited Check | Only if new distance is smaller | Simple visited check to avoid cycles |
| Update Condition | `dist[v] > dist[u] + weight` | `if not visited[v]` |
| Output | Distance array | Total MST cost |

* * *

Let me know if you want this in C++, Java, or with adjacency matrix format.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)