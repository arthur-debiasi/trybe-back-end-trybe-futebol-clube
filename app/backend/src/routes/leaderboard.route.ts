import * as express from 'express';
import { Request, Response, Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRoute = Router();

leaderboardRoute.use(express.json());

const leaderboardController = new LeaderboardController();

leaderboardRoute.get('/home', (req: Request, res: Response) =>
  leaderboardController.getHomeLeaderboard(req, res));
// leaderboardRoute.get('/', (req: Request, res: Response) =>
//   leaderboardController.listAll(req, res));

export default leaderboardRoute;
