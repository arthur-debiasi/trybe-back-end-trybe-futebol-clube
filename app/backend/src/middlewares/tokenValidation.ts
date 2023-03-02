import { NextFunction, Request, Response } from 'express';
import JwtToken from '../utils/Jwt';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  new JwtToken().authenticate(token);
  next();
};
