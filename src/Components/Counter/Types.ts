import { Action } from 'redux';
import * as Constants from './Constants';

// Declare constants
const { INCREMENT, DECREMENT } = Constants;

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
    type: typeof INCREMENT;
    data: number;
}

export interface DecrementCounterAction extends Action {
    type: typeof DECREMENT;
    data: number;
}

// Combined action type
export type Action =
    | IncrementCounterAction
    | DecrementCounterAction
    ;
