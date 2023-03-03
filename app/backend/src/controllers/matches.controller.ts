import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  private _matchesService: MatchesService;
  constructor(matchesService: MatchesService = new MatchesService()) {
    this._matchesService = matchesService;
  }

  public async listAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    const matchesList = inProgress
      ? await this._matchesService.listAllByProgress(inProgress === 'true')
      : await this._matchesService.listAll();
    res.status(200).json(matchesList);
  }

  public async patchProgress(req: Request, res: Response) {
    const { id } = req.params;
    await this._matchesService.patchProgress(id);
    return res.status(200).json({ message: 'Finished' });
  }
}
