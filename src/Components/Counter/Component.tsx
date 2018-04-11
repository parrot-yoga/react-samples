import * as React from 'react';
import * as App from '../../App';
import './style.css';

import * as Type from './Types';
import * as Constant from './Constants';
import * as Actions from './Actions';
import * as HomepageConstant from '../Homepage';

const { IncrementCounter, DecrementCounter } = Actions;

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    const Dispatcher: (action: Type.Action) => () => void = (
      (action) => store.Dispatcher({
        type: Constant.COUNTER,
        data: action,
      })
    );

    return (
      <div className="counter">
        <h1>{store.getState().counter.count}</h1>
        <button onClick={Dispatcher(DecrementCounter(1))}>-</button>
        <button onClick={Dispatcher(IncrementCounter(1))}>+</button>
        <br/><br/>
        <button onClick={store.PageDispatcher({ name: HomepageConstant.HOMEPAGE_ROUTE })}>
          Home
        </button>
      </div>
    );
  }
);