# Two Pointer Technique in DSA

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 5/27/2025 12:11  
**Updated:** 5/27/2025 12:11  
**Exported:** 5/27/2025 12:13  

## Prompt:
how to solve 2 pointer problems in DSO

## Response:
Solving **two pointer problems** in **Data Structures and Algorithms (DSA)** involves understanding the pattern, when to use it, and how to apply it. Here's a concise and practical guide tailored for you, Vishwanath:

* * *

✅ **What is the Two Pointer Technique?**
----------------------------------------

The two pointer technique uses two variables (pointers) to iterate through a data structure (usually an array or string), often from:

*   Both ends → (`left`, `right`)
    
*   Start → (`i`, `j`) where `j` catches up to `i` or vice versa
    

* * *

🧠 **When to Use It**
---------------------

Use two pointers when:

*   You want to reduce time complexity from O(n²) to O(n)
    
*   The array is sorted or needs to be sorted
    
*   You are dealing with problems like:
    
    *   Pair with a given sum
        
    *   Removing duplicates
        
    *   Container with most water
        
    *   Merging arrays
        
    *   Palindromes / anagrams
        
    *   Sliding window variants
        

* * *

🔧 **Template for Solving Two Pointer Problems**
------------------------------------------------

### Step-by-step:

1.  **Understand the problem** (edge cases, constraints, input type)
    
2.  **Sort the array** if needed
    
3.  **Initialize pointers** – usually `left = 0`, `right = n - 1`
    
4.  **Use a while loop** with the condition: `left < right` (or variations)
    
5.  **Move pointers** based on conditions inside the loop
    
6.  **Return result** – this may be indices, a boolean, count, etc.
    

* * *

⚡ Example 1: Find if a pair with sum = target exists (Sorted array)
-------------------------------------------------------------------

```python
def has_pair_with_sum(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target:
            return True
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return False
```

* * *

⚡ Example 2: Move zeroes to end
-------------------------------

```python
def move_zeroes(nums):
    left = 0
    for right in range(len(nums)):
        if nums[right] != 0:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
    return nums
```

* * *

⚡ Example 3: Reverse a string (in-place)
----------------------------------------

```python
def reverse_string(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
```

* * *

🧩 Tips
-------

*   **Sorted input**? Think two pointers.
    
*   **Need minimal space**? Two pointers in-place helps.
    
*   **Don't always need nested loops** – two pointers may simplify.
    
*   Practice: Leetcode, HackerRank, Codeforces problems tagged with "two pointers"
    

* * *

If you want, I can give you a **practice roadmap** or **DSA sheet** with 2-pointer problems sorted by difficulty. Want that?

4o



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)