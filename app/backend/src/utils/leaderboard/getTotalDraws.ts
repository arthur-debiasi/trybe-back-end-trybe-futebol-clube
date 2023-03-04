import IMatch from '../../interfaces/IMatch';
import getMatchesByTeamId from './getMatchesByTeamId';

export default function getTotalDraws(teamId: number, matches: IMatch[]) {
  let draws = 0;
  const matchesByTeamId = getMatchesByTeamId(teamId, matches);
  matchesByTeamId.forEach((e:IMatch) => {
    if (e.homeTeamGoals === e.awayTeamGoals) {
      draws += 1;
    }
  });

  return draws;
}
