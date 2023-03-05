import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import ILeaderboardService from '../interfaces/ILeaderboardService';

export default class TeamsController {
  private _leaderboardService: ILeaderboardService;
  constructor(leaderboardService: ILeaderboardService = new LeaderboardService()) {
    this._leaderboardService = leaderboardService;
  }

  public async getHomeLeaderboard(req: Request, res: Response) {
    const leaderboard = await this._leaderboardService.getLeaderboard('home');
    return res.status(200).json(leaderboard);
  }

  public getAwayLeaderboard = async (req: Request, res: Response) => {
    const leaderboard = await this._leaderboardService.getLeaderboard('away');
    return res.status(200).json(leaderboard);
  };

  public getFullLeaderboard = async (req: Request, res: Response) => {
    const leaderboard = await this._leaderboardService.getLeaderboard(undefined);
    return res.status(200).json(leaderboard);
  };
}
