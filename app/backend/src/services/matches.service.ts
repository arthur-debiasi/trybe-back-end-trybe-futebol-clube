import { ModelStatic } from 'sequelize';
import Teams from '../database/models/Teams';
import IMatchesService from '../interfaces/IMatchesService';
import Matches from '../database/models/Matches';

export default class MatchesService implements IMatchesService {
  protected matchesModel: ModelStatic<Matches> = Matches;

  public async listAll() {
    return this.matchesModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }
}
