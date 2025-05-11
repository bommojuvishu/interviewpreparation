# AVL Tree Overview

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 5/4/2025 15:00  
**Updated:** 5/4/2025 15:03  
**Exported:** 5/4/2025 15:03  

## Prompt:
AVL tree

## Response:
An **AVL tree** is a type of **self-balancing binary search tree (BST)** where the difference in heights of the left and right subtrees (called the **balance factor**) of any node is at most **1**.

* * *

### 🔍 Key Concepts

*   **Balance Factor**:  
    `balanceFactor = height(left subtree) - height(right subtree)`  
    Allowed values: -1, 0, 1
    
*   **Rotations** (to maintain balance after insertion/deletion):
    
    1.  **Right Rotation (LL Rotation)**
        
    2.  **Left Rotation (RR Rotation)**
        
    3.  **Left-Right Rotation (LR Rotation)**
        
    4.  **Right-Left Rotation (RL Rotation)**
        

* * *

### ✅ AVL Tree Properties

*   **Time Complexity**:
    
    *   Insertion: `O(log n)`
        
    *   Deletion: `O(log n)`
        
    *   Search: `O(log n)`
        
*   **Height**: Always `O(log n)` due to balancing
    

* * *

### 🔁 Example Rotations

1.  **LL Case (Left-Left)** → Right Rotation  
    When a node is inserted into the left subtree of the left child.
    
2.  **RR Case (Right-Right)** → Left Rotation  
    When a node is inserted into the right subtree of the right child.
    
3.  **LR Case (Left-Right)** → Left-Right Rotation  
    First a left rotation on left child, then right rotation on node.
    
4.  **RL Case (Right-Left)** → Right-Left Rotation  
    First a right rotation on right child, then left rotation on node.
    

* * *

### 🌳 Simple AVL Tree Example

Insert sequence: `10 → 20 → 30`

*   Insert 10:
    
    ```
    10
    ```
    
*   Insert 20:
    
    ```
      10
        \
        20
    ```
    
*   Insert 30 → Unbalanced at 10 (RR Case)  
    Apply Left Rotation →
    
    ```
      20
     /  \
    ```
    

10 30

```

Would you like a diagram or AVL implementation in a specific language (like Python or Java)?
```

## Prompt:
python language implementation

## Response:
Here's a **basic AVL Tree implementation in Python**, with support for **insertion** and **rotations** to keep the tree balanced.

* * *

### ✅ AVL Tree in Python

```python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1  # New node is initially added at leaf

class AVLTree:
    # Get height of the node
    def get_height(self, root):
        return root.height if root else 0

    # Get balance factor
    def get_balance(self, root):
        return self.get_height(root.left) - self.get_height(root.right) if root else 0

    # Right rotate subtree rooted with y
    def right_rotate(self, y):
        x = y.left
        T2 = x.right

        # Perform rotation
        x.right = y
        y.left = T2

        # Update heights
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))

        return x

    # Left rotate subtree rooted with x
    def left_rotate(self, x):
        y = x.right
        T2 = y.left

        # Perform rotation
        y.left = x
        x.right = T2

        # Update heights
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))

        return y

    # Insert a key into the AVL tree
    def insert(self, root, key):
        # 1. Perform normal BST insertion
        if not root:
            return Node(key)
        elif key < root.key:
            root.left = self.insert(root.left, key)
        elif key > root.key:
            root.right = self.insert(root.right, key)
        else:
            return root  # Duplicate keys not allowed

        # 2. Update height of this ancestor node
        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))

        # 3. Get balance factor
        balance = self.get_balance(root)

        # 4. If node is unbalanced, then try out the 4 cases

        # Left Left
        if balance > 1 and key < root.left.key:
            return self.right_rotate(root)

        # Right Right
        if balance < -1 and key > root.right.key:
            return self.left_rotate(root)

        # Left Right
        if balance > 1 and key > root.left.key:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)

        # Right Left
        if balance < -1 and key < root.right.key:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root

    # Inorder traversal (for testing)
    def inorder(self, root):
        if root:
            self.inorder(root.left)
            print(f"{root.key} (h={root.height})", end=' ')
            self.inorder(root.right)
```

* * *

### 🧪 Usage Example

```python
avl = AVLTree()
root = None
nums = [10, 20, 30, 40, 50, 25]

for num in nums:
    root = avl.insert(root, num)

print("Inorder traversal of the constructed AVL tree is:")
avl.inorder(root)
```

* * *

Would you like to add **deletion** functionality as well?

## Prompt:
what is red black tree

## Response:
A **Red-Black Tree** is a type of **self-balancing binary search tree (BST)** that ensures **O(log n)** time complexity for insertion, deletion, and search operations by maintaining **color-based rules**.

* * *

