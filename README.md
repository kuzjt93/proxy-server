# test-proxy-server

- My first proxy server with rate limit and slowRate for each IP request.
- It was built under Typescript and Yarn which I'm still learning. Please let me know or feel free to submit a pull request for any aspect that I need to improve. 
- Proxy server helps you hide api from client side. There is also Rate limit and Request speed for each request. 

## Usage

- Simply clone and run yarn for installation.
- Create .env file like follow:

```js 
#MAIN API
API_BASE_URL= "replace this with ur api link"

#VERSION
 API_VERSION = v1 // api version if you have, if not, please remove prefix in app.ts

 #PORT
PORT=7700
```
- Config Rate limiter and request speed in rateLimiter.ts and slowRate.ts
- After proxy server is up, send request through https://localhost:7777 or where you host this server.
