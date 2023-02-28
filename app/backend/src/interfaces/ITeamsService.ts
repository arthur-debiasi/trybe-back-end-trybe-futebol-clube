import Teams from '../database/models/Teams';
import ITeams from './ITeams';

interface ITeamsService {
  listAll(): Promise<ITeams[]>;
  listById(id: number): Promise<Teams | null>;
}

export default ITeamsService;