### 🎯 Why Red-Black Trees?

They balance themselves **more loosely** than AVL trees but offer **faster insertion/deletion** in practice due to fewer rotations.

* * *

### 🔴⚫ Red-Black Tree Properties

Each node has an extra bit: **red** or **black**.

The tree must satisfy these rules:

1.  **Each node is either red or black**
    
2.  **The root is always black**
    
3.  **All leaves (NIL nodes) are black** (null pointers are black)
    
4.  **If a node is red, its children must be black** (no two reds in a row)
    
5.  **Every path from a node to its descendant NIL nodes must have the same number of black nodes** (called **black-height**)
    

* * *

### 📉 Time Complexities

| Operation | Time |
| --- | --- |
| Search | O(log n) |
| Insert | O(log n) |
| Delete | O(log n) |

* * *

### 🔄 Rebalancing in Red-Black Tree

After **insertion** or **deletion**, the tree may violate properties. Rebalancing involves:

*   **Recoloring** nodes
    
*   **Rotations**: left or right
    
*   Ensuring black-height remains consistent
    

Although more complex than AVL rotations, fewer rebalances are typically required.

* * *

### ✅ Comparison: AVL vs Red-Black

| Feature | AVL Tree | Red-Black Tree |
| --- | --- | --- |
| Balancing | Strict (more balanced) | Looser (less rotations) |
| Insert/Delete | Slower | Faster |
| Search | Faster (tighter height) | Slightly slower |
| Use Case | Read-heavy systems | Write-heavy systems |

* * *

Would you like a **Python implementation** of the Red-Black Tree as well?

## Prompt:
yes

## Response:
Here’s a **simplified Python implementation of a Red-Black Tree** that supports **insertion**, including the necessary **rotations** and **recoloring**. Full-featured red-black trees (with deletion, advanced edge cases, etc.) are much longer, but this version is great for understanding the core logic.

* * *

### ⚙️ Red-Black Tree Implementation in Python

```python
class Node:
    def __init__(self, data, color='red'):
        self.data = data
        self.color = color  # 'red' or 'black'
        self.left = None
        self.right = None
        self.parent = None


class RedBlackTree:
    def __init__(self):
        self.NIL = Node(data=None, color='black')  # Sentinel node
        self.root = self.NIL

    def insert(self, data):
        new_node = Node(data)
        new_node.left = self.NIL
        new_node.right = self.NIL

        parent = None
        current = self.root

        while current != self.NIL:
            parent = current
            if new_node.data < current.data:
                current = current.left
            else:
                current = current.right

        new_node.parent = parent

        if parent is None:
            self.root = new_node
        elif new_node.data < parent.data:
            parent.left = new_node
        else:
            parent.right = new_node

        new_node.color = 'red'
        self.fix_insert(new_node)

    def fix_insert(self, node):
        while node != self.root and node.parent.color == 'red':
            parent = node.parent
            grandparent = parent.parent

            if parent == grandparent.left:
                uncle = grandparent.right
                if uncle.color == 'red':
                    parent.color = uncle.color = 'black'
                    grandparent.color = 'red'
                    node = grandparent
                else:
                    if node == parent.right:
                        node = parent
                        self.left_rotate(node)
                    parent.color = 'black'
                    grandparent.color = 'red'
                    self.right_rotate(grandparent)
            else:
                uncle = grandparent.left
                if uncle.color == 'red':
                    parent.color = uncle.color = 'black'
                    grandparent.color = 'red'
                    node = grandparent
                else:
                    if node == parent.left:
                        node = parent
                        self.right_rotate(node)
                    parent.color = 'black'
                    grandparent.color = 'red'
                    self.left_rotate(grandparent)
        self.root.color = 'black'

    def left_rotate(self, x):
        y = x.right
        x.right = y.left
        if y.left != self.NIL:
            y.left.parent = x
        y.parent = x.parent

        if x.parent is None:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y

        y.left = x
        x.parent = y

    def right_rotate(self, y):
        x = y.left
        y.left = x.right
        if x.right != self.NIL:
            x.right.parent = y
        x.parent = y.parent

        if y.parent is None:
            self.root = x
        elif y == y.parent.left:
            y.parent.left = x
        else:
            y.parent.right = x

        x.right = y
        y.parent = x

    def inorder(self, node):
        if node != self.NIL:
            self.inorder(node.left)
            print(f"{node.data} ({node.color})", end=' ')
            self.inorder(node.right)
```

* * *

### 🧪 Example Usage

```python
rbt = RedBlackTree()
for val in [10, 20, 30, 15, 25, 5, 1]:
    rbt.insert(val)

print("Inorder traversal (with colors):")
rbt.inorder(rbt.root)
```

* * *

Would you like to add **deletion** or see a **visual diagram** for a specific input?



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)