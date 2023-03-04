import Matches from '../../database/models/Matches';
import getTotalDraws from './getTotalDraws';
import getTotalVictories from './getTotalVictories';

export default function getTotalPoints(teamId: number, matches: Matches[]) {
  return getTotalVictories(teamId, matches) * 3 + getTotalDraws(teamId, matches);
}
