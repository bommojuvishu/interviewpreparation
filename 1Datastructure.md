# Table of contents

- [Linkedlist](#linkedList)
- [My Section Title](#my-section-title)

# Approach

- BOOK and PEN : write the algo , check if one test input passing or not , then code it
- Brute force -> Better -> Optimal : don't code the optimal directly , talk to the interviewer , get the inputs
- start with the smaller test case

- Analyse visually
  - https://leetcode.com/problems/longest-consecutive-sequence/description/
  - https://www.youtube.com/watch?v=P6RZZMu_maU

---

# Shortcut

- AVL and Red Black tree implementation is very big , most probably won't be ask in the interview

---

## Tips

- use nonlocal keyword to refer the main function variable inside the nested function
- check the data given ( if it can used as for loop condition)
- Arrays : check if can sort the array , it may help any way
  - str.sort() : in line , only list
  - sorted(str , reverse = True) : new string , both string and list
- Arrays/ String : remove duplicate set(str) or use dictionary { value :value}
- Array: split a string into a list of characters
  - list("foobar") # ['f', 'o', 'o', 'b', 'a', 'r']
- Array temp: []\*len(arr)
- range(start, stop, step)
  - range(len(arr))
  - range(3, 6)
  - range(3, 20, 2) #
- use ans = collections.defaultdict(list)
- heapq for sorting
  - heapq.heapify(li) ( default ASC)
  - heapq.heappop(li)
- problem related to in place array , try two pointer approach
  - https://github.com/sadanandpai/dsa-interview-challenges/blob/main/problems/warmup.md#squares-of-a-sorted-array
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

# List methods

- append

```python
# Adds List Element as value of List.
List = ['Mathematics', 'chemistry', 1997, 2000]
List.append(20544)
print(List)
```

- insert

```python
List = ['Mathematics', 'chemistry', 1997, 2000]
# Insert at index 2 value 10087
List.insert(2, 10087)
print(List)
```

- extend

```python
List1 = [1, 2, 3]
List2 = [2, 3, 4, 5]
# Add List2 to List1
List1.extend(List2)
print(List1)
# Add List1 to List2 now
List2.extend(List1)
print(List2)
```

- index

```python
List = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1]
print(List.index(2))
```

- sort

```python
List = [2.3, 4.445, 3, 5.33, 1.054, 2.5]
#Reverse flag is set True
List.sort(reverse=True)
#List.sort().reverse(), reverses the sorted list
print(List)
```

- pop

````python
List = [2.3, 4.445, 3, 5.33, 1.054, 2.5]
print(List.pop(0))

# Problems

## Palindrone

- for palidrone , start in the mid and check left and right
  https://leetcode.com/problems/palindromic-substrings/

```python
    def countSubstrings(self, s: str) -> int:
        res = 0

        for i in range(len(s)):
            res += self.countPali(s, i, i)
            res += self.countPali(s, i, i + 1)
        return res

    def countPali(self, s, l, r):
        res = 0
        while l >= 0 and r < len(s) and s[l] == s[r]:
            res += 1
            l -= 1
            r += 1
        return res
````

---

# String methods

- find

```python
message = 'Python is a fun programming language'
# check the index of 'fun'
print(message.find('fun'))
# Output: 12
```

- index

```python
text = 'Python is fun'
# find the index of is
result = text.index('is')
print(result)
# Output: 7
```

- join

```python
text = ['Python', 'is', 'a', 'fun', 'programming', 'language']
# join elements of text with space
print(' '.join(text))
# Output: Python is a fun programming language
```

- replace

```python
text = 'bat ball'
# replace 'ba' with 'ro'
replaced_text = text.replace('ba', 'ro')
print(replaced_text)
# Output: rot roll
```

- find

```python
text = 'Python is fun'
# split the text from space
print(text.split())
# Output: ['Python', 'is', 'fun']
```

---

## Dictionary

To check whether two dictionaries or sets are equal in Python, you can use the == operator:
Two dictionaries are equal if they have the same key-value pairs, regardless of order.

```python
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 2, 'a': 1, 'c': 3}

print(dict1 == dict2)  # True (order doesn't matter in dictionaries)

my_dict = {'apple': 10, 'banana': 5, 'cherry': 8}
del my_dict['banana']
print(my_dict)  # Output: {'apple': 10, 'cherry': 8}

my_dict = {'apple': 10, 'banana': 5, 'cherry': 8}
value = my_dict.pop('banana')
print(value)     # Output: 5
print(my_dict)   # Output: {'apple': 10, 'cherry': 8}

# With default:
value = my_dict.pop('orange', 0)
print(value)     # Output: 0


```

---

## Sets

A set in Python is an unordered collection of unique elements. It supports various operations for adding, removing, and performing set operations like union and intersection.
it is same as dictionary but stores single value

```python

data = ['apple', 'banana', 'apple', 'orange', 'banana']
unique_items = set(data)
print(unique_items)
# Output: {'apple', 'banana', 'orange'}


if 'banana' in set_a:
    print("Found banana!")

#remove

my_set = {1, 2, 3}
my_set.remove(2)
print(my_set)  # Output: {1, 3}

# 🚫 Does not raise an error if the element is not present.
my_set = {1, 2, 3}
my_set.discard(4)  # No error even though 4 is not in the set
print(my_set)  # Output: {1, 2, 3}

```

#### Equal

Two sets are equal if they contain the same elements, regardless of order.

```python
set1 = {1, 2, 3}
set2 = {3, 2, 1}

print(set1 == set2)  # True (order doesn't matter in sets)

```

#### Example: Convert List to Set

```python
my_list = [1, 2, 3, 4, 5, 2, 3, 1]
my_set = set(my_list)

print(my_set)  # Output: {1, 2, 3, 4, 5}

```

### 🚀 Summary: When to Use Each?

- **Use a `list` when:** You need an **ordered** collection, allow **duplicates**, or require **indexing**.
- **Use a `set` when:** You need **unique elements** and **fast lookups** but don't care about order.
- **Use a `dict` when:** You need to store **key-value pairs** with **fast access**.

---

## 🔄 **\. Using `for` loop to reverse:**

### Option 1: `range(start, end, step)`

If you want to iterate backwards from `n-1` to `0`, you can use:

```python
for i in range(n-1, -1, -1):
    print(i)
```

👉 Here’s what’s happening:

- `start = n-1`
- `end = -1` (exclusive, so it stops at 0)
- `step = -1` (to decrement)

Example:

```python
arr = [5, 4, 3, 2, 1]
for i in range(len(arr)-1, -1, -1):
    print(arr[i])
```

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

### findKthLargest

https://leetcode.com/problems/kth-largest-element-in-an-array/description/

```python
    def findKthLargest(self, nums: List[int], k: int) -> int:
        li = [x for x in nums]
        heapq.heapify(li)
        print(li)
        while len(li) > k:
            heapq.heappop(li)
        return li[0]
```

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

---

# Stack

- check if stack is empty or not , then check for value
  - if not stack or stack.pop() != mapp[ch]:
  - if len(arr)> 0 and ( arr[-1] == x ):

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

---

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

## Hashing

### Problem 1:

https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "aa", magazine = "ab"
Output: false

```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        hash_map = {}

        for i in magazine:
            hash_map[i] = hash_map.get(i, 0) + 1

        for i in ransomNote:
            if i in hash_map and hash_map[i] != 0:
                hash_map[i] = hash_map[i] - 1
            else:
                return False

        return True
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

# Graph Algo

---

## Monotonic List Algo

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

### ✅ Solution (Reverse Loop):

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

---

## Bellman ford algo

### 🔍 Key Features

- Works on **directed or undirected** graphs.
- Can handle **negative weights**.
- Detects **negative weight cycles** (a cycle whose total weight is negative).
- Time Complexity: **O(V × E)** where V = number of vertices and E = number of edges.

```python
def bellman_ford(graph, V, E, src):
    # Step 1: Initialize distances
    dist = [float("inf")] * V
    dist[src] = 0

    # Step 2: Relax edges V - 1 times
    for _ in range(V - 1):
        for u, v, w in graph:
            if dist[u] != float("inf") and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    # Step 3: Check for negative-weight cycles
    for u, v, w in graph:
        if dist[u] != float("inf") and dist[u] + w < dist[v]:
            print("Graph contains a negative weight cycle")
            return

    print("Vertex Distance from Source")
    for i in range(V):
        print(f"{i}\t\t{dist[i]}")

V = 5  # Number of vertices
E = 8  # Number of edges
graph = [
    (0, 1, -1),
    (0, 2, 4),
    (1, 2, 3),
    (1, 3, 2),
    (1, 4, 2),
    (3, 2, 5),
    (3, 1, 1),
    (4, 3, -3)
]

bellman_ford(graph, V, E, 0)
```
