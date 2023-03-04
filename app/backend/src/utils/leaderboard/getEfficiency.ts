import Matches from '../../database/models/Matches';
import getTotalGames from './getTotalGames';
import getTotalPoints from './getTotalPoints';

export default function getEfficiency(teamId: number, matches: Matches[]) {
  const totalPoints = getTotalPoints(teamId, matches);
  const totalGames = getTotalGames(teamId, matches);
  const efficiency = (totalPoints / (totalGames * 3)) * 100;
  return efficiency.toFixed(2);
}
