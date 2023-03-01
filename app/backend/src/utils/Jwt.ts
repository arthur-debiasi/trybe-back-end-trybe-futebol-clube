import { Secret, SignOptions, sign, verify } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

export default class JwtToken {
  private jwtSecret: Secret;

  private jwtConfig: SignOptions;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || ('manteiga' as Secret);
    this.jwtConfig = {
      expiresIn: '6h',
      algorithm: 'HS256',
    };
  }

  public generate = (payload: Pick<IUser, 'id' | 'username'>) =>
    sign(payload, this.jwtSecret, this.jwtConfig);

  public authenticate = (token: string) => verify(token, this.jwtSecret);
}
