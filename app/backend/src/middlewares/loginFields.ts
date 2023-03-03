import { NextFunction, Request, Response } from 'express';
import ErrorBarrel from '../errors/ErrorBarrel';

const loginFields = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ErrorBarrel('All fields must be filled', '400');
  }
  return next();
};

export default loginFields;
