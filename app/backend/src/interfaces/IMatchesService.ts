interface IMatchesService {
  getTeams(): void;
  updateGoals(id: string, homeTeamGoals: string, awayTeamGoals: string): void;
  getTeamsByProgress(inProgress: boolean): void;
  patchProgress(id: string): void;
  registerMatch(
    homeTeamId: string,
    awayTeamId: string,
    homeTeamGoals: string,
    awayTeamGoals: string
  ): void;
}

export default IMatchesService;
