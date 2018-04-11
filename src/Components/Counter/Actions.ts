import { ActionCreator } from 'redux';
import * as Type from './Types';
import * as Constant from './Constants';

// Define actions
export const IncrementCounter: ActionCreator<Type.IncrementCounterAction> = (amount: number) => ({
    type: Constant.INCREMENT_COUNTER,
    data: amount
});

export const DecrementCounter: ActionCreator<Type.DecrementCounterAction> = (amount: number) => ({
    type: Constant.DECREMENT_COUNTER,
    data: amount
});