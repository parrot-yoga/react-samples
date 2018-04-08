import * as React from 'react';
import { Homepage } from './Components/Homepage';

import { App } from './App';

type Props = {
  store: App.Store.Type,
};

const Router: React.SFC<Props> = (
  ({store}) => {
    const state = store.getState();

    switch (state.page.pageName) {
      case 'Homepage':
        return <Homepage store={store}/>;
    }
  }
);

export default Router;
