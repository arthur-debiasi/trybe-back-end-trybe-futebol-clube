import { JwtPayload, Secret, SignOptions, sign, verify } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import ErrorBarrel from '../errors/ErrorBarrel';

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

  public generate = (payload: Pick<IUser, 'id' | 'username' | 'role'>) =>
    sign(payload, this.jwtSecret, this.jwtConfig);

  public authenticate = (token: string) => {
    try {
      return verify(token, this.jwtSecret) as JwtPayload;
    } catch (error) {
      throw new ErrorBarrel('Token must be a valid token', '401');
    }
  };
}
