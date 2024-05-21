import { Request, Response, NextFunction } from 'express';

export const requestWrapper = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.set('Content-Type', 'application/json');

  console.log(`Received ${req.method} request for ${req.url}`);


  next();
};