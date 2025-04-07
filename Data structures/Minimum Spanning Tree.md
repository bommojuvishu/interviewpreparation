# Minimum Spanning Tree Algorithms

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 4/3/2025 23:03  
**Updated:** 4/3/2025 23:14  
**Exported:** 4/3/2025 23:17  

## Prompt:
Minimum Spanning Tree

## Response:
A **Minimum Spanning Tree (MST)** is a subset of edges in a connected, weighted, and undirected graph that connects all the vertices with the minimum possible total edge weight and without forming any cycles.

### **Key Properties of MST**

1.  **Spanning**: It includes all the vertices of the graph.
    
2.  **Tree**: It is acyclic (does not contain cycles).
    
3.  **Minimum Weight**: The sum of all edge weights in the MST is the smallest possible.
    

### **Applications of MST**

*   Network design (e.g., laying cables, road networks)
    
*   Clustering in machine learning
    
*   Image segmentation in computer vision
    
*   Approximation algorithms for NP-hard problems (e.g., Traveling Salesman Problem)
    

* * *

### **Algorithms to Find MST**

#### **1\. Kruskal’s Algorithm (Greedy Approach)**

*   Sort all edges by weight.
    
*   Use a **Disjoint Set (Union-Find)** data structure.
    
*   Add the smallest edge to the MST unless it forms a cycle.
    
*   Continue until we have  $V - 1$  edges (where  $V$  is the number of vertices).
    

**Time Complexity**:  $O(E \log E)$  (due to sorting)

#### **2\. Prim’s Algorithm (Greedy Approach)**

*   Start from an arbitrary node.
    
*   Use a **Priority Queue (Min-Heap)** to always pick the smallest edge connecting to the MST.
    
*   Add edges one by one, ensuring no cycles.
    

**Time Complexity**:  $O(E + V \log V)$  (using a priority queue)

* * *

### **Example of Kruskal's Algorithm**

**Graph Input**:

```
  A --(1)-- B
  A --(3)-- C
  B --(3)-- C
  B --(6)-- D
  C --(4)-- D
```

**Steps**:

1.  Sort edges: (A-B,1), (A-C,3), (B-C,3), (C-D,4), (B-D,6)
    
2.  Pick (A-B), (A-C), (C-D) → **MST weight = 1 + 3 + 4 = 8**
    

* * *

Want an implementation in Python? 🚀

## Prompt:
yes

## Response:
Here's an implementation of **Kruskal's Algorithm** and **Prim's Algorithm** in Python to find the **Minimum Spanning Tree (MST)**.

Mst Kruskal Prim

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

58

59

60

61

62

63

class DisjointSet:

def \_\_init\_\_(self, n):

self.parent \= list(range(n))

self.rank \= \[0\] \* n

def find(self, u):

if self.parent\[u\] != u:

self.parent\[u\] \= self.find(self.parent\[u\]) \# Path compression

return self.parent\[u\]

def union(self, u, v):

rootU \= self.find(u)

rootV \= self.find(v)

if rootU != rootV:

if self.rank\[rootU\] \> self.rank\[rootV\]:

self.parent\[rootV\] \= rootU

elif self.rank\[rootU\] < self.rank\[rootV\]:

self.parent\[rootU\] \= rootV

else:

self.parent\[rootV\] \= rootU

self.rank\[rootU\] += 1

  

def kruskal\_mst(n, edges):

edges.sort(key\=lambda x: x\[2\]) \# Sort edges by weight

ds \= DisjointSet(n)

mst \= \[\]

mst\_cost \= 0

for u, v, weight in edges:

if ds.find(u) != ds.find(v):

ds.union(u, v)

mst.append((u, v, weight))

mst\_cost += weight

return mst, mst\_cost

  

import heapq

from collections import defaultdict

  

def prim\_mst(n, graph):

visited \= set()

min\_heap \= \[(0, 0)\] \# (weight, vertex)

mst \= \[\]

