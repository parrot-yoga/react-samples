import * as Actions from './Actions';
import * as Types from './Types';
import * as Constants from './Constants';

export const reduce = (
  state: Types.State,
  action: Actions.Action
): Types.State => {
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
