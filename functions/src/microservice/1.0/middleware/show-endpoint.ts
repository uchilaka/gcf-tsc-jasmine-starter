import { NextFunction, Request, Response, RequestHandler } from "express";

const ShowEndpoint = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Endpoint:: ${req.originalUrl}`);

  // On to the next middleware
  return next();
};

export const ShowRequestMethod = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`Method:: ${req.method}`);

  // On to the next middleware
  return next();
};

// Build the enpdoint
export const WhereAmIEndpoint: RequestHandler[] = [
  ShowEndpoint,
  ShowRequestMethod,
  (req, res) => {
    return res.status(200).json({
      success: true
    });
  }
];
