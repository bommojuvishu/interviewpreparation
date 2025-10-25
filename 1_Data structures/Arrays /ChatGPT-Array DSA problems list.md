# Array DSA problems list

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 10/12/2025 16:34:45  
**Updated:** 10/12/2025 16:36:38  
**Exported:** 10/12/2025 16:37:05  
**Link:** [https://chatgpt.com/c/68eb8b3d-13f0-8321-9e26-c795f28e48c7](https://chatgpt.com/c/68eb8b3d-13f0-8321-9e26-c795f28e48c7)  

## Prompt:
array DSA problems with their leetcode links

## Response:
Here’s a curated list of **popular Array DSA problems** categorized by difficulty, along with their **LeetCode links** — perfect for practice 👇

* * *

### 🟢 **Easy Level**

| # | Problem | Topic | Link |
| --- | --- | --- | --- |
| 1 | Two Sum | Hashing / Two Pointers | 🔗 LeetCode 1 |
| 2 | Best Time to Buy and Sell Stock | Kadane’s / Greedy | 🔗 LeetCode 121 |
| 3 | Remove Duplicates from Sorted Array | Two Pointers | 🔗 LeetCode 26 |
| 4 | Remove Element | Two Pointers | 🔗 LeetCode 27 |
| 5 | Move Zeroes | Two Pointers | 🔗 LeetCode 283 |
| 6 | Contains Duplicate | Hashing | 🔗 LeetCode 217 |
| 7 | Intersection of Two Arrays II | Hash Map / Sorting | 🔗 LeetCode 350 |
| 8 | Maximum Subarray | Kadane’s Algorithm | 🔗 LeetCode 53 |
| 9 | Plus One | Simulation | 🔗 LeetCode 66 |
| 10 | Merge Sorted Array | Two Pointers | 🔗 LeetCode 88 |

* * *

### 🟡 **Medium Level**

| # | Problem | Topic | Link |
| --- | --- | --- | --- |
| 1 | 3Sum | Two Pointers | 🔗 LeetCode 15 |
| 2 | Subarray Sum Equals K | Prefix Sum / Hash Map | 🔗 LeetCode 560 |
| 3 | Product of Array Except Self | Prefix / Suffix | 🔗 LeetCode 238 |
| 4 | Set Matrix Zeroes | Matrix Manipulation | 🔗 LeetCode 73 |
| 5 | Spiral Matrix | Simulation | 🔗 LeetCode 54 |
| 6 | Jump Game | Greedy | 🔗 LeetCode 55 |
| 7 | Sort Colors | Dutch National Flag / Two Pointers | 🔗 LeetCode 75 |
| 8 | Longest Consecutive Sequence | Hash Set | 🔗 LeetCode 128 |
| 9 | Maximum Product Subarray | Kadane Variant | 🔗 LeetCode 152 |
| 10 | Rotate Image | Matrix Rotation | 🔗 LeetCode 48 |

* * *

### 🔴 **Hard Level**

| # | Problem | Topic | Link |
| --- | --- | --- | --- |
| 1 | First Missing Positive | In-place Hashing | 🔗 LeetCode 41 |
| 2 | Trapping Rain Water | Two Pointers / Stack | 🔗 LeetCode 42 |
| 3 | Merge Intervals | Sorting / Interval | 🔗 LeetCode 56 |
| 4 | Largest Rectangle in Histogram | Stack | 🔗 LeetCode 84 |
| 5 | Sliding Window Maximum | Deque | 🔗 LeetCode 239 |
| 6 | Median of Two Sorted Arrays | Binary Search | 🔗 LeetCode 4 |
| 7 | Maximal Rectangle | Stack + DP | 🔗 LeetCode 85 |
| 8 | Candy | Greedy | 🔗 LeetCode 135 |
| 9 | Find the Duplicate Number | Floyd’s Cycle / Binary Search | 🔗 LeetCode 287 |
| 10 | Minimum Window Subsequence | Two Pointers | 🔗 LeetCode 727 |

* * *

Would you like me to give you a **progressive practice roadmap** (easy → medium → hard) for arrays over 2–3 weeks? 📝

## Prompt:
patterns ?

## Response:
Great question 👌  
When solving **Array DSA problems**, recognizing **problem-solving patterns** is the key to cracking them quickly (especially in interviews).  
Here’s a list of **important array patterns** with short explanations and representative **LeetCode problems**👇

* * *

🟢 **1\. Two Pointers Pattern**
-------------------------------

👉 Use two indices (start & end or left & right) to iterate efficiently — avoids nested loops.

**When to use:**

*   Sorted arrays
*   Problems involving pair sums, duplicates removal, or in-place modifications

**Examples:**

*   26\. Remove Duplicates from Sorted Array
*   27\. Remove Element
*   283\. Move Zeroes
*   15\. 3Sum
*   75\. Sort Colors

🧠 _Tip:_ Often involves `left` and `right` pointers moving toward each other or one pointer scanning while the other tracks position.

* * *

🟡 **2\. Sliding Window Pattern**
---------------------------------

👉 Maintain a “window” (subarray) that expands or contracts to find something (like max, min, or target sum).

**When to use:**

*   Subarray problems (max/min length, sum, number of occurrences)
*   Fixed or variable window size problems

**Examples:**

*   209\. Minimum Size Subarray Sum
*   3\. Longest Substring Without Repeating Characters
*   239\. Sliding Window Maximum
*   76\. Minimum Window Substring

🧠 _Tip:_ Keep track of window sum or character counts; move `right` to expand and `left` to shrink when a condition is met.

* * *

🟠 **3\. Prefix Sum / Suffix Sum Pattern**
------------------------------------------

👉 Precompute cumulative sums to answer subarray queries or count occurrences efficiently.

**When to use:**

*   Subarray sum / count problems
*   Repeated sum calculations

**Examples:**

*   560\. Subarray Sum Equals K
*   238\. Product of Array Except Self
*   53\. Maximum Subarray

🧠 _Tip:_ Use a hash map to store prefix sums for O(n) solutions.

* * *

🔵 **4\. Sorting + Two Pointers / Binary Search Pattern**
---------------------------------------------------------

👉 Sort the array, then use two pointers or binary search to solve problems.

**When to use:**

*   Pair-sum, triplet, interval, and merge problems
*   Duplicates, closest pairs

**Examples:**

*   15\. 3Sum
*   16\. 3Sum Closest
*   56\. Merge Intervals

🧠 _Tip:_ Sorting often unlocks linear two-pointer solutions.

* * *

🟤 **5\. Kadane’s Algorithm Pattern**
-------------------------------------

👉 Dynamic sliding window to find **maximum/minimum subarray sum/product**.

**When to use:**

*   Continuous subarray max/min problems

**Examples:**

*   53\. Maximum Subarray
*   152\. Maximum Product Subarray

🧠 _Tip:_ Track `current_max` and `global_max` as you iterate.

* * *

⚪ **6\. Hashing / Frequency Map Pattern**
-----------------------------------------

👉 Use hash maps or sets to count or check existence efficiently.

**When to use:**

*   Duplicates, subarray sums, element frequency problems

**Examples:**

*   1\. Two Sum
*   217\. Contains Duplicate
*   560\. Subarray Sum Equals K

🧠 _Tip:_ Great for O(n) solutions when brute force would be O(n²).

* * *

🟡 **7\. Cyclic Sort / In-place Hashing Pattern**
-------------------------------------------------

👉 Place elements at their correct index (when array contains 1…n numbers) to detect missing or duplicate numbers efficiently.

**When to use:**

*   Problems involving “first missing positive” or duplicates in a fixed range

**Examples:**

*   41\. First Missing Positive
*   287\. Find the Duplicate Number

🧠 _Tip:_ Swap numbers into their “right place” while iterating.

* * *

🟣 **8\. Stack-based Pattern**
------------------------------

👉 Use a stack to handle “next greater element”, histogram, or water trapping problems.

**When to use:**

*   Monotonic stack for “next greater/smaller” problems
*   Area under histogram

**Examples:**

*   42\. Trapping Rain Water
*   84\. Largest Rectangle in Histogram
*   739\. Daily Temperatures

🧠 _Tip:_ Monotonic stacks keep elements in increasing or decreasing order.

* * *

🟠 **9\. Matrix Manipulation Pattern**
--------------------------------------

👉 Traverse or transform 2D arrays using loops, layer-by-layer traversal, or in-place rotation.

**Examples:**

*   48\. Rotate Image
*   54\. Spiral Matrix
*   73\. Set Matrix Zeroes

🧠 _Tip:_ Many of these are simulation problems — careful with boundaries and directions.

* * *

🔴 **10\. Greedy Pattern**
--------------------------

👉 Make the locally optimal choice at each step to reach a global solution.

**Examples:**

*   55\. Jump Game
*   45\. Jump Game II
*   135\. Candy

🧠 _Tip:_ Keep track of max reach or required steps without backtracking.

* * *

### 🚀 **Bonus**: Common Combined Patterns

*   **Two Pointers + Sorting** → 3Sum, Merge Intervals
*   **Sliding Window + Hash Map** → Longest substring without repeats
*   **Prefix Sum + Hash Map** → Subarray sum problems
*   **Stack + Array** → Monotonic stack problems (e.g., daily temperatures)

* * *

Would you like me to give you a **DSA practice plan (2–3 weeks)** based on these patterns to cover all major array types step by step? 📝🔥



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)