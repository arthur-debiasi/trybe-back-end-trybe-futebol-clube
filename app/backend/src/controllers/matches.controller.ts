import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  private _matchesService: MatchesService;
  constructor(matchesService: MatchesService = new MatchesService()) {
    this._matchesService = matchesService;
  }

  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const matchesList = inProgress
      ? await this._matchesService.getTeamsByProgress(inProgress === 'true')
      : await this._matchesService.getTeams();
    res.status(200).json(matchesList);
  };

  public async patchProgress(req: Request, res: Response) {
    const { id } = req.params;
    await this._matchesService.patchProgress(id);
    return res.status(200).json({ message: 'Finished' });
  }

  public async updateGoals(req: Request, res: Response) {
    const {
      body: { homeTeamGoals, awayTeamGoals },
      params: { id },
    } = req;
    await this._matchesService.updateGoals(id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json('çalalalala ahjahahah');
  }

  public async registerMatch(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    if ((homeTeamId === awayTeamId)) {
      return res
        .status(422)
        .json({
          message: 'It is not possible to create a match with two equal teams',
        });
    }
    const match = await this._matchesService.registerMatch(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );
    return res.status(201).json(match);
  }
}
