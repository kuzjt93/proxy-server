import express, { Express } from "express";

const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const adminPanelProxyConfig = require("./admin-panel/proxyConfig");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app: Express = express();

const version = process.env.API_VERSION || "v1";
const prefix = `/api/${version}`;

app.set("trust proxy", 1);
app.use(cors());
app.use(morgan("dev"));
app.use(helmet()); // Auto define headers
app.use(express.urlencoded({ extended: false })); // use this middleware to handle x-www-form-urlencoded data

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(prefix, limiter, adminPanelProxyConfig);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
