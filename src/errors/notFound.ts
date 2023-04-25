import { Request, Response, NextFunction } from "express";

function notFound(req: Request, _res: Response, next: NextFunction) {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
}

module.exports = notFound;
