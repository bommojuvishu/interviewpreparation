# Approach

- start with the base or smaller test case
- check if empty or single value given as parameter , then build the solution on it
- write a basic algo before proceding
- check the data given ( if it can used as for loop condition)
- use nonlocal keyword to refer the main function variable inside the nested function

## Tips

- Arrays : check if can sort the array , it may help any way
  - str.sort() : in line , only list
  - sorted(str , reverse = True) : new string , both string and list
- Arrays/ String : remove duplicate set(str) or use dictionary { value :value}
- Array: split a string into a list of characters
  - list("foobar") # ['f', 'o', 'o', 'b', 'a', 'r']
- Array temp: []\*len(arr)
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

## Sets

A set in Python is an unordered collection of unique elements. It supports various operations for adding, removing, and performing set operations like union and intersection.
it is same as dictionary but stores single value

```python

thisset = {"apple", "banana", "cherry", "apple"}
thisset = set(("apple", "banana", "cherry"))

thisset.add("orange")

if "banana" in my_set:
    print("2 is in the set")
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

## findKthLargest

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

# 2 pointer approach

- use if we want to move the set of keys to end
  - https://leetcode.com/problems/move-zeroes/description/

# Binary Search

- // is the floor division : 15//2 , output= 7
- mid formula :
  m = l + ((r - l) // 2)
  mid = (high +low) // 2

# Stack

- check if stack is empty or not , then check for value
  - if not stack or stack.pop() != mapp[ch]:
  - if len(arr)> 0 and ( arr[-1] == x ):

# Linked List

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

# Sort

## Selection sort

```python
def selection_sort(my_list):
    for i in range(len(my_list)-1):
        min_index = i
        for j in range(i+1, len(my_list)):
            if my_list[j] < my_list[min_index]:
                min_index = j
        if i != min_index:
            temp = my_list[i]
            my_list[i] = my_list[min_index]
            my_list[min_index] = temp
    return my_list
```

# Heap

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
