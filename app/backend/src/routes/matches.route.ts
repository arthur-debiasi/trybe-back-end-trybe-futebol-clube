import * as express from 'express';
import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import tokenValidation from '../middlewares/tokenValidation';

const matchesRoute = Router();

matchesRoute.use(express.json());

const matchesController = new MatchesController();

matchesRoute.patch('/:id', tokenValidation, (req: Request, res: Response) =>
  matchesController.updateGoals(req, res));

matchesRoute.patch(
  '/:id/finish',
  tokenValidation,
  (req: Request, res: Response) => matchesController.patchProgress(req, res),
);

matchesRoute.get('/', matchesController.getAll);

matchesRoute.post('/', tokenValidation, (req: Request, res: Response) =>
  matchesController.registerMatch(req, res));

export default matchesRoute;
