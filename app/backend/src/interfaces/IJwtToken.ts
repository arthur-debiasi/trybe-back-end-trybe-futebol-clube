import { JwtPayload } from 'jsonwebtoken';
import IUser from './IUser';

export default interface IJwtToken {
  generate(payload: Pick<IUser, 'id' | 'username' | 'role'>): void;
  authenticate(token: string): JwtPayload;
}
