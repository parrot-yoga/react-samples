import { ActionCreator } from 'redux';
import * as Types from './Types';
import * as Constants from './Constants';

// Define actions
export const Increment: ActionCreator<Types.IncrementCounterAction> = (amount: number) => ({
    type: Constants.INCREMENT,
    data: amount
});

export const Decrement: ActionCreator<Types.DecrementCounterAction> = (amount: number) => ({
    type: Constants.DECREMENT,
    data: amount
});
