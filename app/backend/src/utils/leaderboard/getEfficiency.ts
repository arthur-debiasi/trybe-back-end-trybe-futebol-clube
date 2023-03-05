import Matches from '../../database/models/Matches';
import getTotalGames from './getTotalGames';
import getTotalPoints from './getTotalPoints';
import TFilter from './types/leaderboardTypes';

export default function getEfficiency(teamId: number, matches: Matches[], filter: TFilter) {
  const totalPoints = getTotalPoints(teamId, matches, filter);
  const totalGames = getTotalGames(teamId, matches, filter);
  const efficiency = (totalPoints / (totalGames * 3)) * 100;
  return efficiency.toFixed(2);
}
