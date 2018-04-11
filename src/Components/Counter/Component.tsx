import * as React from 'react';
import * as App from '../../App';
import './style.css';

import * as Types from './Types';
import * as Constants from './Constants';
import * as Actions from './Actions';
import * as HomepageConstants from '../Homepage/Constants';

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    const Dispatcher: (action: Types.Action) => () => void = (
      (action) => store.Dispatcher({
        type: Constants.COUNTER,
        data: action,
      })
    );

    const dispatchHomepage = store.PageDispatcher({
      name: HomepageConstants.HOMEPAGE_ROUTE,
    });

    return (
      <div className="counter">
        <h1>{store.getState().counter.count}</h1>
        <button onClick={Dispatcher(Actions.Decrement(1))}>-</button>
        <button onClick={Dispatcher(Actions.Increment(1))}>+</button>
        <br/><br/>
        <button onClick={dispatchHomepage}>Home</button>
      </div>
    );
  }
);
