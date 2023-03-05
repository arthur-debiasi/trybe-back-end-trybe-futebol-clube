import Matches from '../../database/models/Matches';
import getMatchesByTeamId from './getMatchesByTeamId';
import TFilter from './types/leaderboardTypes';

export default function getTotalVictories(teamId: number, matches: Matches[], filter: TFilter) {
  const matchesByTeamId = getMatchesByTeamId(teamId, matches, filter);

  let homeVictories = 0;
  let awayVictories = 0;

  matchesByTeamId.forEach((e:Matches) => {
    if (e.homeTeamId === teamId && e.homeTeamGoals > e.awayTeamGoals) {
      homeVictories += 1;
    }
    if (e.awayTeamId === teamId && e.awayTeamGoals > e.homeTeamGoals) {
      awayVictories += 1;
    }
  });

  if (filter === 'home') return homeVictories;
  if (filter === 'away') return awayVictories;

  return homeVictories + awayVictories;
}
