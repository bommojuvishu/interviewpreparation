# Prefix Suffix Product

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 2/18/2026 7:41:51  
**Updated:** 2/18/2026 8:36:04  
**Exported:** 2/18/2026 8:36:56  
**Link:** [https://chatgpt.com/c/69951fe6-1328-8322-b54a-d10a98d9c962](https://chatgpt.com/c/69951fe6-1328-8322-b54a-d10a98d9c962)

## Prompt:

for i in range(x):
for j in range(i+1, x):
for k in range(j+1,x):
if i < j < k and nums[i] < nums[j]< nums[k]:
print(nums[i] , nums[j] , nums[k])
break

how can I break all the loops at a time

## Response:

Good question.  
This is exactly where many candidates lose control of flow in interviews.

Your current `break` only exits the **innermost loop**.

You want to exit **all three loops immediately** once a triplet is found.

Let’s go through the clean options — and which one you should actually use.

---

# ✅ Best Practical Way → Use `return`

If this code is inside a function, the cleanest solution is:

```python
def hasTriplet(nums):
    x = len(nums)

    for i in range(x):
        for j in range(i+1, x):
            for k in range(j+1, x):
                if nums[i] < nums[j] < nums[k]:
                    print(nums[i], nums[j], nums[k])
                    return True   # exits ALL loops immediately

    return False
```

Why this is best:

- Clean
- No flags
- No confusing logic
- Interview-friendly

If you can use `return`, always use it.

---

# ✅ Option 2 → Use a Flag Variable

If you must stay in the same scope:

```python
found = False

for i in range(x):
    for j in range(i+1, x):
        for k in range(j+1, x):
            if nums[i] < nums[j] < nums[k]:
                print(nums[i], nums[j], nums[k])
                found = True
                break
        if found:
            break
    if found:
        break
```

This works — but it’s messy.

In interviews, this is acceptable but not elegant.

---

# ✅ Option 3 → Raise Exception (Advanced Trick)

Some people do:

```python
class Found(Exception):
    pass

try:
    for i in range(x):
        for j in range(i+1, x):
            for k in range(j+1, x):
                if nums[i] < nums[j] < nums[k]:
                    print(nums[i], nums[j], nums[k])
                    raise Found
except Found:
    pass
```

⚠️ This is clever but NOT recommended in interviews.  
It looks like overengineering.
