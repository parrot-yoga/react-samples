import * as Actions from './Actions';
import * as Constants from './Constants';
import { State } from './State';

export const reduce = (
  state: State,
  action: Actions.Action
): State => {
  const { count } = state;

  switch (action.type) {
    case Constants.INCREMENT:
      return { ...state, count: count + action.data };
    case Constants.DECREMENT:
      return { ...state, count: count - action.data };
    default:
      return state;
  }
};
