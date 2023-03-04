import Matches from '../../database/models/Matches';
import getMatchesByTeamId from './getMatchesByTeamId';

export default function getTotalDraws(teamId: number, matches: Matches[]) {
  let draws = 0;
  const matchesByTeamId = getMatchesByTeamId(teamId, matches);
  matchesByTeamId.forEach((e:Matches) => {
    if (e.homeTeamGoals === e.awayTeamGoals) {
      draws += 1;
    }
  });

  return draws;
}
