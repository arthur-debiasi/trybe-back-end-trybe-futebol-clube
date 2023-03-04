import Matches from '../../database/models/Matches';

import getMatchesByTeamId from './getMatchesByTeamId';

export default function getTotalGames(teamId: number, matches: Matches[]) {
  return getMatchesByTeamId(teamId, matches).length;
}
