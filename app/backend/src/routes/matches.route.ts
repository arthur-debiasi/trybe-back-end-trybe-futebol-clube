import * as express from 'express';
import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import tokenValidation from '../middlewares/tokenValidation';

const matchesRoute = Router();

matchesRoute.use(express.json());

const matchesController = new MatchesController();

matchesRoute.patch('/:id/finish', tokenValidation, (req: Request, res: Response) =>
  matchesController.patchProgress(req, res));
matchesRoute.get('/', (req: Request, res: Response) =>
  matchesController.listAll(req, res));
export default matchesRoute;
