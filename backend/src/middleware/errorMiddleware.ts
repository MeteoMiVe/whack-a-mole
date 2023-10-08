import { NextFunction, Request, Response } from 'express';

// This function uses the default Express error handler, extracts the error message and put it in a JSON object
// Linter complains about the NextFunction but we need it for the handler to work eventhough the variable isn't used
// We don't want to disable the rule for elsewhere however so adding an exception here
// eslint-disable-next-line
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message
  });
};

export default errorHandler;
