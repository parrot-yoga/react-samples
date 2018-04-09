import * as React from 'react';
import Constants from '../../Constants';
import Counter from './store';

import * as App from '../../App';

import './style.css';

const { HOMEPAGE_ROUTE } = Constants.Router;
const { COUNTER } = Constants.Global;
const { IncrementCounter, DecrementCounter } = Counter.Actions;

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    const Dispatcher: (action: Counter.Actions.Combined) => () => void = (
      (action) => store.Dispatcher({
        type: COUNTER as typeof COUNTER,
        data: action,
      })
    );

    return (
      <div className="counter">
        <h1>{store.getState().counter.count}</h1>
        <button onClick={Dispatcher(DecrementCounter(1))}>-</button>
        <button onClick={Dispatcher(IncrementCounter(1))}>+</button>
        <br/><br/>
        <button onClick={store.PageDispatcher({ name: HOMEPAGE_ROUTE })}>
          Home
        </button>
      </div>
    );
  }
);