mst\_cost \= 0

while len(visited) < n and min\_heap:

weight, u \= heapq.heappop(min\_heap)

if u in visited:

continue

visited.add(u)

mst\_cost += weight

for v, w in graph\[u\]:

if v not in visited:

heapq.heappush(min\_heap, (w, v))

return mst\_cost

  

\# Example Usage

graph\_edges \= \[

(0, 1, 1), (0, 2, 3), (1, 2, 3), (1, 3, 6), (2, 3, 4)

\]

n \= 4

### Explanation:

1.  **Kruskal's Algorithm**:
    
    *   Uses a **disjoint-set (union-find)** to track connected components.
        
    *   Sorts edges by weight and adds the smallest edge that doesn’t form a cycle.
        
2.  **Prim’s Algorithm**:
    
    *   Uses a **priority queue (min-heap)** to always pick the smallest edge.
        
    *   Starts from any vertex and grows the MST.
        

This code will print the **MST edges and cost** for Kruskal's and **MST cost** for Prim's algorithm. 🚀 Let me know if you need modifications!

## Prompt:
explain with an example

## Response:
Let's go step by step with an example to understand both **Kruskal's Algorithm** and **Prim's Algorithm** in finding the **Minimum Spanning Tree (MST).**

* * *

**Example Graph**
-----------------

Consider the following weighted graph:

```
    (1)
  0 ---- 1
   |  \   |
  (3)  (3)(6)
   |      |
   2 ---- 3
     (4)
```

### **Graph Representation**

We represent this graph as a list of edges:

| Edge | Weight |
| --- | --- |
| (0,1) | 1 |
| (0,2) | 3 |
| (1,2) | 3 |
| (1,3) | 6 |
| (2,3) | 4 |

* * *

**Kruskal’s Algorithm (Edge-Based Approach)**
---------------------------------------------

### **Steps**

1.  **Sort the edges by weight**:
    
    ```
    (0,1,1), (0,2,3), (1,2,3), (2,3,4), (1,3,6)
    ```
    
2.  **Start picking edges** (smallest first) **while ensuring no cycles**:
    
    *   Pick **(0,1,1)** → No cycle → Add to MST
        
    *   Pick **(0,2,3)** → No cycle → Add to MST
        
    *   Pick **(1,2,3)** → **Forms a cycle** (0-1-2) → Skip
        
    *   Pick **(2,3,4)** → No cycle → Add to MST
        

### **Final MST**

Edges: **(0,1,1), (0,2,3), (2,3,4)**  
**Total Cost**: **1 + 3 + 4 = 8**

* * *

**Prim’s Algorithm (Vertex-Based Approach)**
--------------------------------------------

### **Steps**

1.  **Start from vertex 0**.
    
2.  Pick the smallest edge connected to MST at each step.
    
3.  **Process**:
    
    *   Start at **0**, pick **(0,1,1)** → MST Cost = **1**
        
    *   Next smallest edge **(0,2,3)** → MST Cost = **1 + 3 = 4**
        
    *   Next smallest edge **(2,3,4)** → MST Cost = **4 + 4 = 8**
        

### **Final MST**

Edges: **(0,1,1), (0,2,3), (2,3,4)**  
**Total Cost**: **8**

* * *

**Comparison**
--------------

| Algorithm | Approach | Time Complexity | Best for |
| --- | --- | --- | --- |
| **Kruskal** | Edge-based (Sort & Merge) |  $O(E \log E)$  | Sparse Graphs |
| **Prim** | Vertex-based (Heap) |  $O(E + V \log V)$  | Dense Graphs |

* * *

### **Output from Code**

When you run the Python program with the above example, it will output:

```
Kruskal's MST: ([(0, 1, 1), (0, 2, 3), (2, 3, 4)], 8)
Prim's MST Cost: 8
```

Both algorithms find the **same MST with total cost 8**. 🎯  
Let me know if you have any questions! 🚀



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)