import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import ILeaderboardService from '../interfaces/ILeaderboardService';

export default class TeamsController {
  private _leaderboardService: ILeaderboardService;
  constructor(leaderboardService: ILeaderboardService = new LeaderboardService()) {
    this._leaderboardService = leaderboardService;
  }

  public async getHomeLeaderboard(req: Request, res: Response) {
    const leaderboard = await this._leaderboardService.getHomeLeaderboard();
    return res.status(200).json(leaderboard);
  }
}