import Teams from '../database/models/Teams';
import ITeams from './ITeams';

interface ITeamsService {
  getTeams(): Promise<ITeams[]>;
  getTeamsById(id: number): Promise<Teams | null>;
}

export default ITeamsService;
