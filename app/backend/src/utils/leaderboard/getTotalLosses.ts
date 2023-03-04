import IMatch from '../../interfaces/IMatch';
import getMatchesByTeamId from './getMatchesByTeamId';

export default function getTotalLosses(teamId: number, matches: IMatch[]) {
  let losses = 0;
  const matchesByTeamId = getMatchesByTeamId(teamId, matches);
  matchesByTeamId.forEach((e:IMatch) => {
    if (e.homeTeamId === teamId && e.homeTeamGoals < e.awayTeamGoals) {
      losses += 1;
    }
    if (e.awayTeamId === teamId && e.awayTeamGoals < e.homeTeamGoals) {
      losses += 1;
    }
  });

  return losses;
}
