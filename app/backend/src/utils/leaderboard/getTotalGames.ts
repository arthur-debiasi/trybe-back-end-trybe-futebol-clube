import IMatch from '../../interfaces/IMatch';
import getMatchesByTeamId from './getMatchesByTeamId';

export default function getTotalGames(teamId: number, matches: IMatch[]) {
  return getMatchesByTeamId(teamId, matches).length;
}
