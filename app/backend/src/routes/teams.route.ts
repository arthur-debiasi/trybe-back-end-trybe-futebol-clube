import * as express from 'express';
import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';
import TeamsService from '../services/teams.service';

const teamsRoute = Router();

teamsRoute.use(express.json());

const teamService = new TeamsService();
const teamsController = new TeamsController(teamService);

teamsRoute.get('/', (req: express.Request, res: express.Response) =>
  teamsController.listAll(req, res));

export default teamsRoute;
