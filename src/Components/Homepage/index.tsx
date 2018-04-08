import * as React from 'react';
import Constants from '../../Constants';

import * as App from '../../App';

import './style.css';

const logo = require('../../logo.svg');

const { COUNTER_ROUTE, FILTER_ROUTE } = Constants.Router;

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    return (
      <div className="homepage">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Sample App</h1>
        </header>
        <div className="body">
          <button onClick={store.PageDispatcher({ name: COUNTER_ROUTE })}>
            Counter
          </button>
          <button onClick={store.PageDispatcher({ name: FILTER_ROUTE })}>
            Filter
          </button>
        </div>
      </div>
    );
  }
);
