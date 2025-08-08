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

### 📝 Example Problem:

Given:

```python
nums = [2, 1, 3, 2, 4]
```

Find the **next greater element to the right** for each element. If none exists, return -1.

Expected output:

```
[3, 3, 4, 4, -1]
```

---

## ✅ Solution (Reverse Loop):

We’ll use a **decreasing monotonic stack** that maintains elements in **decreasing order from top to bottom**. When we move from right to left:

- If the stack top is **less than or equal to** the current element, pop it (it cannot be the next greater for current).
- The **top of the stack** (if any) is the next greater element.
- Push the current element to the stack.

Here’s the code:

```python
def next_greater_element(nums):
    n = len(nums)
    res = [-1] * n
    stack = []

    for i in range(n - 1, -1, -1):
        while stack and stack[-1] <= nums[i]:
            stack.pop()
        if stack:
            res[i] = stack[-1]
        stack.append(nums[i])
    return res

# Test
nums = [2, 1, 3, 2, 4]
print(next_greater_element(nums))  # Output: [3, 3, 4, 4, -1]
```

---

## 🔎 Explanation:

✅ **Reverse Iteration**: We start from the **last element** and go to the **first**.  
✅ **Stack**: Holds potential next greater elements (to the right of the current index).  
✅ **Pop**: Remove all elements from the stack **less than or equal to the current element**, because they **cannot** be the next greater element for the current.  
✅ **Top of Stack**: If stack is non-empty, it’s the next greater element.  
✅ **Push**: Always push the current element to the stack for the next iteration.

---

⏳ **Time Complexity**: **O(n)** (Each element is pushed and popped once)  
💾 **Space Complexity**: **O(n)** (Stack storage)
