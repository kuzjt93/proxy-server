"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const adminPanelProxyConfig = require("./admin-panel/proxyConfig");
const limiter = require("./utils/rateLimiter");
const speedLimiter = require("./utils/slowRate");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const app = (0, express_1.default)();
const version = process.env.API_VERSION || "v1";
const prefix = `/api/${version}`;
app.set("trust proxy", 1);
app.use(cors());
app.use(morgan("dev"));
app.use(helmet()); // Auto define headers
app.use(express_1.default.urlencoded({ extended: false })); // use this middleware to handle x-www-form-urlencoded data
app.use(limiter);
// app.use(speedLimiter);
app.use(prefix, adminPanelProxyConfig);
app.use(notFound);
app.use(errorHandler);
module.exports = app;
//# sourceMappingURL=app.js.map