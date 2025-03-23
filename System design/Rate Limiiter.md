## Redis-Based Rate Limiter (Fixed Window Counter)

```js
import Redis from "ioredis";

const redis = new Redis(); // Connect to Redis

export default async function rateLimiter(req, res, next) {
  const ip = req.ip; // Identify user by IP
  const limit = 100; // Max requests
  const window = 60; // Time window (seconds)
  const key = `rate:${ip}`;

  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, window); // Set expiry on first request

  if (count > limit) {
    return res.status(429).json({ message: "Too Many Requests" });
  }

  next();
}
```

# Token Bucket

### **How It Works:**

- Each user gets a **bucket** with `maxTokens` capacity.
- Requests **consume** tokens.
- **Tokens refill** at a constant rate (`refillRate` per second).
- If no tokens are available, return **429 Too Many Requests**.

```js
import Redis from "ioredis";

const redis = new Redis(); // Connect to Redis

const MAX_TOKENS = 100; // Max tokens per user
const REFILL_RATE = 1; // Tokens added per second

async function getBucket(userId) {
  const key = `bucket:${userId}`;
  const now = Date.now() / 1000; // Current time in seconds

  // Get bucket data (tokens, last refill timestamp)
  let [tokens, lastRefill] = await redis.hmget(key, "tokens", "lastRefill");

  tokens = tokens ? parseFloat(tokens) : MAX_TOKENS;
  lastRefill = lastRefill ? parseFloat(lastRefill) : now;

  // Calculate how many tokens to add
  const elapsedTime = now - lastRefill;
  const newTokens = Math.min(MAX_TOKENS, tokens + elapsedTime * REFILL_RATE);

  return { tokens: newTokens, lastRefill: now, key };
}

export default async function handler(req, res) {
  const userId = req.headers["x-user-id"] || req.ip; // Identify user
  const { tokens, lastRefill, key } = await getBucket(userId);

  if (tokens < 1) {
    return res.status(429).json({ message: "Too Many Requests" });
  }

  // Consume 1 token
  await redis.hmset(key, "tokens", tokens - 1, "lastRefill", lastRefill);
  await redis.expire(key, 60); // Expire after inactivity

  res.json({ message: "Request Allowed", remainingTokens: tokens - 1 });
}
```
