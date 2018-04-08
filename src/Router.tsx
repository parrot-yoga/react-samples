import * as React from 'react';
import { Homepage } from './Components/Homepage';

import * as App from './App';

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    const state = store.getState();

    switch (state.page.name) {
      case 'Homepage':
        return <Homepage store={store}/>;
    }
  }
);
