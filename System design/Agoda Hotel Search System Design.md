# Hotel Search System Design

**User:** Bommoju Vishwanath (bommojuvishu@gmail.com)  
**Created:** 5/22/2025 12:16  
**Updated:** 5/22/2025 12:26  
**Exported:** 5/22/2025 12:28  

## Prompt:
How would you design a hotel search with filters like Agoda? system design

## Response:
Designing a **hotel search system with filters** (like Agoda, Booking.com, etc.) involves multiple components working together to deliver a performant, scalable, and user-friendly experience. Here's a **high-level system design**, broken down into key aspects:

* * *

🧱 1. **Requirements**
----------------------

### ✅ Functional

*   Users can search for hotels by location, check-in/check-out dates, number of guests.
    
*   Users can apply filters (price range, ratings, amenities, star rating, etc.).
    
*   Sorting options (price, rating, popularity).
    
*   Display results with pagination or infinite scroll.
    
*   View hotel details.
    

### ❌ Non-Functional

*   High availability
    
*   Low latency (sub-second search results)
    
*   Scalability (support millions of listings & users)
    
*   Fault tolerance
    
*   Caching to reduce backend pressure
    

* * *

📐 2. **High-Level Architecture**
---------------------------------

```
              ┌──────────────┐
              │  Client UI   │
              └──────┬───────┘
                     │
              ┌──────▼───────┐
              │ API Gateway  │
              └──────┬───────┘
                     │
     ┌───────────────▼────────────────┐
     │    Backend Services Layer      │
     │ ┌────────────────────────────┐ │
     │ │ Hotel Search Service       │ │
     │ │ Filter + Sort Logic        │ │
     │ └────────────────────────────┘ │
     │ ┌────────────────────────────┐ │
     │ │ Hotel Details Service      │ │
     │ └────────────────────────────┘ │
     └───────────────┬────────────────┘
                     │
     ┌───────────────▼───────────────┐
     │      Search Index (ES)       │ ◄──── Hotel metadata (name, location, price, rating, tags, etc.)
     └───────────────┬───────────────┘
                     │
           ┌─────────▼────────┐
           │  Relational DB   │ (PostgreSQL/MySQL)
           └─────────┬────────┘
                     │
               ┌─────▼──────┐
               │ Hotel Data │ (prices, rooms, availability)
               └────────────┘
```

* * *

🗃 3. **Data Storage Design**
-----------------------------

### a. **Hotel Metadata (Searchable)**

Stored in **Elasticsearch** (or OpenSearch):

*   Hotel name, city, country
    
*   Star rating, user rating
    
*   Min/max price
    
*   Tags/amenities (pool, wifi, AC)
    
*   Room types
    
*   Popularity/score
    
*   Geo-coordinates (for proximity search)
    

### b. **Transactional Data**

Stored in **SQL DB** (PostgreSQL/MySQL):

*   Hotel room inventory & availability
    
*   Booking records
    
*   Pricing per room type per day
    
*   Promotions/discounts
    

### c. **Blob Storage**

*   Hotel images, hosted on S3 or GCS
    

* * *

🔍 4. **Search Flow**
---------------------

### Step-by-step

1.  **User Input**:
    
    *   Location (city or coordinates)
        
    *   Dates
        
    *   Filters (price range, amenities)
        
    *   Guests
        
2.  **Search API** triggers:
    
    *   Query to **Elasticsearch** with filters, pagination, sort
        
    *   Filter by geo-distance, price range, tags, rating
        
3.  **Results**:
    
    *   Return top N hotel IDs + metadata
        
    *   Fetch availability & prices from SQL (possibly via cache)
        
4.  **Display Results**:
    
    *   Merge metadata + price/availability
        
    *   Paginate results or use infinite scroll
        

* * *

⚙️ 5. **Filters and Facets**
----------------------------

*   Implemented via **Elasticsearch aggregations**:
    
    *   Price range buckets
        
    *   Amenities count
        
    *   Star ratings
        
    *   Location-based filtering
        
    *   Room availability
        

Example ES filter:

