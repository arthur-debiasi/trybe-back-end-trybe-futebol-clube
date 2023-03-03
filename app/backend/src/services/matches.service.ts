import { ModelStatic } from 'sequelize';
import IMatchesService from '../interfaces/IMatchesService';
import Matches from '../database/models/Matches';

export default class MatchesService implements IMatchesService {
  protected matchesModel: ModelStatic<Matches> = Matches;

  public async listAll(): Promise<Matches[]> {
    return this.matchesModel.scope('byTeamName').findAll();
  }

  public async listAllByProgress(inProgress: boolean) {
    return this.matchesModel.scope('byTeamName').findAll({ where: { inProgress } });
  }

  public async patchProgress(id: string) {
    this.matchesModel.update({ inProgress: false }, { where: { id } });
  }
}
