import Matches from '../../database/models/Matches';
import getMatchesByTeamId from './getMatchesByTeamId';

export default function getGoalsFavor(teamId: number, matches: Matches[]) {
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
