import { ActionCreator } from 'redux';
import * as Type from './Types';
import * as Constant from './Constants';

// Define actions
export const Increment: ActionCreator<Type.IncrementCounterAction> = (amount: number) => ({
    type: Constant.INCREMENT,
    data: amount
});

export const Decrement: ActionCreator<Type.DecrementCounterAction> = (amount: number) => ({
    type: Constant.DECREMENT,
    data: amount
});
