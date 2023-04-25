import { Request, Response } from "express";
import { Errors } from "../types";

function errorHandler(err: Errors, _req: Request, res: Response) {
  const {
    status = 500,
    message = "Proxy server errorPlease contact admin at support@nailsa2z.com!",
  } = err;
  res.status(status).json({ error: message });
}

module.exports = errorHandler;
