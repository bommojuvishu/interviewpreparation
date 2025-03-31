# Monotonic Pattern

https://www.youtube.com/watch?v=cTBiBSnjO3c

A **monotonic stack** is a stack that maintains elements in a specific order—either increasing (monotonically increasing stack) or decreasing (monotonically decreasing stack). It is useful for solving problems involving **next greater/smaller elements**, **ranges**, and **sliding window** problems efficiently in **O(n) time complexity**.

---

### 🛠 **Common Use Cases**

1.  **Next Greater Element** (NGE)
2.  **Next Smaller Element** (NSE)
3.  **Previous Greater Element** (PGE)
4.  **Previous Smaller Element** (PSE)
5.  **Largest Rectangle in Histogram** (Leetcode #84)
6.  **Trapping Rain Water** (Leetcode #42)
7.  **Stock Span Problem** (Leetcode #901)
8.  **Daily Temperatures** (Leetcode #739)

```
def next_greater_element(nums):
    n = len(nums)
    result = [-1] * n  # Default -1 if no greater element
    stack = []  # Stores indices of elements

    for i in range(n):
        while stack and nums[i] > nums[stack[-1]]:
            idx = stack.pop()
            result[idx] = nums[i]
        stack.append(i)

    return result

nums = [2, 1, 2, 4, 3]
print(next_greater_element(nums))  # Output: [4, 2, 4, -1, -1]

```

### 📌 **Explanation**

- We traverse the array from **left to right**.
- The **monotonic decreasing stack** keeps indices of elements **in decreasing order**.
- When a greater element is found (`nums[i] > nums[stack[-1]]`), update `result[stack.pop()]`.
- Push the current index onto the stack.

⏳ **Time Complexity**: **O(n)** (Each element is pushed and popped once)  
💾 **Space Complexity**: **O(n)** (Stack storage)
