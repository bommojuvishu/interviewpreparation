### **LRU Cache Algorithm Explanation with Example**

The **Least Recently Used (LRU) Cache** algorithm ensures that when the cache reaches its maximum size, it removes the **least recently used** entry before adding a new one. It is efficiently implemented using:

1.  **HashMap (Dictionary in Python)** → For O(1) access to cached items.
2.  **Doubly Linked List** → To maintain the order of usage (most recently used at the front, least recently used at the end).

### **Algorithm Steps**

1️⃣ **Initialization**:

- Maintain a **hashmap (`lookup`)** where `key → node` mapping is stored.
- Maintain a **doubly linked list (`linked_list`)** to track the order of recent usage.
- The **head** of the linked list is the **most recently used (MRU)**.
- The **tail** is the **least recently used (LRU)** and will be removed if the cache is full.

2️⃣ **GET(query)**:

- If `query` exists in the `lookup`, move the node to the **front (MRU)** and return the result.
- If it **does not exist**, return `None` (cache miss).

3️⃣ **SET(query, result)**:

- If `query` is **already in cache**, update its value and move it to the **front (MRU)**.
- If `query` **is not in cache**:

  - If cache **is full**, remove the **tail (LRU)** from both `lookup` and the `linked list`.
  - Add the new node at the **front (MRU)** and store it in `lookup`.

```python
class ListNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.dic = dict() # key to node
        self.capacity = capacity
        self.head = ListNode(0, 0)
        self.tail = ListNode(-1, -1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key: int) -> int:
        if key in self.dic:
            node = self.dic[key]
            self.removeFromList(node)
            self.insertIntoHead(node)
            return node.value
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if key in self.dic:             # similar to get()
            node = self.dic[key]
            self.removeFromList(node)
            self.insertIntoHead(node)
            node.value = value         # replace the value len(dic)
        else:
            if len(self.dic) >= self.capacity:
                self.removeFromTail()
            node = ListNode(key,value)
            self.dic[key] = node
            self.insertIntoHead(node)

    def removeFromList(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def insertIntoHead(self, node):
        headNext = self.head.next
        self.head.next = node
        node.prev = self.head
        node.next = headNext
        headNext.prev = node

    def removeFromTail(self):
        if len(self.dic) == 0: return
        tail_node = self.tail.prev
        del self.dic[tail_node.key]
        self.removeFromList(tail_node)

# Example Usage
lru = LRUCache(3)
lru.put(1, 100)
lru.put(2, 200)
lru.put(3, 300)
print(lru.get(1))  # 100 (moves to most recently used)
lru.put(4, 400)    # Removes least recently used key (2)
print(lru.get(2))  # -1 (not found)
print(lru.get(3))  # 300

```

### **Why This Algorithm is Efficient?**

- **GET(query) → O(1)**

  - Uses `lookup` (hashmap) for direct access.
  - Moves node to front in O(1) with linked list.

- **SET(query, result) → O(1)**

  - Updates value in `lookup` in O(1).
  - Moves existing node to front in O(1).
  - If full, removes **tail (LRU)** in O(1).
