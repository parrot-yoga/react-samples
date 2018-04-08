import * as React from 'react';

import * as App from './App';

import * as Homepage from './Components/Homepage';
import * as Counter from './Components/Counter';

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    const state = store.getState();

    switch (state.page.name) {
      case 'Homepage':
        return <Homepage.Component store={store}/>;

      case 'Counter':
        return <Counter.Component store={store}/>;
    }
  }
);
