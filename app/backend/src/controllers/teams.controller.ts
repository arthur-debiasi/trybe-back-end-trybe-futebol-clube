import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

export default class TeamsController {
  private _teamsService: TeamsService;
  constructor(teamService: TeamsService = new TeamsService()) {
    this._teamsService = teamService;
  }

  public async listAll(_req : Request, res: Response) {
    const teamsList = await this._teamsService.listAll();
    res.status(200).json(teamsList);
  }
}
