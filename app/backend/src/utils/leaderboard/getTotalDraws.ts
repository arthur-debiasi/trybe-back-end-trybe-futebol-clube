import Matches from '../../database/models/Matches';
import getMatchesByTeamId from './getMatchesByTeamId';
import TFilter from './types/leaderboardTypes';

export default function getTotalDraws(teamId: number, matches: Matches[], filter: TFilter) {
  const matchesByTeamId = getMatchesByTeamId(teamId, matches, filter);

  let homeDraws = 0;
  let awayDraws = 0;

  matchesByTeamId.forEach((e:Matches) => {
    if (e.homeTeamId === teamId && e.homeTeamGoals === e.awayTeamGoals) homeDraws += 1;
    if (e.awayTeamId === teamId && e.homeTeamGoals === e.awayTeamGoals) awayDraws += 1;
  });

  if (filter === 'home') return homeDraws;
  if (filter === 'away') return awayDraws;

  return homeDraws + awayDraws;
}
