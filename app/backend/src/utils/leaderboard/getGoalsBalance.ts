import Matches from '../../database/models/Matches';
import getGoalsFavor from './getGoalsFavor';
import getGoalsOwn from './getGoalsOwn';

export default function getGoalsBalance(teamId: number, matches: Matches[]) {
  return getGoalsFavor(teamId, matches) - getGoalsOwn(teamId, matches);
}
