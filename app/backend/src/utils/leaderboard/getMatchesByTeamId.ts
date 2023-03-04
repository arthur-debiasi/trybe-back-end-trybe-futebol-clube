import IMatch from '../../interfaces/IMatch';

const getMatchesByTeamId = (teamId: number, matches: IMatch[]) => matches.filter(
  ({ homeTeamId, awayTeamId }) =>
    homeTeamId === teamId || awayTeamId === teamId,
);

export default getMatchesByTeamId;
