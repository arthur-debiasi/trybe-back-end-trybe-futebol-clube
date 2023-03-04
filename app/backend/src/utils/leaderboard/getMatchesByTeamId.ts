import Matches from '../../database/models/Matches';

const getMatchesByTeamId = (teamId: number, matches: Matches[]) => matches.filter(
  ({ homeTeamId, awayTeamId }) =>
    homeTeamId === teamId || awayTeamId === teamId,
);

export default getMatchesByTeamId;
