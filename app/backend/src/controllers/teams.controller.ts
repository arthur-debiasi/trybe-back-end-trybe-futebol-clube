import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';
import ITeamsService from '../interfaces/ITeamsService';

export default class TeamsController {
  private _teamsService: ITeamsService;
  constructor(teamService: ITeamsService = new TeamsService()) {
    this._teamsService = teamService;
  }

  public async listAll(_req: Request, res: Response) {
    const teamsList = await this._teamsService.listAll();
    res.status(200).json(teamsList);
  }

  public async listById(req: Request, res: Response) {
    const teamsList = await this._teamsService.listById(Number(req.params.id));
    res.status(200).json(teamsList);
  }
}
