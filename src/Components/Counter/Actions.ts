import * as Types from './Types';
import * as Constants from './Constants';

// Define actions
export const Increment = (amount: number): Types.IncrementCounterAction => ({
  type: Constants.INCREMENT,
  data: amount
});

export const Decrement = (amount: number): Types.DecrementCounterAction => ({
  type: Constants.DECREMENT,
  data: amount
});
