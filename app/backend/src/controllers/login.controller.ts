import { Request, Response } from 'express';
import ErrorBarrel from '../errors/ErrorBarrel';
import LoginService from '../services/login.service';

export default class LoginController {
  private _loginService: LoginService;
  constructor(loginService: LoginService = new LoginService()) {
    this._loginService = loginService;
  }

  public async auth(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this._loginService.auth(email, password);
    res.status(200).json({ token });
  }

  public async role(req: Request, res: Response) {
    const token = req.headers.authorization;
    if (!token) throw new ErrorBarrel('401', 'Token not found');
    // return res.status(401).json({ message: 'Token not found' });
    const role = await this._loginService.role(token);
    res.status(200).json({ role });
  }
}
