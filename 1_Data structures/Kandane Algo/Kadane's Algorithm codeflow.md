# Kadane's Algorithm Explained

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 2/14/2026 8:49:32  
**Updated:** 2/14/2026 9:01:20  
**Exported:** 2/14/2026 9:03:26  
**Link:** [https://chatgpt.com/c/698fe9c2-d990-8321-a2cc-4fe5822820dd](https://chatgpt.com/c/698fe9c2-d990-8321-a2cc-4fe5822820dd)  

## Prompt:
Kadane's Algorithm

## Response:
Kadane’s Algorithm (Maximum Subarray Sum)
-----------------------------------------

Kadane’s Algorithm finds the **maximum sum of any contiguous subarray** in linear time.

This is one of those problems where brute force looks simple—but kills performance. The optimized insight is what matters.

* * *

### 🔹 The Core Idea

At each index, you decide:

> Is it better to **continue the previous subarray**  
> or **start fresh from here**?

So at every position:

```
current_sum = max(nums[i], current_sum + nums[i])
max_sum = max(max_sum, current_sum)
```

That’s it.

* * *

### 🔹 Why It Works

If the running sum becomes negative, carrying it forward only hurts future sums.

So we reset.

It’s a greedy local decision — but mathematically sound because a negative prefix can never help a future maximum.

* * *

### 🔹 Example

Array:

```
[-2,1,-3,4,-1,2,1,-5,4]
```

Best subarray:

```
[4, -1, 2, 1]
```

Sum = **6**

* * *

### 🔹 Python Implementation

```python
def max_subarray(nums):
    current_sum = nums[0]
    max_sum = nums[0]

    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)

    return max_sum
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

* * *

⚠️ Important Edge Case
----------------------

If all numbers are negative, Kadane still works — because we initialize with `nums[0]`.

Example:

```
[-5, -2, -8]
```

Answer = `-2`

* * *

🔹 Strategic Insight (Interview Angle)
--------------------------------------

When you see:

*   "maximum contiguous subarray"
*   "largest sum segment"
*   "continuous sequence"

Think:

> Prefix accumulation + reset when harmful.

This same pattern appears in:

*   Maximum product subarray (variation)
*   Stock buy-sell (single transaction)
*   DP optimization problems

* * *

If you want, I can:

*   Derive it from brute force → DP → optimized
*   Show dry run step by step
*   Extend it to return the actual subarray
*   Explain 2D Kadane (matrix version)
*   Connect it to stock buy/sell logic

Your move.

## Prompt:
Show dry run step by step

## Response:
Let’s walk it properly — not just mechanically, but with reasoning at each step.

We’ll use the classic input:

```
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

We track two things:

*   `current_sum` → best subarray **ending at this index**
*   `max_sum` → best subarray seen **so far**

* * *

Step-by-Step Dry Run
--------------------

| Index | Value | Decision | current\_sum | max\_sum |
| --- | --- | --- | --- | --- |

* * *

### 🔹 Step 0

**Index 0 → -2**

Initialize:

*   `current_sum = -2`
*   `max_sum = -2`

| 0 | -2 | start | -2 | -2 |

* * *

### 🔹 Step 1

**Index 1 → 1**

Option 1: Extend → `-2 + 1 = -1`  
Option 2: Start fresh → `1`

Better to start fresh.

*   `current_sum = 1`
*   `max_sum = 1`

| 1 | 1 | restart | 1 | 1 |

**Insight:** negative prefix hurt us.

* * *

### 🔹 Step 2

**Index 2 → -3**

Extend → `1 + (-3) = -2`  
Restart → `-3`

Better to extend.

*   `current_sum = -2`
*   `max_sum = 1`

| 2 | -3 | extend | -2 | 1 |

Note: sum became negative → future danger.

* * *

### 🔹 Step 3

**Index 3 → 4**

Extend → `-2 + 4 = 2`  
Restart → `4`

Restart wins.

*   `current_sum = 4`
*   `max_sum = 4`

| 3 | 4 | restart | 4 | 4 |

This is where the optimal subarray begins.

* * *

### 🔹 Step 4

**Index 4 → -1**

Extend → `4 + (-1) = 3`  
Restart → `-1`

Extend wins.

*   `current_sum = 3`
*   `max_sum = 4`

| 4 | -1 | extend | 3 | 4 |

* * *

### 🔹 Step 5

**Index 5 → 2**

Extend → `3 + 2 = 5`  
Restart → `2`

Extend wins.

*   `current_sum = 5`
*   `max_sum = 5`

| 5 | 2 | extend | 5 | 5 |

* * *

### 🔹 Step 6

**Index 6 → 1**

Extend → `5 + 1 = 6`  
Restart → `1`

Extend wins.

*   `current_sum = 6`
*   `max_sum = 6`

| 6 | 1 | extend | 6 | 6 |

Now we have the best sum so far: **6**

* * *

### 🔹 Step 7

**Index 7 → -5**

Extend → `6 + (-5) = 1`  
Restart → `-5`

Extend wins.

*   `current_sum = 1`
*   `max_sum = 6`

| 7 | -5 | extend | 1 | 6 |

Notice: still positive → so we keep it.

* * *

### 🔹 Step 8

**Index 8 → 4**

Extend → `1 + 4 = 5`  
Restart → `4`

Extend wins.

*   `current_sum = 5`
*   `max_sum = 6`

| 8 | 4 | extend | 5 | 6 |

* * *

Final Answer
------------

```
max_sum = 6
```

Subarray was:

```
[4, -1, 2, 1]
```

* * *

🔎 What’s Actually Happening Conceptually?
------------------------------------------

At every index:

*   If previous sum is **positive**, carry it.
*   If previous sum is **negative**, discard it.

That’s the entire philosophy.

Mathematically:

```
current_sum = max(nums[i], current_sum + nums[i])
```

* * *

🔥 Interview-Level Insight
--------------------------

The real DP meaning:

Let  
`dp[i] = maximum subarray sum ending at index i`

Then:

```
dp[i] = max(nums[i], nums[i] + dp[i-1])
```

Kadane is just space-optimized DP.

* * *

If you want to go deeper:

*   Want me to show how to return the actual subarray?
*   Want to see how this connects to Stock Buy-Sell?
*   Or see the 2D matrix Kadane version?

Pick the direction.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)