```json
{
  "query": {
    "bool": {
      "must": [
        { "match": { "city": "Hyderabad" }},
        { "range": { "price": { "lte": 5000 }}},
        { "term": { "amenities": "wifi" }}
      ],
      "filter": {
        "geo_distance": {
          "distance": "10km",
          "location": {
            "lat": 17.385044,
            "lon": 78.486671
          }
        }
      }
    }
  }
}
```

* * *

🚀 6. **Performance & Scaling**
-------------------------------

### a. **Caching**

*   Cache frequently searched queries (Redis)
    
*   Cache hotel metadata and pricing
    
*   CDN for static content (images)
    

### b. **Rate Limiting**

*   Protect APIs using rate limiter (e.g., token bucket)
    

### c. **Scalability**

*   Stateless services behind load balancer
    
*   Use Kubernetes or ECS for orchestration
    
*   Scale Elasticsearch cluster based on load
    

* * *

📊 7. **Analytics & Ranking**
-----------------------------

*   Use ML-based ranking (e.g., Learning to Rank in ES)
    
*   Track CTR, bookings, views
    
*   Re-rank results using popularity or personalization
    

* * *

🧪 8. **Additional Features**
-----------------------------

*   **Personalization**: Show user-preferred filters or hotels.
    
*   **Map-based search**: Integrate with Map APIs for pin drops.
    
*   **Multi-currency, localization**.
    
*   **A/B Testing** of ranking algorithms or layouts.
    

* * *

🧱 9. Tech Stack
----------------

| Component | Tech |
| --- | --- |
| API Layer | Node.js / Python Flask / Java |
| Search Engine | Elasticsearch / OpenSearch |
| Relational DB | PostgreSQL / MySQL |
| Cache | Redis / Memcached |
| Object Storage | AWS S3 / GCP Storage |
| Deployment | Kubernetes / ECS / EKS |
| Monitoring | Prometheus + Grafana |
| CI/CD | GitHub Actions / Jenkins |

* * *

Would you like me to diagram this visually, or focus on any one part like filter logic, Elasticsearch schema, or caching strategy?

## Prompt:
Elasticsearch schema

## Response:
Here's a well-structured **Elasticsearch schema** (mapping) for a **hotel search engine**, supporting filters like location, price range, amenities, ratings, and more.

* * *

🧾 Elasticsearch Index: `hotels`
--------------------------------

### ✅ Use Cases Supported

*   Text search (hotel name, city)
    
*   Range queries (price, rating)
    
*   Geo distance queries (nearby hotels)
    
*   Terms filter (amenities, star rating)
    
*   Aggregations (faceted filters)
    

* * *

🧱 Example Schema (Mapping)
---------------------------

```json
PUT /hotels
{
  "mappings": {
    "properties": {
      "hotel_id": { "type": "keyword" },

      "name": {
        "type": "text",
        "analyzer": "standard"
      },

      "city": {
        "type": "keyword"
      },

      "country": {
        "type": "keyword"
      },

      "location": {
        "type": "geo_point"
      },

      "star_rating": {
        "type": "integer"  // e.g. 3, 4, 5 stars
      },

      "user_rating": {
        "type": "float"    // e.g. 4.3
      },

      "price_min": {
        "type": "float"
      },

      "price_max": {
        "type": "float"
      },

      "amenities": {
        "type": "keyword"  // e.g. ["wifi", "pool", "parking"]
      },

      "available_rooms": {
        "type": "integer"
      },

      "tags": {
        "type": "keyword"  // e.g. ["family-friendly", "beachfront"]
      },

      "popularity_score": {
        "type": "float"
      },

      "updated_at": {
        "type": "date"
      }
    }
  }
}
```

* * *

🧪 Example Document
-------------------

```json
{
  "hotel_id": "H12345",
  "name": "The Royal Orchid",
  "city": "Hyderabad",
  "country": "India",
  "location": { "lat": 17.385044, "lon": 78.486671 },
  "star_rating": 4,
  "user_rating": 4.3,
  "price_min": 3500.0,
  "price_max": 7000.0,
  "amenities": ["wifi", "pool", "parking", "ac"],
  "available_rooms": 15,
  "tags": ["family-friendly", "business"],
  "popularity_score": 87.5,
  "updated_at": "2025-05-22T10:00:00Z"
}
```

