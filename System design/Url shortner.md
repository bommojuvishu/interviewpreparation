✅ Shortens URLs using Base62 encoding  
✅ Redirects users to the original URL  
✅ Stores data in **PostgreSQL**  
✅ Uses **Redis caching** for fast lookups  
✅ Provides an API for analytics

```js
// pages/api/shorten.js
import { nanoid } from "nanoid";
import { Pool } from "pg";
import Redis from "ioredis";

const pool = new Pool({
  user: "your_user",
  host: "localhost",
  database: "your_db",
  password: "your_password",
  port: 5432,
});

const redis = new Redis();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { long_url } = req.body;
    if (!long_url) {
      return res.status(400).json({ message: "URL is required" });
    }

    const short_id = nanoid(6);
    const short_url = `${process.env.BASE_URL}/${short_id}`;

    try {
      await pool.query(
        "INSERT INTO urls (short_id, long_url) VALUES ($1, $2)",
        [short_id, long_url]
      );
      await redis.setex(short_id, 86400, long_url); // Cache for 24 hours
      return res.json({ short_url });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating short URL", error });
    }
  }

  if (req.method === "GET") {
    const { short_id } = req.query;
    if (!short_id) {
      return res.status(400).json({ message: "Short ID is required" });
    }

    try {
      let long_url = await redis.get(short_id);
      if (!long_url) {
        const result = await pool.query(
          "SELECT long_url FROM urls WHERE short_id = $1",
          [short_id]
        );
        if (result.rows.length === 0) {
          return res.status(404).json({ message: "URL not found" });
        }
        long_url = result.rows[0].long_url;
        await redis.setex(short_id, 86400, long_url); // Cache for 24 hours
      }
      return res.redirect(301, long_url);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching URL", error });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
```
