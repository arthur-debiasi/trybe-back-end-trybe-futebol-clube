import * as express from 'express';
import { Router } from 'express';
import tokenValidation from '../middlewares/tokenValidation';
import loginFields from '../middlewares/loginFields';
import LoginController from '../controllers/login.controller';

const loginRoute = Router();

loginRoute.use(express.json());

const loginController = new LoginController();

loginRoute.get('/role', tokenValidation, loginController.role);

loginRoute.post('/', loginFields, loginController.auth);

export default loginRoute;
