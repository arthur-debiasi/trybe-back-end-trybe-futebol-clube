import Matches from '../../database/models/Matches';
import TFilter from './types/leaderboardTypes';

const getMatchesByTeamId = (teamId: number, matches: Matches[], filter: TFilter) => matches.filter(
  ({ homeTeamId, awayTeamId }) => {
    if (filter === 'home') return homeTeamId === teamId;
    if (filter === 'away') return awayTeamId === teamId;
    return homeTeamId === teamId || awayTeamId === teamId;
  },
);

export default getMatchesByTeamId;