* * *

🧠 Schema Design Notes
----------------------

*   **`keyword` vs `text`**:
    
    *   Use `keyword` for exact match & aggregations.
        
    *   Use `text` for full-text search (e.g. hotel name).
        
*   **Geo queries**:
    
    *   The `geo_point` type enables distance filtering and sorting.
        
*   **Sorting by price/popularity**:
    
    *   Use `price_min`, `popularity_score` for sort fields.
        
*   **Aggregations**:
    
    *   Use `amenities`, `star_rating`, `price_min` for faceted filtering.
        

* * *

🧰 Optional Enhancements
------------------------

| Feature | Field | Details |
| --- | --- | --- |
| Autocomplete | Use `completion` suggester on `name` | Improves UX |
| Multi-language support | Use language-specific analyzers | For city, hotel name |
| Nested fields | For room types | If storing rooms in same doc |

* * *

Would you like a schema that supports **nested room data**, **availability by date**, or **multi-currency pricing**?

## Prompt:
how elastic search work ? will it fetch data for every query from postgres ?

## Response:
Great question, Vishwanath.

**Elasticsearch does _not_ fetch data from PostgreSQL (or any database) during a query.** It is designed to be a **standalone, high-speed search engine**. Let me explain how it works and how it fits with a system like Agoda.

* * *

🧠 How Elasticsearch Works (Overview)
-------------------------------------

1.  **You index (store) documents into Elasticsearch** — like hotel info.
    
2.  These documents are stored in a structure optimized for search (inverted index).
    
3.  When users search, Elasticsearch **queries its own index** — no external calls to PostgreSQL or other databases.
    
4.  Results are returned instantly from the Elasticsearch engine.
    

* * *

🔄 So When Is PostgreSQL Involved?
----------------------------------

### 🔹 1. **Initial Data Sync (ETL or Indexing)**:

*   A batch or real-time process pulls data from PostgreSQL (hotel data, prices, availability).
    
*   That data is then **pushed into Elasticsearch** for search purposes.
    
*   This is a **one-way sync** — ES is not querying Postgres during search.
    

Example:

```bash
Postgres → ETL/Sync → Elasticsearch
```

### 🔹 2. **Dual Source Architecture**:

*   Elasticsearch is used for _search & filtering_.
    
*   PostgreSQL is used for _reliable, transactional data_ like:
    
    *   Room availability per date
        
    *   Actual booking confirmation
        
    *   Detailed room descriptions or reviews
        

You may get **hotel IDs from Elasticsearch**, then **fetch real-time price/availability from PostgreSQL or cache** for display.

* * *

🧭 Typical Search Flow
----------------------

1.  **User searches "Hotels in Hyderabad with pool under ₹5000"**.
    
2.  Elasticsearch responds with:
    
    *   List of hotel IDs, names, prices, etc. from its indexed copy.
        
3.  For each hotel:
    
    *   You _may_ query PostgreSQL or Redis to get **live price/availability**.
        
4.  Final results are displayed.
    

* * *

⚡ Why Use Elasticsearch Separately?
-----------------------------------

| Elasticsearch | PostgreSQL |
| --- | --- |
| Blazing-fast full-text search | Reliable data store |
| Filters, facets, scoring, geolocation | ACID transactions |
| Scales horizontally | Not ideal for search at scale |
| Near real-time updates | Used for writes and master data |

* * *

🛠 Example Architecture
-----------------------

```
           ┌──────────────┐
           │  PostgreSQL  │ <────── CRUD / Master hotel data
           └─────▲────────┘
                 │
           ┌─────┴─────┐
           │  ETL Job  │ (daily or real-time)
           └─────▼─────┘
          ┌──────────────┐
          │ Elasticsearch│ <───── Search API
          └──────────────┘
```

* * *

✅ Summary
---------

*   **Elasticsearch does not call PostgreSQL during search**.
    
