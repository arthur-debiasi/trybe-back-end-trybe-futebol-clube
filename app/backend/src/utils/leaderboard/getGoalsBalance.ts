import IMatch from '../../interfaces/IMatch';
import getGoalsFavor from './getGoalsFavor';
import getGoalsOwn from './getGoalsOwn';

export default function getGoalsBalance(teamId: number, matches: IMatch[]) {
  return getGoalsFavor(teamId, matches) - getGoalsOwn(teamId, matches);
}
