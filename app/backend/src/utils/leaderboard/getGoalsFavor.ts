import Matches from '../../database/models/Matches';
import getMatchesByTeamId from './getMatchesByTeamId';
import TFilter from './types/leaderboardTypes';

export default function getGoalsFavor(teamId: number, matches: Matches[], filter: TFilter) {
  const matchesByTeamId = getMatchesByTeamId(teamId, matches, filter);

  let homeGoals = 0;
  let awayGoals = 0;

  matchesByTeamId.forEach((e) => {
    if (e.homeTeamId === teamId) homeGoals += e.homeTeamGoals;
    if (e.awayTeamId === teamId) awayGoals += e.awayTeamGoals;
  });

  if (filter === 'home') return homeGoals;
  if (filter === 'away') return awayGoals;

  return homeGoals + awayGoals;
}
