import { ModelStatic } from 'sequelize';
import ITeams from '../interfaces/ITeams';
import Teams from '../database/models/Teams';
import ITeamsService from '../interfaces/ITeamsService';
import ErrorBarrel from '../errors/ErrorBarrel';

export default class TeamsService implements ITeamsService {
  protected teamsModel: ModelStatic<Teams> = Teams;

  public async listAll(): Promise<ITeams[]> {
    return this.teamsModel.findAll();
  }

  public async listById(id: number): Promise<Teams> {
    const team = await this.teamsModel.findByPk(id);
    if (!team) {
      throw new ErrorBarrel('Team not found', '404');
    }
    return team;
  }
}
