import type { Request } from 'express';

export interface ReqError extends Request {
  errors?: any;
}
