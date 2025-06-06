# Sliding Window Technique

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 5/24/2025 18:48  
**Updated:** 5/24/2025 19:32  
**Exported:** 5/24/2025 19:33  

## Response:
To solve sliding window problems effectively, it's important to understand the **concept**, **pattern**, and **steps**. Here's a breakdown:

* * *

### 🔍 **What Is the Sliding Window Technique?**

Sliding window is a technique for problems involving **arrays or strings**, especially when you're asked to find **maximum**, **minimum**, **sum**, or **count** over a **subarray** or **substring**.

* * *

🔧 Typical Use Cases:
---------------------

*   Maximum sum of `k` consecutive elements
    
*   Longest substring with at most `k` distinct characters
    
*   Smallest subarray with a sum ≥ target
    
*   Maximum element in every window of size `k`
    

* * *

🧠 Key Idea
-----------

Instead of recalculating for every subarray (which is slow: `O(n*k)`), you **slide a window** across the data to reuse previous calculations and solve it in `O(n)` or `O(n log n)`.

* * *

✅ Steps to Solve Sliding Window Problems
----------------------------------------

### 1\. **Understand if it's a fixed-size or variable-size window**

*   **Fixed-size window:** e.g., window size `k` is given
    
*   **Variable-size window:** e.g., longest substring with some condition
    

* * *

### 2\. **For Fixed-Size Sliding Window (e.g., max sum of k elements)**

```python
def max_sum_subarray(arr, k):
    max_sum = curr_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        curr_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, curr_sum)
    return max_sum
```

🕒 Time Complexity: `O(n)`

* * *

### 3\. **For Variable-Size Sliding Window (e.g., longest substring with at most K distinct characters)**

```python
def longest_substring_k_distinct(s, k):
    from collections import defaultdict
    left = 0
    freq = defaultdict(int)
    max_len = 0

    for right in range(len(s)):
        freq[s[right]] += 1
        while len(freq) > k:
            freq[s[left]] -= 1
            if freq[s[left]] == 0:
                del freq[s[left]]
            left += 1
        max_len = max(max_len, right - left + 1)

    return max_len
```

🕒 Time Complexity: `O(n)`

* * *

### 4\. **When You Need to Track Max/Min Inside a Window (Use Deque)**

```python
from collections import deque

def max_in_sliding_window(nums, k):
    result = []
    dq = deque()  # stores indices

    for i in range(len(nums)):
        # Remove out-of-window indices
        if dq and dq[0] == i - k:
            dq.popleft()

        # Remove smaller values at the end
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()

        dq.append(i)

        # Add to result from i >= k - 1
        if i >= k - 1:
            result.append(nums[dq[0]])

    return result
```

🕒 Time Complexity: `O(n)`

* * *

🧩 Tips to Master Sliding Window
--------------------------------

*   Use a **left and right pointer** (`start`, `end`).
    
*   Keep track of **current state** (sum, count, map of chars).
    
*   Adjust window by **shrinking from the left** when the constraint breaks.
    
*   Use **deque** for max/min in dynamic windows.
    

* * *

If you have a specific sliding window problem you'd like help with, paste it here and I’ll walk you through it.

4o



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)