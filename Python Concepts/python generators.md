Link

https://www.geeksforgeeks.org/python/generators-in-python/

Example

```py
def fun(max):
    cnt = 1
    while cnt <= max:
        yield cnt
        cnt += 1

ctr = fun(5)
for n in ctr:
    print(n)
```
