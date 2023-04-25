"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notFound(req, _res, next) {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
}
module.exports = notFound;
//# sourceMappingURL=notFound.js.map