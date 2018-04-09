import { Action, ActionCreator } from 'redux';
import Constants from '../../Constants';
const { INCREMENT_COUNTER, DECREMENT_COUNTER } = Constants.Counter;

export namespace Counter {
  export namespace State {
    export type Type = {
      count: number;
    };

    export function Create(): Type {
      return {
        count: 0
      };
    }
  }

  export namespace Actions {
    interface IncrementCounterAction extends Action {
      type: typeof INCREMENT_COUNTER;
      data: number;
    }
    export const IncrementCounter: ActionCreator<IncrementCounterAction> = (amount: number) => ({
      type: INCREMENT_COUNTER,
      data: amount
    });

    interface DecrementCounterAction extends Action {
      type: typeof DECREMENT_COUNTER;
      data: number;
    }
    export const DecrementCounter: ActionCreator<DecrementCounterAction> = (amount: number) => ({
      type: DECREMENT_COUNTER,
      data: amount
    });

    export type Combined =
      | IncrementCounterAction
      | DecrementCounterAction
      | never;
  }

  export namespace Reduce {
    export const create = (
      state: State.Type = State.Create(),
      action: Actions.Combined) => {
      const { count } = state;
      
      switch (action.type) {
        case INCREMENT_COUNTER:
          return { ...state, count: count + action.data };
        case DECREMENT_COUNTER:
          return { ...state, count: count - action.data };
        default:
          return state;
      }
    };
  }
}

export default Counter;
