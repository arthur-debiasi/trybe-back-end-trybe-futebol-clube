import IMatch from '../../interfaces/IMatch';
import getTotalDraws from './getTotalDraws';
import getTotalVictories from './getTotalVictories';

export default function getTotalPoints(teamId: number, matches: IMatch[]) {
  return getTotalVictories(teamId, matches) * 3 + getTotalDraws(teamId, matches);
}
