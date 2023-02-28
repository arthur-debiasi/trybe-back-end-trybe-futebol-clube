import ITeams from './ITeams';

interface ITeamsService {
  listAll(): Promise<ITeams[]>;
}

export default ITeamsService;
