import { Request, Response } from 'express';
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
}
