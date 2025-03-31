## CDN

A CDN is a network of geographically dispersed servers used to deliver static content. CDN
servers cache static content like images, videos, CSS, JavaScript files, etc.

# NOTE:

It is recommended to store the session data in a separate DB. because main application DB can get overload , will be unable to login to the app. Use a in memory storage like redis , memcached ,but will lost the data on restart . Session data is stored at the server level, so it bad approach to implement at the server level
