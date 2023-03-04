import IMatch from '../../interfaces/IMatch';
import getEfficiency from './getEfficiency';
import getGoalsBalance from './getGoalsBalance';
import getGoalsFavor from './getGoalsFavor';
import getGoalsOwn from './getGoalsOwn';
import getTotalDraws from './getTotalDraws';
import getTotalGames from './getTotalGames';
import getTotalLosses from './getTotalLosses';
import getTotalPoints from './getTotalPoints';
import getTotalVictories from './getTotalVictories';
import Teams from '../../database/models/Teams';

const getLeaderboard = (teams: Teams[], matches: IMatch[]) => teams.map((e: Teams) => ({
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

export default getLeaderboard;
