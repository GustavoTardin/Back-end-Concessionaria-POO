import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error instanceof Error && error.stack) {
      res.status(+error.stack).json({ message: error.message });
      next();
    }
    res.status(500).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;