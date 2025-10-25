# Backtracking DSO problems

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 10/6/2025 7:53:04  
**Updated:** 10/6/2025 7:55:05  
**Exported:** 10/12/2025 16:27:01  
**Link:** [https://chatgpt.com/c/68e327f7-1d04-8321-a4d0-62a5f0fd914b](https://chatgpt.com/c/68e327f7-1d04-8321-a4d0-62a5f0fd914b)  

## Prompt:
backtracking DSO problems with their leetcode links

## Response:
Here’s a **curated list of classic and important Backtracking problems for DSA**, especially useful for **FAANG & LeetCode interviews**, along with their **LeetCode links** 👇

I've grouped them by **difficulty & pattern**, so you can systematically practice them.

* * *

🧠 **1\. Permutations & Combinations (Core Backtracking)**
----------------------------------------------------------

These are the bread and butter of backtracking. Start here.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Permutations | LeetCode 46 | Generate all permutations of distinct numbers |
| Permutations II | LeetCode 47 | Handle duplicates while generating permutations |
| Combinations | LeetCode 77 | Choose k numbers out of n |
| Combination Sum | LeetCode 39 | Unlimited reuse of numbers to sum up to target |
| Combination Sum II | LeetCode 40 | Each number can be used once; handle duplicates |
| Combination Sum III | LeetCode 216 | Select k numbers from 1–9 to sum to n |
| Subsets | LeetCode 78 | Generate all subsets (power set) |
| Subsets II | LeetCode 90 | Handle duplicates while generating subsets |

👉 **Pattern**: Recursively choose or skip elements, use backtracking to explore all combinations.

* * *

🧩 **2\. String Backtracking**
------------------------------

These problems involve generating or exploring different string combinations.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Letter Combinations of a Phone Number | LeetCode 17 | DFS through digit-to-letter mappings |
| Generate Parentheses | LeetCode 22 | Build valid parentheses strings with backtracking |
| Palindrome Partitioning | LeetCode 131 | Partition string into all palindrome combinations |
| Restore IP Addresses | LeetCode 93 | Backtrack through valid IP splits |

👉 **Pattern**: Build strings step by step and prune invalid partial solutions early.

* * *

🧭 **3\. Board / Grid Problems (DFS + Backtracking)**
-----------------------------------------------------

These are more visual and slightly more challenging.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| N-Queens | LeetCode 51 | Place queens so that none attack each other |
| N-Queens II | LeetCode 52 | Count the number of solutions |
| Sudoku Solver | LeetCode 37 | Fill the Sudoku board using backtracking |
| Word Search | LeetCode 79 | Backtrack through the grid to find a word |
| Rat in a Maze (Not on LC but classic) | GfG Problem | Explore all paths from source to destination |

👉 **Pattern**: Explore the grid cell by cell, marking visited cells, and backtrack after exploring a path.

* * *

🌲 **4\. Advanced / Niche Backtracking**
----------------------------------------

These are often asked in interviews to test depth of understanding.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Word Search II | LeetCode 212 | Trie + Backtracking for multiple words |
| Restore IP Addresses | LeetCode 93 | Generate valid IP segments |
| Expression Add Operators | LeetCode 282 | Insert operators to reach target value |
| Reconstruct Itinerary | LeetCode 332 | Hierholzer’s + backtracking |

👉 **Pattern**: These problems usually involve pruning + additional data structures (Trie, arithmetic evaluation, graph traversal).

* * *

📌 **How to Practice Backtracking Efficiently**
-----------------------------------------------

1.  ✅ Start with **Permutations → Combinations → Subsets** → these give muscle memory.
2.  📜 Then move to **string-based problems** like Generate Parentheses & Palindrome Partitioning.
3.  🧭 Next, do **grid/board problems** (N-Queens, Sudoku, Word Search).
4.  🧠 Finally, attempt **Expression Add Operators** and Word Search II for advanced pruning logic.

* * *

Would you like me to give you a **recommended 2-week backtracking practice plan** (daily schedule with problem order)? 🗓️✨

## Prompt:
what about Graphs

## Response:
Great question, Vishwanath 👌  
**Backtracking in Graph problems** is slightly different from permutations/strings — it usually shows up in problems involving:

*   **Path finding / traversal with constraints**
*   **Hamiltonian paths / cycles**
*   **Graph coloring**
*   **Topological variations**
*   **Combination of DFS + backtrack (undo step)**

Below is a curated list of **important Graph + Backtracking problems** with their **LeetCode (or equivalent) links**, organized by category 👇

* * *

🧭 **1\. Path Finding in Graph / Grid (DFS + Backtracking)**
------------------------------------------------------------

| Problem | LeetCode Link | Key Idea |
| --- | --- | --- |
| Word Search | LeetCode 79 | Backtrack through 2D grid to find a path matching a word |
| Word Search II | LeetCode 212 | Use Trie + backtracking to find multiple words efficiently |
| Unique Paths III | LeetCode 980 | Count all unique paths visiting every non-obstacle cell exactly once (classic backtracking) |
| Rat in a Maze | GfG Problem | Classic path-finding problem using backtracking |
| All Paths From Source to Target | LeetCode 797 | Backtrack through DAG to find all possible paths |

👉 **Pattern**: DFS into neighbors, mark visited, recurse, and **unmark (backtrack)** after exploring each path.

* * *

🌐 **2\. Hamiltonian Paths / Cycles**
-------------------------------------

These problems are less common on LeetCode but show up in **FAANG graph rounds** and competitive programming.

| Problem | Link | Key Idea |
| --- | --- | --- |
| Hamiltonian Path in an Undirected Graph | GfG Problem | Backtracking to visit every vertex exactly once |
| Traveling Salesman Problem (TSP) | GfG Problem | Classic NP-hard backtracking problem to find minimum cost path visiting all nodes |

👉 **Pattern**: Explore all nodes recursively while maintaining visited state; exponential solutions with pruning.

* * *

🧠 **3\. Graph Coloring / Constraints Satisfaction**
----------------------------------------------------

| Problem | Link | Key Idea |
| --- | --- | --- |
| M-Coloring Problem | GfG Problem | Backtrack through each node and try assigning colors without violating constraints |
| N-Queens (technically a board but graph-coloring in disguise) | LeetCode 51 | Place queens such that no two attack (similar to coloring constraints) |

👉 **Pattern**: For each node, try a color → if valid, recurse → if not valid, backtrack. Very similar to Sudoku/N-Queens structure.

* * *

🧮 **4\. Cycle Detection / Backtrack to Build All Paths**
---------------------------------------------------------

| Problem | LeetCode Link | Key Idea |
| --- | --- | --- |
| Reconstruct Itinerary | LeetCode 332 | Hierholzer’s algorithm but with backtracking when multiple lexical choices exist |
| Find All Paths in Maze With Obstacles | Custom / GfG | Backtrack to explore all valid routes avoiding obstacles |
| Path With Maximum Gold | LeetCode 1219 | Backtrack to collect maximum gold — can't visit the same cell twice |

👉 **Pattern**: DFS + path recording + undo visited status after exploring each path.

* * *

📌 **How Backtracking Differs in Graph Problems**
-------------------------------------------------

| Classic Backtracking (Permutations) | Graph Backtracking |
| --- | --- |
| Works on arrays or strings | Works on adjacency lists or grids |
| Focus is on choosing/skipping | Focus is on **DFS traversal with visited states** |
| Usually explores combinations | Usually explores **paths** |
| Easy to prune duplicates | Must manage visited sets carefully to avoid cycles |

* * *

🚀 **Recommended Graph + Backtracking Practice Order**
------------------------------------------------------

1.  ✅ **All Paths From Source to Target** (LeetCode 797)
2.  ✅ **Unique Paths III** (LeetCode 980)
3.  ✅ **Word Search (79)** → **Word Search II (212)**
4.  🧠 **Hamiltonian Path** on GfG
5.  🧠 **M-Coloring Problem** → practice pruning
6.  🧠 **Traveling Salesman Problem (TSP)** for advanced recursion + memoization

* * *

⚡ Pro Tip
---------

When solving graph problems with backtracking:

*   Maintain a `visited` set or array
*   **Backtrack by unmarking** the visited node when returning
*   Add pruning conditions early (e.g., if current path length > n, return)
*   Many can be optimized to **DFS + memoization (DP)** after brute force works.

* * *

Would you like me to give you a **2-week Graph + Backtracking practice schedule** like I offered for general backtracking? 🗓️🔥

## Prompt:
what about Dynamic programming ?

## Response:
Excellent follow-up, Vishwanath 👌  
**Dynamic Programming (DP)** is arguably _the most important topic_ for FAANG and top-tier DSA interviews.  
While backtracking explores _all possibilities_, **DP optimizes by caching overlapping subproblems**, turning exponential problems into polynomial-time ones.

Here’s a **curated list of Dynamic Programming problems** (especially from LeetCode) grouped by **patterns** — this is how top candidates master DP 👇

* * *

🧱 **1\. 1D DP — Linear Problems**
----------------------------------

Start here. These are problems where the state depends on previous one(s).

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Fibonacci Number | LeetCode 509 | Classic base case for memoization / tabulation |
| Climbing Stairs | LeetCode 70 | `dp[i] = dp[i-1] + dp[i-2]` |
| Min Cost Climbing Stairs | LeetCode 746 | Bottom-up with min cost at each step |
| House Robber | LeetCode 198 | Choose rob or skip at each house |
| House Robber II | LeetCode 213 | Circular variant, split into two cases |
| Maximum Subarray (Kadane) | LeetCode 53 | `dp[i] = max(nums[i], nums[i] + dp[i-1])` |

👉 **Pattern**: `dp[i] = ... dp[i-1], dp[i-2], ...`  
Start with Fibonacci → Climbing Stairs → House Robber series → Kadane.

* * *

🧮 **2\. 2D DP — Grid Problems**
--------------------------------

These are classic interview favorites.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Unique Paths | LeetCode 62 | Paths to `(i,j)` = from top + from left |
| Unique Paths II (Obstacles) | LeetCode 63 | Similar but skip blocked cells |
| Minimum Path Sum | LeetCode 64 | Min sum at `(i,j)` depends on top/left |
| Dungeon Game | LeetCode 174 | Reverse DP from bottom-right |
| Maximal Square | LeetCode 221 | Square size at `(i,j)` depends on min of neighbors |
| Triangle | LeetCode 120 | Start from bottom, choose min adjacent path |

👉 **Pattern**: Usually `dp[i][j] = f(dp[i-1][j], dp[i][j-1], ...)`  
Bottom-up tabulation is often more natural than recursion here.

* * *

🎯 **3\. Subset / Knapsack Type Problems**
------------------------------------------

Very frequently asked — this is where many candidates get stuck.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Partition Equal Subset Sum | LeetCode 416 | 0/1 knapsack variant |
| Target Sum | LeetCode 494 | Convert to subset sum counting |
| Coin Change | LeetCode 322 | Min coins to reach amount |
| Coin Change II | LeetCode 518 | Count number of combinations |
| Subset Sum Problem | GfG Problem | Classic DP table of sums |
| Knapsack 0/1 | GfG Problem | Base knapsack |

👉 **Pattern**: `dp[i][target] = pick or skip`

*   For counting problems → **add both choices**
*   For min/max → **take min/max of both**

* * *

🧠 **4\. String DP (Very Important)**
-------------------------------------

A lot of **FAANG string problems use DP**. These test recursion + DP conversion.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Longest Common Subsequence | LeetCode 1143 | Classic 2D DP |
| Longest Palindromic Subsequence | LeetCode 516 | Reverse + LCS |
| Longest Palindromic Substring | LeetCode 5 | Expand or 2D DP |
| Edit Distance | LeetCode 72 | Insert/Delete/Replace recursion with DP |
| Distinct Subsequences | LeetCode 115 | Count subsequences of `s` matching `t` |
| Regular Expression Matching | LeetCode 10 | Top-down recursion on patterns |

👉 **Pattern**:

*   `dp[i][j]` = result for substring `s[i:]` vs `t[j:]`
*   Often solved recursively with memo first, then bottom-up.

* * *

🧮 **5\. Interval DP**
----------------------

Used for problems where the answer for `[i,j]` depends on **splitting the interval** somewhere.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Burst Balloons | LeetCode 312 | Split the interval to find max coins |
| Palindrome Partitioning II | LeetCode 132 | Min cuts using interval splits |
| Matrix Chain Multiplication | GfG Problem | Classic interval DP |

👉 **Pattern**: Recurrence of form `dp[i][j] = min over k (dp[i][k] + dp[k+1][j] + cost)`

* * *

📈 **6\. DP on Subsequences / LIS Variants**
--------------------------------------------

These test your ability to handle nested loops or optimized LIS.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Longest Increasing Subsequence | LeetCode 300 | Classic O(n²) or binary search |
| Russian Doll Envelopes | LeetCode 354 | Sort + LIS |
| Number of Longest Increasing Subsequences | LeetCode 673 | Count LIS ways |
| Maximum Length of Pair Chain | LeetCode 646 | Sort + LIS-like |

👉 **Pattern**: Sort input if needed → use `dp[i]` as LIS length ending at `i`.

* * *

🏆 **7\. Advanced / Optimization**
----------------------------------

For depth and FAANG level rounds.

| Problem | LeetCode Link | Pattern |
| --- | --- | --- |
| Regular Expression Matching | LeetCode 10 | Top-down DP with complex transitions |
| Interleaving String | LeetCode 97 | 3D-like DP with 2 strings |
| Best Time to Buy and Sell Stock series | 121, 122, 123, 188 | State machine DP |

* * *

📝 **Recommended DP Learning Order**
------------------------------------

1.  ✅ **1D Linear** → Fibonacci, Climbing Stairs, House Robber
2.  ✅ **2D Grid** → Unique Paths, Min Path Sum
3.  🧠 **Knapsack / Subset** → Partition Equal Subset Sum, Coin Change
4.  🧠 **String DP** → LCS, Edit Distance, Palindromic subsequences
5.  🚀 **LIS + Interval DP** → LIS, Burst Balloons, Matrix Chain
6.  🧠 **Stock problems / Regex** for mastery

* * *

⚡ Pro Tips for DP Mastery
-------------------------

*   Always **write the recursive relation** first (top-down), then convert to tabulation.
*   For every DP problem, identify:
    *   **State** → What parameters uniquely define subproblem?
    *   **Transition** → How does current state depend on sub-states?
    *   **Base cases**
    *   **Goal state** → What answer you need at the end.
*   Memorize **classic patterns**: Knapsack, LIS, LCS, Matrix DP — 90% of problems reduce to these.

* * *

Would you like me to give you a **4-week Dynamic Programming practice schedule** (progressive difficulty, daily problems)? 🗓️🔥



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)