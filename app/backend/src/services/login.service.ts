import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import { emailValidate, passwordValidate } from '../utils/JoiValidate';
import ErrorBarrel from '../errors/ErrorBarrel';
import ILoginService from '../interfaces/ILoginService';
import Users from '../database/models/Users';
import JwtToken from '../utils/Jwt';
import IJwtToken from '../interfaces/IJwtToken';

export default class LoginService implements ILoginService {
  protected usersModel: ModelStatic<Users> = Users;
  private _jwtToken: IJwtToken;
  constructor(jwtToken: IJwtToken = new JwtToken()) {
    this._jwtToken = jwtToken;
  }

  public auth = async (email: string, password: string) => {
    emailValidate(email);
    passwordValidate(password);
    const user = await this.usersModel.findOne({ where: { email } });
    if (!user) {
      throw new ErrorBarrel('Invalid email or password', '401');
    }
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      throw new ErrorBarrel('Invalid email or password', '401');
    }
    return this._jwtToken.generate({
      id: user.id,
      username: user.username,
      role: user.role,
    });
  };

  public role = (token:string) => this._jwtToken.authenticate(token);
}
