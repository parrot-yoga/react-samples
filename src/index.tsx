import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

import { App } from './App';

const seed = `${Math.random()}`;
const store = App.Store.create(seed);

const storedState = localStorage.getItem('app-state');

if (storedState) {
  store.dispatch({ type: 'SetWholeState', data: JSON.parse(storedState) });
}

store.subscribe(() => {
  localStorage.setItem(
    'app-state',
    JSON.stringify(store.getState())
  );
});

const render = () => {
  ReactDOM.render(
    <Router store={store}/>,
    document.getElementById('root') as HTMLElement
  );
};

render();
store.subscribe(render);

registerServiceWorker();