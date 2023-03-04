import IMatch from '../../interfaces/IMatch';
import getMatchesByTeamId from './getMatchesByTeamId';

export default function getGoalsFavor(teamId: number, matches: IMatch[]) {
  let goals = 0;
  const matchesByTeamId = getMatchesByTeamId(teamId, matches);
  matchesByTeamId.forEach((e) => {
    if (e.homeTeamId === teamId) {
      goals += e.homeTeamGoals;
    } else {
      goals += e.awayTeamGoals;
    }
  });

  return goals;
}
