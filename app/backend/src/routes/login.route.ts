import * as express from 'express';
import { Router } from 'express';
import loginFields from '../middlewares/loginFields';
import LoginController from '../controllers/login.controller';

const loginRoute = Router();

loginRoute.use(express.json());

const loginController = new LoginController();

loginRoute.post(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    loginFields(req, res, next),
  (req: express.Request, res: express.Response) =>
    loginController.auth(req, res),
);

export default loginRoute;
