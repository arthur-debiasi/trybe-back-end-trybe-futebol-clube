import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';
import ITeamsService from '../interfaces/ITeamsService';

export default class TeamsController {
  private _teamsService: ITeamsService;
  constructor(teamService: ITeamsService = new TeamsService()) {
    this._teamsService = teamService;
  }

  public getTeams = async (_req: Request, res: Response) => {
    const teamsList = await this._teamsService.getTeams();
    res.status(200).json(teamsList);
  };

  public getTeamsById = async (req: Request, res: Response) => {
    const team = await this._teamsService.getTeamsById(Number(req.params.id));
    res.status(200).json(team);
  };
}
