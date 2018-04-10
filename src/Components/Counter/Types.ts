import { Action } from 'redux';
import * as Constant from './Constants';

// Declare constants
const { INCREMENT_COUNTER, DECREMENT_COUNTER } = Constant;

// State type
export type State = {
    count: number;
};

// Initial state
export function createInitialState(): State {
    return {
      count: 0
    };
}

// Action types
export interface IncrementCounterAction extends Action {
    type: typeof INCREMENT_COUNTER;
    data: number;
}

export interface DecrementCounterAction extends Action {
    type: typeof DECREMENT_COUNTER;
    data: number;
}

// Combined action type
export type Action =
    | IncrementCounterAction
    | DecrementCounterAction
    ;