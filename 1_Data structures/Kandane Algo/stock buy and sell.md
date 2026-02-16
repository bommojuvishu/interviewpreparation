# Kadane's Algorithm Explained

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 2/14/2026 8:49:32  
**Updated:** 2/14/2026 9:01:20  
**Exported:** 2/14/2026 9:32:37  
**Link:** [https://chatgpt.com/c/698fe9c2-d990-8321-a2cc-4fe5822820dd](https://chatgpt.com/c/698fe9c2-d990-8321-a2cc-4fe5822820dd)  

## Prompt:
Want to see how this connects to Stock Buy-Sell?

## Response:
Good — this is the right instinct.

If you truly understand Kadane, you automatically understand **Best Time to Buy and Sell Stock (single transaction)**.

Let’s connect them cleanly.

* * *

🔁 Problem Shift
================

### Kadane solves:

> Maximum subarray sum

### Stock problem asks:

> Buy once, sell once → maximize profit

Example:

```
prices = [7,1,5,3,6,4]
```

Answer = 5  
(Buy at 1, sell at 6)

* * *

🔍 The Hidden Transformation
============================

Instead of looking at prices directly…

Look at **daily changes**:

```
[7,1,5,3,6,4]
 ↓ differences
[-6, +4, -2, +3, -2]
```

Now what are we asking?

> Find the maximum sum of a contiguous subarray in this difference array.

That’s literally Kadane.

* * *

Why This Works
--------------

If you buy at day `i` and sell at day `j`:

```
profit = prices[j] - prices[i]
```

But that equals:

```
sum of differences from i to j-1
```

So the stock problem reduces to:

> Find maximum contiguous gain period.

That’s Kadane.

* * *

🧠 Dry Run Using Kadane on Differences
======================================

Differences:

```
[-6, 4, -2, 3, -2]
```

Apply Kadane:

| Index | Value | current\_sum | max\_sum |
| --- | --- | --- | --- |
| 0 | \-6 | \-6 | \-6 |
| 1 | 4 | 4 | 4 |
| 2 | \-2 | 2 | 4 |
| 3 | 3 | 5 | 5 |
| 4 | \-2 | 3 | 5 |

Final answer = **5**

Which matches buying at 1 and selling at 6.

* * *

⚡ But Here’s the Important Twist
================================

In interviews, they rarely expect you to compute differences.

There’s a cleaner O(n) solution:

```python
def max_profit(prices):
    min_price = prices[0]
    max_profit = 0

    for price in prices[1:]:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)

    return max_profit
```

* * *

🔍 Why This Is Still Kadane
===========================

Let’s interpret:

*   `min_price` = best place to start subarray
*   `price - min_price` = current subarray sum
*   `max_profit` = global maximum

Instead of accumulating differences,  
we accumulate via tracking the lowest starting point.

Same principle:

> Discard bad prefixes, keep good ones.

* * *

🔥 Big Insight
==============

Kadane = “reset when prefix hurts future growth”

Stock solution = “reset buy price when a lower one appears”

It’s the same mental model.

* * *

🚀 Strategic Understanding
==========================

This pattern appears in:

*   Maximum subarray
*   Stock buy-sell (1 transaction)
*   Maximum profit interval
*   Maximum difference where larger comes after smaller
*   Even certain DP problems in competitive programming

* * *

Now I’ll push you slightly:

If you truly understand this…

How would you extend it to:

1.  At most 2 transactions?
2.  Unlimited transactions?
3.  Cooldown period?
4.  Transaction fee?

That’s where most engineers fall apart.

Which one do you want to attack first?



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)