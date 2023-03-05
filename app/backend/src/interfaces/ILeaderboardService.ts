// import Matches from '../database/models/Matches';

import TFilter from '../utils/leaderboard/types/leaderboardTypes';

interface ILeaderboardService {
  getLeaderboard(filter: TFilter): void;
}

export default ILeaderboardService;
