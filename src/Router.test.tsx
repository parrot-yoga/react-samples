import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './Router';

import * as App from './App';

it('renders without crashing', () => {
  const store = App.Store('');
  const div = document.createElement('div');
  ReactDOM.render(<Router store={store}/>, div);
});