*   You **push data into Elasticsearch in advance** (via sync/ETL).
    
*   Search happens entirely inside Elasticsearch.
    
*   PostgreSQL is used for **live data**, especially prices/availability or booking logic.
    

* * *

Let me know if you'd like code examples for syncing data from Postgres to Elasticsearch (e.g., using Python or Node.js), or how to structure real-time sync.

## Prompt:
can I integrate ML here ? does vectorsing the postgress data any help ?

## Response:
Yes, Vishwanath — you can absolutely **integrate ML into your hotel search system**, and **vectorizing data** from PostgreSQL can be **very helpful** — **if** your use case involves **semantic search**, **recommendation**, or **personalization**.

Let’s break it down:

* * *

✅ 1. **Where Can ML Be Used in Hotel Search?**
----------------------------------------------

### 🔍 **a. Search Ranking (Learning to Rank)**

*   Use ML to reorder search results based on:
    
    *   Click-through rates (CTR)
        
    *   Booking conversion
        
    *   User preferences
        
*   **How?**
    
    *   Train a ranking model (e.g. LightGBM) using features like price, rating, location, past behavior.
        
    *   Integrate with Elasticsearch using **Learning to Rank plugin** or rerank post-query.
        

* * *

### 🎯 **b. Personalized Recommendations**

*   Show hotels based on user behavior, location, time of year.
    
*   Recommend:
    
    *   Hotels similar to ones viewed/booked
        
    *   Hotels liked by similar users (collaborative filtering)
        

* * *

### 🧠 **c. Semantic Search with Vectors**

Instead of relying on keywords, use **vector embeddings** to power **semantic search**.

#### Example Use Case:

*   User types: _“romantic resort near the beach”_.
    
*   You convert that into a **vector** using BERT or similar.
    
*   Compare it with hotel description vectors using **vector similarity search** (cosine or dot product).
    

* * *

🧱 2. Vectorizing PostgreSQL Data
---------------------------------

Yes, you can:

*   Generate **embeddings** (vectors) from:
    
    *   Hotel descriptions
        
    *   User reviews
        
    *   Tags or amenities
        

Use models like:

*   Sentence Transformers (e.g. `all-MiniLM-L6-v2`)
    
*   OpenAI embeddings (if using external APIs)
    

Then:

1.  Store vectors in a **vector database** (like Elasticsearch v8+, Pinecone, Weaviate, or Qdrant).
    
2.  Or in PostgreSQL (with pgvector extension) if scale is small.
    

* * *

### 💡 Example: pgvector

```sql
CREATE TABLE hotel_vectors (
  hotel_id UUID PRIMARY KEY,
  embedding VECTOR(384)  -- Assuming 384-dim embeddings
);
```

Then use:

```sql
SELECT hotel_id, embedding <#> '[1.23, 4.56, ...]'::vector
FROM hotel_vectors
ORDER BY embedding <#> '[1.23, 4.56, ...]'::vector
LIMIT 10;
```

Or in Elasticsearch:

```json
"knn": {
  "field": "hotel_embedding",
  "query_vector": [1.23, 4.56, ...],
  "k": 10,
  "num_candidates": 100
}
```

* * *

📈 3. When to Use Vector Search?
--------------------------------

| Use Case | Use Vector Search? |
| --- | --- |
| Keyword search (e.g. “wifi, ₹5000”) | ❌ Stick with traditional filters |
| Semantic queries (“quiet place with nature”) | ✅ Vector helps a lot |
| Recommendations | ✅ Vectors + ML models |
| Full personalization | ✅ With user embeddings |

* * *

🔗 Summary
----------

✅ Yes, ML fits well:

*   For ranking, recommendation, semantic search
    

✅ Yes, vectorizing helps:

*   Use it if you want to support **semantic or personalized** search
    
*   Store vectors in Elasticsearch (v8+), Pinecone, pgvector, or similar
    

* * *

Would you like:

*   Code to generate hotel embeddings using Python + SentenceTransformers?
    
*   Example of integrating vector search into Elasticsearch or Postgres?
    
*   A hybrid search design (text + vector)?



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)