import IMatch from '../../interfaces/IMatch';
import getMatchesByTeamId from './getMatchesByTeamId';

export default function getTotalVictories(teamId: number, matches: IMatch[]) {
  let victories = 0;
  const matchesByTeamId = getMatchesByTeamId(teamId, matches);
  matchesByTeamId.forEach((e:IMatch) => {
    if (e.homeTeamId === teamId && e.homeTeamGoals > e.awayTeamGoals) {
      victories += 1;
    }
    if (e.awayTeamId === teamId && e.awayTeamGoals > e.homeTeamGoals) {
      victories += 1;
    }
  });

  return victories;
}
