# DP Top-Down vs Bottom-Up

## Prompt:

what is dynamic programming bottom up and top down approach

## Response:

Dynamic programming is applicable when a problem has

- **overlapping subproblems**
- **optimal substructure**.

There are **two main approaches** to implement dynamic programming:

---

### ✅ **Top-Down Approach (Memoization)**

- **Starts from the main problem** and breaks it into smaller subproblems recursively.
- Uses a **recursive function + memoization** (caching the result of each subproblem).
- Solves only the subproblems that are needed.
- **Example:**

  ```python
  def fib(n, memo={}):
      if n in memo:
          return memo[n]
      if n <= 1:
          return n
      memo[n] = fib(n-1, memo) + fib(n-2, memo)
      return memo[n]
  ```

---

### ✅ **Bottom-Up Approach (Tabulation)**

- **Starts from the smallest subproblem** and builds up the solution iteratively.
- Uses a **loop and a table** (array or matrix) to store results.
- Solves _all_ subproblems even if some are not needed.
- **More space/time efficient** in many cases.
- **Example:**

  ```python
  def fib(n):
      if n <= 1:
          return n
      dp = [0] * (n + 1)
      dp[1] = 1
      for i in range(2, n + 1):
          dp[i] = dp[i - 1] + dp[i - 2]
      return dp[n]
  ```

---

### 🔁 Summary Comparison

| Feature         | Top-Down (Memoization)      | Bottom-Up (Tabulation)        |
| --------------- | --------------------------- | ----------------------------- |
| Approach        | Recursive                   | Iterative                     |
| Storage         | HashMap or Dictionary       | Array or Matrix               |
| Execution Flow  | Starts from main problem    | Starts from base case         |
| Efficiency      | May have recursion overhead | Usually faster (no recursion) |
| Code Simplicity | Often shorter and clearer   | May be more efficient         |

---

Would you like a visual example using a common DP problem like the **knapsack** or **coin change** problem?

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
