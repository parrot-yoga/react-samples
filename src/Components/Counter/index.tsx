import * as React from 'react';

import * as App from '../../App';

import './style.css';

export type State = number;
export function State() { return 0; }

export type Action = 'increment' | 'decrement';

export const reduce = (state: State, action: Action): State => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
  }
};

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    const Dispatcher: (action: Action) => () => void = (
      (action) => store.Dispatcher({
        type: 'Counter' as 'Counter',
        data: action,
      })
    );

    return (
      <div className="counter">
        <h1>{store.getState().counter}</h1>
        <button onClick={Dispatcher('decrement')}>-</button>
        <button onClick={Dispatcher('increment')}>+</button>
        <br/><br/>
        <button onClick={store.PageDispatcher({ name: 'Homepage' })}>
          Home
        </button>
      </div>
    );
  }
);
