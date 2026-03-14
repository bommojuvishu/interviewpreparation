# Table of contents

# Table of Contents

## Strategy

- [Approach](#approach)
- [Shortcut](#shortcut)
- [Tips](#tips)

## Data Structures

- [Heap](#heap)
- [Arrays](#arrays)
- [Two Pointer Approach](#two-pointer-approach)
- [Sliding Window](#sliding-window)
- [Binary Search](#binary-search)
- [Stack](#stack)
- [LinkedList](#linkedlist)
- [Trees](#trees)
- [BFS](#bfs)

## Algorithms / Techniques

- [Sliding Window](#sliding-window)
- [Selection Sort](#selection-sort)
- [Fibonacci](#fibonacci)
- [Kadane Algorithm](#kandane-algorithn)
- [Monotonic Stack](#monotonic-reverse-loop)
- [Dijkstra Algorithm](#dijkstra-algo)

## Patterns

- [For loop](#for-loop)
- [Post processing](#post-processing)

# Approach

- BOOK and PEN : write the algo , check if one test input passing or not , then code it
- Brute force -> Better -> Optimal : don't code the optimal directly , talk to the interviewer , get the inputs
- start with the smaller test case

---

# Shortcut

- AVL and Red Black tree implementation is very big , most probably won't be ask in the interview

---

## Tips

- use nonlocal keyword to refer the main function variable inside the nested function
- check in the if or while loop do I need to include the >= or only >
- create empty array as follows

```py
[]*lenofdata
```

- Dry run the problem with the inputs
- Infinity

```py
temp = float('inf')
```

- Arrays : check if can sort the array , it may help any way
  - str.sort() : inline , only list
  - sorted(str , reverse = True) : new string , both string and list
- Arrays/ String : remove duplicate set(str) or use dictionary { value :value}
- Array: split a string into a list of characters
  - list("foobar") # ['f', 'o', 'o', 'b', 'a', 'r']
- range(start, stop, step)
  - range(len(arr))
  - range(3, 6)
  - range(3, 20, 2) #
- use ans = collections.defaultdict(list)
- heapq for sorting
  - heapq.heapify(li) ( default ASC)
  - heapq.heappop(li)
- string split,join
  - string.split(' ')
  - ' '.join(list_string)
- range(start, stop, step)
  - range(len(arr)
  - range(3 , 6)
  - range(len(arr), 0 , -1) // in reverse
  - for num in arr[::-1]: // iternate reverse
  - print(arr[::-1]) // print reverse of arr

- Best sort algo big O : n2
- Best search algo Big O : logn (Binary Search)

---

# Heap

arr = [64, 25, 12, 22, 11]
print(selection_sort(arr)) # Output: [11, 12, 22, 25, 64]

```python
# importing "heapq" to implement heap queue
import heapq

# initializing list
li = [5, 7, 9, 1, 3]

# using heapify to convert list into heap
heapq.heapify(li)

# printing created heap
print("The created heap is : ", end="")
print(list(li))

# using heappush() to push elements into heap
# pushes 4
heapq.heappush(li, 4)

# printing modified heap
print("The modified heap after push is : ", end="")
print(list(li))

# using heappop() to pop smallest element
print("The popped and smallest element is : ", end="")
print(heapq.heappop(li))

```

Problems

- https://leetcode.com/problems/top-k-frequent-elements/solutions/789282/python-heap/

---

# Arrays

instead of for loop ,he has used 2 pointer to decrease the iteration

https://leetcode.com/problems/squares-of-a-sorted-array/description/

```python
    def sortedSquares(self, nums: List[int]) -> List[int]:
        l = 0
        r = len(nums) - 1
        while(l <= r):
            print(l)
            nums[l], nums[r] = nums[l]** 2, nums[r]**2
            l += 1
            r -= 1

        return sorted(nums)
```

---

# Two pointer approach

Testcase :
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]

Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.

```python
def twoSum(numbers, target):
    left = 0
    right = len(numbers) - 1

    while left < right:
        total = numbers[left] + numbers[right]

        if total == target:
            return [left + 1, right + 1]  # 1-based index
        elif total < target:
            left += 1
        else:
            right -= 1

```

---

## Sliding Window

#### Fixed sliding Window template

```py
left = right = 0
while right < n:
    # If the window has reached the expected fixed length, we slide
    # the window (move both left and right).
    if right - left + 1 == fixed_window_size:
        # Process the current window.
        result = process_current_window()
        left += 1
    right += 1

```

Note: Always following condition should be at the bottom

```
    left += 1
right += 1
```

#### Dynamic Sliding window template

```py
left = right = 0
while right < n:
    # While the condition is violated, the window is invalid, so

    # shrink the window by advancing the left pointer.
    while condition is violated:
        left += 1

    # Once the window is valid, process it and then expand the window
    # by advancing the right pointer.
    result = process_current_window()
    right += 1

```

---

# Binary Search

- // is the floor division : 15//2 , output= 7
- mid formula :
  m = l + ((r - l) // 2)
  mid = (high +low) // 2

```python
def find_the_insertion_index(nums: List[int], target: int) -> int:
    left, right = 0, len(nums)

    while left < right:
        mid = (left + right) // 2
        # If the midpoint value is greater than or equal to the target,
        # the lower bound is either at the midpoint, or to the left of it.
        if nums[mid] >= target:
            right = mid
        # The midpoint value is less than the target,
        # lower bound is somewhere to the right.
        else:
            left = mid + 1

    return left


```

The // operator in Python is floor division.
It divides two numbers and returns the largest integer less than or equal to the result (i.e., it rounds down, not toward zero).

```py
10 // 3

# Normal division:
10 / 3 = 3.333...

# Floor division
10 // 3 = 3

```

### Insert at the index

❌ don't use the following , while calculating the mid we are taking the floor

- **it will lead to INFINITE loop**

```
if target >=  nums[mid]:
   l = mid
else:
   r = mid + 1
```

**Correct**

```py
def searchInsert(nums, target):
    l, r = 0, len(nums)   # notice r = len(nums)

    while l < r:
        mid = (l + r) // 2

        if nums[mid] >= target:
            r = mid
        else:
            l = mid + 1

    return l
```

🧠 Key Mental Model

There are only two questions:

1️⃣ Are you searching for exact match?

→ Use while l <= r
→ Use mid ± 1 - left = mid +1 - right = right -1

2️⃣ Are you searching for boundary of monotonic condition?

→ Use while l < r
→ Keep mid if valid
→ Remove only what is impossible

---

# Stack

- check if stack is empty or not , then check for value
  - if not stack or stack.pop() != mapp[ch]:
  - if len(arr)> 0 and ( arr[-1] == x ):

---

# LinkedList

⚠️**Tip** : for removing/inserting always stop one node before

```
if node.next == val:
```

⚠️**Tip** : create a dummy node and attach to head or tail

```
dummy = ListNode()
tail = dummy
```

#### Accessing the previous in the linked list

```py
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteMiddle(self, head):
        if head is None or head.next is None: return None
        slow=head
        fast=head
        prev=slow

        while fast and fast.next:
            fast=fast.next.next
            prev=slow # accessing the prev one
            slow=slow.next

        prev.next=slow.next
        return head
```

#### Reverse the linked list

- here we are not pointing the prev to the head , the intuition is we are creating new linked list starting from the prev pointer
- we return previous finally

```py
# ❌ this is wrong
prev = ListNode(None)
prev.next = head
```

- correct

```py
class Solution(object):
    def reverseList(self, head):
        prev = None
        curr = head
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        return prev
```

### create dummy node in linkedlist

    - https://leetcode.com/problems/merge-two-sorted-lists/

```python

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        tail = dummy

        while list1 and list2:
            if list1.val < list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        if list1:
            tail.next = list1
        elif list2:
            tail.next = list2
        print(dummy)
        return dummy.next

```

- https://leetcode.com/problems/reverse-linked-list/

- remove n th node from the end of the list ( 2 pointer approach )

```python
class Solution:
  def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
      dummy = ListNode(0, head)
      left = dummy
      right = head

      while n > 0:
          right = right.next
          n -= 1

      while right:
          left = left.next
          right = right.next

      # delete
      left.next = left.next.next
      return dummy.next

```

---

# Sliding window

- 2 types
  - fixed
  - dynamic
- for dynamic , look for the condition that breaks and moves the left pointer to foward
  - window can be represented as "r - l + 1" or Queue data structure

##### Never use the list/que as the window , Using a list-based window adds overhead due to the cost of removing from the front (pop(0)) and extra space.

Example :
Longest Substring Without Repeating Characters - Explanation

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        l = 0
        res = 0

        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            charSet.add(s[r])
            res = max(res, r - l + 1)
        return res

```

### Two pointer approach

    - https://leetcode.com/problems/middle-of-the-linked-list/

```python

    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
      slow = fast = head

      while fast and fast.next :
          slow = slow.next
          fast = fast.next.next

      return slow
```

---

# Trees

### BFS

```python
   def BFS(self):
      current_node = self.root
      queue = []
      results = []
      queue.append(current_node)

      while len(queue) > 0:
          current_node = queue.pop(0)
          results.append(current_node.value)
          if current_node.left is not None:
              queue.append(current_node.left)
          if current_node.right is not None:
              queue.append(current_node.right)
      return results


```

- **Always pop(0) , not pop()**

```py
from collections import deque

def bfs_tree(root):
    if not root:
        return

    queue = []
    level_number = 0

    while queue:
        level_size = len(queue)
        level_number += 1

        # Optional: collect level-specific data
        level_sum = 0
        level_nodes = []

        for _ in range(level_size):
            node = queue.pop(0)

            # ---- Process current node ----
            level_sum += node.val
            level_nodes.append(node.val)

            # ---- Add children ----
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        # ---- After finishing one level ----
        print(f"Level {level_number}: {level_nodes}, Sum = {level_sum}")
```

## Preorder Transversal

```python
def dfs_pre_order(self):
	results = []
	res = []
	def preorder(root):
	    if not root:
		return
	    res.append(root.val)
	    preorder(root.left)
	    preorder(root.right)
	preorder(root)
	return res

```

# Trees : Mmax dept using recursive DFS

```python
# RECURSIVE DFS
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0

        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

```

# Sort

## Selection sort

- always 2 loops

```python
def selection_sort(arr):
    n = len(arr)  # Get the length of the array
    for i in range(n):  # Outer loop runs n times
        min_index = i  # Assume current index has the smallest value
        for j in range(i + 1, n):  # Find the smallest element in the remaining array
            if arr[j] < arr[min_index]:  # If found a smaller element
                min_index = j  # Update the index of the smallest element
        arr[i], arr[min_index] = arr[min_index], arr[i]  # Swap the smallest element with the current position
    return arr
```

## Fibonacci

```python
def Fibonacci(n):

    if n < 0:
        print("Incorrect input")

    elif n == 0:
        return 0

    elif n == 1 or n == 2:
        return 1

    else:
        return Fibonacci(n-1) + Fibonacci(n-2)

print(Fibonacci(9))

```

---

## Kandane Algorithn

#### Problem 1: local and global res

https://leetcode.com/problems/max-consecutive-ones/

```python
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        gres = 0
        res = 0
        for i in range(len(nums)):
            if nums[i] == 0:
                res = 0
            else:
                res = res +1
                gres = max(res, gres)
            # print(i , res, gres)
        return gres
```

##### Problem 2 :

https://neetcode.io/courses/advanced-algorithms/0

Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

```python
def kadane(arr):
    max_so_far = float('-inf')
    max_ending_here = 0
    start = end = s = 0  # Variables to track subarray indices

    for i in range(len(arr)):
        max_ending_here += arr[i]

        if max_ending_here > max_so_far:
            max_so_far = max_ending_here
            start = s
            end = i

        if max_ending_here < 0:
            max_ending_here = 0
            s = i + 1  # Start new subarray

    return max_so_far, arr[start:end+1]  # Return max sum and subarray

# Example usage
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max_sum, subarray = kadane(arr)
print("Maximum Sum:", max_sum)  # Output: 6
print("Subarray:", subarray)  # Output: [4, -1, 2, 1]

```

another implementation

```python
def kadane(arr):
    max_ending_here = max_so_far = arr[0]  # initialize with first element
    for x in arr[1:]:
        max_ending_here = max(x, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far

```

---

### Monotonic (Reverse Loop):

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

#### 🔎 Explanation:

✅ **Reverse Iteration**: We start from the **last element** and go to the **first**.  
✅ **Stack**: Holds potential next greater elements (to the right of the current index).  
✅ **Pop**: Remove all elements from the stack **less than or equal to the current element**, because they **cannot** be the next greater element for the current.  
✅ **Top of Stack**: If stack is non-empty, it’s the next greater element.  
✅ **Push**: Always push the current element to the stack for the next iteration.

⏳ **Time Complexity**: **O(n)** (Each element is pushed and popped once)  
💾 **Space Complexity**: **O(n)** (Stack storage)

---

## Dijkstra Algo

- sometimes we can use normal que instead heapq

```python
import heapq
import sys

# Function to construct adjacency
def constructAdj(edges, V):

    # adj[u] = list of [v, wt]
    adj = [[] for _ in range(V)]

    for edge in edges:
        u, v, wt = edge
        adj[u].append([v, wt])
        adj[v].append([u, wt])

    return adj

# Returns shortest distances from src to all other vertices
def dijkstra(V, edges, src):
    # Create adjacency list
    adj = constructAdj(edges, V)

    # Create a priority queue to store vertices that
    # are being preprocessed.
    pq = []

    # Create a list for distances and initialize all
    # distances as infinite
    dist = [sys.maxsize] * V

    # Insert source itself in priority queue and initialize
    # its distance as 0.
    heapq.heappush(pq, [0, src])
    dist[src] = 0

    # Looping till priority queue becomes empty (or all
    # distances are not finalized)
    while pq:
        # The first vertex in pair is the minimum distance
        # vertex, extract it from priority queue.
        u = heapq.heappop(pq)[1]

        # Get all adjacent of u.
        for x in adj[u]:
            # Get vertex label and weight of current
            # adjacent of u.
            v, weight = x[0], x[1]

            # If there is shorter path to v through u.
            if dist[v] > dist[u] + weight:
                # Updating distance of v
                dist[v] = dist[u] + weight
                heapq.heappush(pq, [dist[v], v])

    # Return the shortest distance array
    return dist

# Driver program to test methods of graph class
if __name__ == "__main__":
    V = 5
    src = 0

    # edge list format: {u, v, weight}
    edges =[[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]];

    result = dijkstra(V, edges, src)

    # Print shortest distances in one line
    print(' '.join(map(str, result)))

```

## For loop

nested loops that starts from the parent loop value

```python
for i in range(x):
        for j in range(i+1, x):
            for k in range(j+1,x):
                if i < j < k and  nums[i] < nums[j]< nums[k]:
                    print(nums[i]  , nums[j] ,  nums[k])
                    return True
```

## Post Processing

Post processing : always the prev value should last in the processing

```py
nums = [1,2,3,4]
n = len(nums)
answer = [1] * n

# Step 1: Build prefix products
prefix = 1
for i in range(n):
    answer[i] = prefix
    prefix *= nums[i]  # prefix is the current value but we are storing the answer in the next iteration
#Output
[1, 1, 2, 6]
[]
```

If we just change the order , it will become current processing

```py
prefix = 1
for i in range(n):
    prefix *= nums[i]
    answer[i] = prefix # changed the order

# Output
[1, 2, 6, 24]
```
