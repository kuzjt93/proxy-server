"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, _req, res) {
    const { status = 500, message = "Proxy server errorPlease contact admin at support@nailsa2z.com!", } = err;
    res.status(status).json({ error: message });
}
module.exports = errorHandler;
//# sourceMappingURL=errorHandler.js.map