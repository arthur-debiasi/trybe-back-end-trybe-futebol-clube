import * as express from 'express';
import MatchesController from '../controllers/matches.controller';
import tokenValidation from '../middlewares/tokenValidation';

const matchesRoute = express.Router();

matchesRoute.use(express.json());

const matchesController = new MatchesController();

matchesRoute.patch('/:id', tokenValidation, matchesController.updateMatchGoalsById);

matchesRoute.patch('/:id/finish', tokenValidation, matchesController.patchMatchProgressById);

matchesRoute.get('/', matchesController.getAll);

matchesRoute.post('/', tokenValidation, matchesController.registerMatch);

export default matchesRoute;
