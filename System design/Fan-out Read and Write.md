# Fan-out Read and Write

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 2/9/2026 9:16:00  
**Updated:** 2/9/2026 9:21:11  
**Exported:** 2/9/2026 22:35:46  
**Link:** [https://chatgpt.com/c/69895868-434c-8323-b001-cbc4bc4a51b3](https://chatgpt.com/c/69895868-434c-8323-b001-cbc4bc4a51b3)  

## Response:
Think of **fan-out** as “one thing turns into many things.”  
Where it happens—**write time** or **read time**—changes the trade-offs.

* * *

Fan-out on **Write**
--------------------

When a single write operation updates **many places**.

![https://miro.medium.com/v2/resize%3Afit%3A2000/1%2AfCmexIKKgSlPCxTNqRbHyg.png](https://miro.medium.com/v2/resize%3Afit%3A2000/1%2AfCmexIKKgSlPCxTNqRbHyg.png)

![https://assets.tina.io/69ca0693-64d4-4507-b654-b1fd354c4314/dd073764-2322-438f-8296-9afe8a8c80e0.png](https://assets.tina.io/69ca0693-64d4-4507-b654-b1fd354c4314/dd073764-2322-438f-8296-9afe8a8c80e0.png)

### Example (Social feed)

*   You post: _“Hello World”_
*   You have **1,000 followers**
*   The system **writes your post into 1,000 feed records** (one per follower)

**What happens**

*   1 write ➜ 1,000 writes
*   Each follower’s feed already contains the post

**Pros**

*   ⚡ Very fast reads (just fetch your feed)
*   Simple read queries

**Cons**

*   🐘 Heavy writes (expensive if followers are huge)
*   Harder to handle failures/partial writes
*   Tricky if you later edit/delete the post

**Used when**

*   Reads are frequent and must be fast
*   Follower count is bounded or manageable
*   Example systems: Facebook/Instagram feeds (mostly write fan-out)

* * *

Fan-out on **Read**
-------------------

When a single read operation **pulls from many sources**.

![https://miro.medium.com/v2/resize%3Afit%3A1200/1%2AyfCO-L0MiECbsbKRKXrUsg.png](https://miro.medium.com/v2/resize%3Afit%3A1200/1%2AyfCO-L0MiECbsbKRKXrUsg.png)

![https://assets.tina.io/69ca0693-64d4-4507-b654-b1fd354c4314/dd073764-2322-438f-8296-9afe8a8c80e0.png](https://assets.tina.io/69ca0693-64d4-4507-b654-b1fd354c4314/dd073764-2322-438f-8296-9afe8a8c80e0.png)

### Example (Social feed)

*   You follow **1,000 people**
*   Each person has their own posts table
*   When you open your feed, the system:
    *   Fetches recent posts from all 1,000 users
    *   Merges + sorts them by time

**What happens**

*   Writes are cheap (each post written once)
*   Reads do a lot of work

**Pros**

*   ✍️ Very cheap writes
*   Easy edits/deletes (single source of truth)
*   Simpler data consistency

**Cons**

*   🐌 Slow or expensive reads
*   Complex queries (merge, sort, paginate)
*   Hard to scale for large follow lists

**Used when**

*   Writes are frequent
*   Reads are less frequent or can tolerate latency
*   Example: Twitter’s early architecture

* * *

Side-by-side summary
--------------------

| Aspect | Fan-out on Write | Fan-out on Read |
| --- | --- | --- |
| Write cost | High | Low |
| Read cost | Low | High |
| Read latency | Fast | Slower |
| Edit/Delete | Harder | Easier |
| Typical use | Feeds at scale | Aggregation systems |

* * *

Strategic takeaway
------------------

This is really a **where do you want to pay the cost?** decision.

*   If your system is **read-heavy** → fan-out on **write**
*   If it’s **write-heavy or consistency-critical** → fan-out on **read**
*   Large systems often use a **hybrid**:
    *   Fan-out on write for normal users
    *   Fan-out on read for celebrities (millions of followers)

If you want, we can map this directly to:

*   a **URL shortener**
*   a **notification system**
*   or a **microservices call graph**  
    and decide which fan-out model actually fits your use case.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)