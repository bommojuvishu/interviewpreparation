# BFS

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        que = []
        que.append(root)
        res= []
        while que:

            for i in range(len(que)):
                x = que.pop(0)
                if x.left:
                    que.append(x.left)
                if x.right:
                    que.append(x.right)

                res.append(x.val)
        print("res",res)
        return res
```
