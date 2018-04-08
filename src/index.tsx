import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

import * as App from './App';

const seed = `${Math.random()}`;
const store = App.Store(seed);

const storedState = localStorage.getItem('app-state');

if (storedState) {
  store.Dispatcher({ type: 'SetWholeState', data: JSON.parse(storedState) })();
}

store.subscribe(() => {
  localStorage.setItem(
    'app-state',
    JSON.stringify(store.getState())
  );
});

const render = () => {
  ReactDOM.render(
    <Router.Component store={store}/>,
    document.getElementById('root') as HTMLElement
  );
};

render();
store.subscribe(render);

registerServiceWorker();
