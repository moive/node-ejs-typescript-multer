import type { NextFunction, Request, Response } from 'express';
import { format } from 'timeago.js';

const TimeFormat = (req: Request, res: Response, next: NextFunction): void => {
  res.app.locals['format'] = format;
  next();
};

export default TimeFormat;
