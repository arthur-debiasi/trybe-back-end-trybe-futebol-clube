import { NextFunction, Request, Response } from 'express';
import JwtToken from '../utils/Jwt';
import ErrorBarrel from '../errors/ErrorBarrel';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw new ErrorBarrel('Token not found', '401');
  new JwtToken().authenticate(token);
  next();
};
