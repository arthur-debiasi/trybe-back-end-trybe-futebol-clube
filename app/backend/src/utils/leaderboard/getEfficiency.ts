import IMatch from '../../interfaces/IMatch';
import getTotalGames from './getTotalGames';
import getTotalPoints from './getTotalPoints';

export default function getEfficiency(teamId: number, matches: IMatch[]) {
  const totalPoints = getTotalPoints(teamId, matches);
  const totalGames = getTotalGames(teamId, matches);
  const efficiency = (totalPoints / (totalGames * 3)) * 100;
  return efficiency.toFixed(2);
}
