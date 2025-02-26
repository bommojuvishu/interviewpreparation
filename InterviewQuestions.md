# SQL

- Finding Second Highest Salary

### Finding Second Highest Salary

SELECT name, MAX(salary) AS salary
FROM employee
WHERE salary <> (SELECT MAX(salary)
FROM employee);

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
