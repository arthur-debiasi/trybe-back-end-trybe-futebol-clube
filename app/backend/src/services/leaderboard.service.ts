import { ModelStatic } from 'sequelize';
import getLeaderboard from '../utils/leaderboard/getLeaderboard';
import ILeaderboardService from '../interfaces/ILeaderboardService';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import getClassifiedLeaderboard from '../utils/leaderboard/getClassifiedLeaderboard';

export default class LeaderboardService implements ILeaderboardService {
  protected _matchesModel: ModelStatic<Matches> = Matches;
  protected _teamsModel: ModelStatic<Teams> = Teams;

  public async listAll() {
    const teams = await this._teamsModel.findAll();
    const matches = await this._matchesModel.scope('byTeamName').scope('finished').findAll();
    console.log(JSON.parse(JSON.stringify(matches)));
    const leaderboard = getLeaderboard(teams, matches);
    return getClassifiedLeaderboard(leaderboard);
  }
}
