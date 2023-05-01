"use strict";
const rateLimit = require("express-rate-limit");
// limit each IP to 100 requests per certain time
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
module.exports = limiter;
//# sourceMappingURL=rateLimiter.js.map