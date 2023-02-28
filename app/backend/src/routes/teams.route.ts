import * as express from 'express';
import { Request, Response, Router } from 'express';

const teamsRoute = Router();

teamsRoute.use(express.json());

teamsRoute.get('/', (req: Request, res: Response) => {
  res.status(200).end();
});

export default teamsRoute;
