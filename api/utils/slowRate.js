"use strict";
const slowDown = require("express-slow-down");
const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000,
    delayAfter: 100,
    delayMs: 500, // begin adding 500ms of delay per request above 100:
});
module.exports = speedLimiter;
//# sourceMappingURL=slowRate.js.map