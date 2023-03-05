interface IMatchesService {
  getTeams(): void;
  updateMatchGoalsById(id: string, homeTeamGoals: string, awayTeamGoals: string): void;
  getTeamsByProgress(inProgress: boolean): void;
  patchMatchProgressById(id: string): void;
  registerMatch(
    homeTeamId: string,
    awayTeamId: string,
    homeTeamGoals: string,
    awayTeamGoals: string
  ): void;
}

export default IMatchesService;
