"use strict";
const { createProxyMiddleware } = require("http-proxy-middleware");
const API_BASE_URL = process.env.API_BASE_URL;
const proxyConfig = createProxyMiddleware({
    target: API_BASE_URL,
    changeOrigin: true,
    onProxyReq: function (proxyReq, req, res) {
        console.log("proxyReq", req.body);
    },
    //   onProxyReq: function (proxyReq: any, req: any, res: any) {
    //     if (
    //       req.headers["content-type"] &&
    //       req.headers["content-type"].startsWith("multipart/form-data")
    //     ) {
    //       proxyReq.setHeader("Content-Type", req.headers["content-type"]);
    //       proxyReq.setHeader("Content-Length", req.headers["content-length"]);
    //       req.pipe(proxyReq);
    //     }
    //   },
});
module.exports = proxyConfig;
//# sourceMappingURL=proxyConfig.js.map