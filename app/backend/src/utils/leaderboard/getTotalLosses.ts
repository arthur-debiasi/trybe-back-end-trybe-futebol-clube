import Matches from '../../database/models/Matches';
import getMatchesByTeamId from './getMatchesByTeamId';
import TFilter from './types/leaderboardTypes';

export default function getTotalLosses(teamId: number, matches: Matches[], filter: TFilter) {
  let homeLosses = 0;
  let awayLosses = 0;

  const matchesByTeamId = getMatchesByTeamId(teamId, matches, filter);
  matchesByTeamId.forEach((e:Matches) => {
    if (e.homeTeamId === teamId && e.homeTeamGoals < e.awayTeamGoals) {
      homeLosses += 1;
    }
    if (e.awayTeamId === teamId && e.awayTeamGoals < e.homeTeamGoals) {
      awayLosses += 1;
    }
  });

  if (filter === 'home') return homeLosses;
  if (filter === 'away') return awayLosses;

  return homeLosses + awayLosses;
}
