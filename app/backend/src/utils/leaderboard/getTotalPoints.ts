import Matches from '../../database/models/Matches';
import getTotalDraws from './getTotalDraws';
import getTotalVictories from './getTotalVictories';
import TFilter from './types/leaderboardTypes';

export default function getTotalPoints(teamId: number, matches: Matches[], filter: TFilter) {
  return getTotalVictories(teamId, matches, filter) * 3 + getTotalDraws(teamId, matches, filter);
}
