import * as React from 'react';
import Constants from './Constants';

import * as App from './App';

import * as Homepage from './Components/Homepage';
import * as Counter from './Components/Counter';
import * as Filter from './Components/Filter';

const { HOMEPAGE_ROUTE, COUNTER_ROUTE, FILTER_ROUTE } = Constants.Router;

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    const state = store.getState();

    switch (state.page.name) {
      case HOMEPAGE_ROUTE:
        return <Homepage.Component store={store}/>;

      case COUNTER_ROUTE:
        return <Counter.Component store={store}/>;

      case FILTER_ROUTE:
        return <Filter.Component store={store}/>;
    }
  }
);
