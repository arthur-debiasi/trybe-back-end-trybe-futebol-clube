import { ModelStatic } from 'sequelize';
import ErrorBarrel from '../errors/ErrorBarrel';
import IMatchesService from '../interfaces/IMatchesService';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class MatchesService implements IMatchesService {
  protected matchesModel: ModelStatic<Matches> = Matches;
  protected teamsModel: ModelStatic<Teams> = Teams;

  private async validateTeams(homeTeamId: string, awayTeamId: string) {
    const isHomeTeam = await this.teamsModel.findByPk(homeTeamId);
    const isAwayTeam = await this.teamsModel.findByPk(awayTeamId);
    console.log(isHomeTeam);
    if (isAwayTeam === null || isHomeTeam === null) {
      throw new ErrorBarrel('There is no team with such id!', '404');
    }
  }

  public getTeams = async () => this.matchesModel.scope('byTeamName').findAll();

  public getTeamsByProgress = async (inProgress: boolean) =>
    this.matchesModel.scope('byTeamName').findAll({ where: { inProgress } });

  public patchMatchProgressById = async (id: string) =>
    this.matchesModel.update({ inProgress: false }, { where: { id } });

  public updateMatchGoalsById = async (
    id: string,
    homeTeamGoals: string,
    awayTeamGoals: string,
  ) =>
    this.matchesModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });

  public registerMatch = async (
    homeTeamId: string,
    awayTeamId: string,
    homeTeamGoals: string,
    awayTeamGoals: string,
  ) => {
    await this.validateTeams(homeTeamId, awayTeamId);

    const match = await this.matchesModel
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true });

    return match;
  };
}
