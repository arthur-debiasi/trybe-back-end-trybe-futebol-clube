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
import Matches from '../../database/models/Matches';

type TFilter = 'home' | 'away' | undefined;

const getLeaderboard = (
  teams: Teams[],
  matches: Matches[],
  filter: TFilter,
) =>
  teams.map((e: Teams) => ({
    name: e.teamName.toString(),
    totalPoints: getTotalPoints(e.id, matches, filter),
    totalGames: getTotalGames(e.id, matches, filter),
    totalVictories: getTotalVictories(e.id, matches, filter),
    totalDraws: getTotalDraws(e.id, matches, filter),
    totalLosses: getTotalLosses(e.id, matches, filter),
    goalsFavor: getGoalsFavor(e.id, matches, filter),
    goalsOwn: getGoalsOwn(e.id, matches, filter),
    goalsBalance: getGoalsBalance(e.id, matches, filter),
    efficiency: getEfficiency(e.id, matches, filter),
  }));

export default getLeaderboard;
