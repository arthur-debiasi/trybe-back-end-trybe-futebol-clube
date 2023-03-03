import * as express from 'express';
import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRoute = Router();

matchesRoute.use(express.json());

const matchesController = new MatchesController();

matchesRoute.get('/', (req: Request, res: Response) =>
  matchesController.listAll(req, res));

export default matchesRoute;
