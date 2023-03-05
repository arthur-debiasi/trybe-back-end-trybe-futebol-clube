import { Request, Response } from 'express';
import ErrorBarrel from '../errors/ErrorBarrel';
import LoginService from '../services/login.service';

export default class LoginController {
  private _loginService: LoginService;
  constructor(loginService: LoginService = new LoginService()) {
    this._loginService = loginService;
  }

  public auth = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await this._loginService.auth(email, password);
    res.status(200).json({ token });
  };

  public role = (req: Request, res: Response) => {
    const token = req.headers.authorization;
    if (!token) throw new ErrorBarrel('401', 'Token not found');
    const { role } = this._loginService.role(token);
    res.status(200).json({ role });
  };
}
