import * as React from 'react';
import Constants from '../../Constants';

import * as App from '../../App';

import './style.css';

const { INCREMENT_COUNTER, DECREMENT_COUNTER } = Constants.Counter;
const { HOMEPAGE_ROUTE } = Constants.Router;
const { COUNTER } = Constants.Global;

export type State = number;
export function State() { return 0; }

export type Action =
typeof INCREMENT_COUNTER |
typeof DECREMENT_COUNTER |
never;

export const reduce = (state: State, action: Action): State => {
  switch (action) {
    case INCREMENT_COUNTER: return state + 1;
    case DECREMENT_COUNTER: return state - 1;
    default: return state;
  }
};

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    const Dispatcher: (action: Action) => () => void = (
      (action) => store.Dispatcher({
        type: COUNTER as typeof COUNTER,
        data: action,
      })
    );

    return (
      <div className="counter">
        <h1>{store.getState().counter}</h1>
        <button onClick={Dispatcher(DECREMENT_COUNTER)}>-</button>
        <button onClick={Dispatcher(INCREMENT_COUNTER)}>+</button>
        <br/><br/>
        <button onClick={store.PageDispatcher({ name: HOMEPAGE_ROUTE })}>
          Home
        </button>
      </div>
    );
  }
);