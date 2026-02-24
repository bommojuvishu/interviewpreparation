# Authentication in WEB

types of authentication

1. **Password-Based Authentication** : plain text password is stored in the DB
2. **Hashed Password-Based Authentication** : usually encrypted using the hash function . it can be cracked but takes very long time to crack . In google , there are available hashed passwords . you can add extra layer salt
3. Token-Based Authentication : JWT tokens . Tokens are stateless, allowing for scalability, and can be stored in cookies or local storage.
4. **OAuth (Open Authorization)** : A token-based authorization framework that allows third-party applications to access user resources without sharing credentials.Commonly used for social logins (e.g., "Login with Google" or "Login with Facebook").
5. API Key Authentication : Simple authentication method where the client includes an API key in each request to the server.

- Commonly used for authenticating requests in web APIs.
- Not suitable for highly sensitive operations as API keys can be easily exposed.

6. Cookie-Based Authentication
   Stores session information in cookies on the client-side.

- The server validates the session cookie on each request to determine if the user is authenticated.
- Common in traditional web applications where server-side session management is needed.
  Passport js is generally used

7. Two-Factor Authentication (2FA) / Multi-Factor Authentication (MFA)

### **1. Session Management Techniques**

There are several ways to manage sessions in web development:

#### **A. Cookie-Based Sessions**

- The server sets a session ID in a cookie.
- The client sends the cookie with every request.
- The server uses the session ID to retrieve user data from storage.

✅ **Pros**:

- Simple to implement.
- Works across multiple servers.

❌ **Cons**:

- Limited storage (usually 4KB).
- Can be vulnerable to **cookie theft** and **session hijacking** if not secured properly.

#### **B. Server-Side Sessions**

- Session data is stored on the server.
- A unique session ID is sent to the client as a cookie or via a request header.
- The server retrieves user data based on the session ID.

✅ **Pros**:

- More secure than client-side storage.
- Can store large amounts of data.

❌ **Cons**:

- Requires server memory/storage.
- Can be difficult to scale without session replication across servers.

#### **C. Token-Based Sessions (JWT - JSON Web Token)**

- Instead of storing session data on the server, a signed token (JWT) is issued upon authentication.
- The token contains user data and is sent with every request.
- The server validates the token and retrieves user information.

✅ **Pros**:

- Works well in **distributed systems** (microservices, serverless).
- No need for session storage on the server.

❌ **Cons**:

- Once issued, a token cannot be revoked unless managed separately.
- Tokens can become large if they store too much data.

#### **D. Local Storage & Session Storage**

- Web browsers provide `localStorage` and `sessionStorage` for storing session data on the client.
- Unlike cookies, these are not sent with every request.

✅ **Pros**:

- Reduces server load.
- Works well for storing temporary UI state.

❌ **Cons**:

- Vulnerable to **XSS attacks**.
- Data persists even after logout unless explicitly cleared.

---

### **2. Security Best Practices for Session Management**

1.  **Use HTTPS** – Prevents session hijacking via man-in-the-middle attacks.
2.  **Set Secure & HttpOnly Cookies** – Ensures cookies are not accessed by JavaScript.
3.  **Implement Token Expiry & Rotation** – Reduces risks if a token is leaked.
4.  **Regenerate Session IDs After Login** – Prevents session fixation attacks.
5.  **Use SameSite Cookies** – Prevents CSRF (Cross-Site Request Forgery).
6.  **Store Tokens Securely** – Avoid storing sensitive tokens in `localStorage`.

---

### **3. Session Management in Different Frameworks**

#### **React (Frontend)**

- Uses `localStorage`, `sessionStorage`, or cookies for storing authentication tokens.
- For state management, libraries like **Zustand** or **Redux** can be used.

#### **Flask (Backend)**

- Uses Flask-Session to manage sessions.
- Can integrate JWT-based authentication with **Flask-JWT-Extended**.

#### **Node.js with Express**

- Uses `express-session` for server-side session management.
- Can also use JWTs with `jsonwebtoken`.

#### **Next.js**

- Uses API routes for session handling.
- Libraries like `next-auth` simplify authentication.

---

### **Choosing the Right Session Management Approach**

**Scenario**
Small app with limited users : Server-side sessions

Scalable & distributed app : JWT-based sessions

Secure authentication : HttpOnly, Secure Cookies

Preventing XSS attacks : Avoid localStorage for sensitive data

Fast performance & UX :LocalStorage for non-sensitive UI state
