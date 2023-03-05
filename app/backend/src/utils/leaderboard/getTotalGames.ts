import Matches from '../../database/models/Matches';

import getMatchesByTeamId from './getMatchesByTeamId';
import TFilter from './types/leaderboardTypes';

export default function getTotalGames(teamId: number, matches: Matches[], filter: TFilter) {
  return getMatchesByTeamId(teamId, matches, filter).length;
}
