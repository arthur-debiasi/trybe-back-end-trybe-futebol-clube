/* eslint-disable max-lines-per-function */
import { ModelStatic } from 'sequelize';
import getTotalPoints from '../utils/leaderboard/getTotalPoints';
import getTotalLosses from '../utils/leaderboard/getTotalLosses';
import getTotalDraws from '../utils/leaderboard/getTotalDraws';
import getTotalGames from '../utils/leaderboard/getTotalGames';
import getGoalsFavor from '../utils/leaderboard/getGoalsFavor';
import ILeaderboardService from '../interfaces/ILeaderboardService';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import getGoalsOwn from '../utils/leaderboard/getGoalsOwn';
import getGoalsBalance from '../utils/leaderboard/getGoalsBalance';
import getTotalVictories from '../utils/leaderboard/getTotalVictories';
import getEfficiency from '../utils/leaderboard/getEfficiency';
import getClassifiedLeaderboard from '../utils/leaderboard/getClassifiedLeaderboard';
// import ILeaderboard from '../interfaces/ILeaderboard';

export default class LeaderboardService implements ILeaderboardService {
  protected _matchesModel: ModelStatic<Matches> = Matches;
  protected _teamsModel: ModelStatic<Teams> = Teams;

  public async listAll() {
    const teams = JSON.parse(JSON.stringify(await this._teamsModel.findAll()));
    const matches = JSON.parse(
      JSON.stringify(
        await this._matchesModel.scope('byTeamName').scope('finished').findAll(),
      ),
    );
    const leaderboard = teams.map((e: Teams) => ({
      name: e.teamName.toString(),
      totalPoints: getTotalPoints(e.id, matches),
      totalGames: getTotalGames(e.id, matches),
      totalVictories: getTotalVictories(e.id, matches),
      totalDraws: getTotalDraws(e.id, matches),
      totalLosses: getTotalLosses(e.id, matches),
      goalsFavor: getGoalsFavor(e.id, matches),
      goalsOwn: getGoalsOwn(e.id, matches),
      goalsBalance: getGoalsBalance(e.id, matches),
      efficiency: getEfficiency(e.id, matches),
    }));
    return getClassifiedLeaderboard(leaderboard);
  }
}
