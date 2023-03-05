import Matches from '../../database/models/Matches';
import getGoalsFavor from './getGoalsFavor';
import getGoalsOwn from './getGoalsOwn';
import TFilter from './types/leaderboardTypes';

export default function getGoalsBalance(teamId: number, matches: Matches[], filter: TFilter) {
  return getGoalsFavor(teamId, matches, filter) - getGoalsOwn(teamId, matches, filter);
}
