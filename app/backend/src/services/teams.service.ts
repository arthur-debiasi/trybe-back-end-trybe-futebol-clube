import { ModelStatic } from 'sequelize';
import ITeams from '../interfaces/ITeams';
import Teams from '../database/models/Teams';
import ITeamsService from '../interfaces/ITeamsService';

export default class TeamsService implements ITeamsService {
  protected teamsModel: ModelStatic<Teams> = Teams;
  public async listAll(): Promise<ITeams[]> {
    return this.teamsModel.findAll();
  }
}
