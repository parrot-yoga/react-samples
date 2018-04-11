import * as React from 'react';
import * as App from '../../App';
import './style.css';

import * as Constant from './Constants';
import * as Homepage from '../Homepage';

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    return (
      <div className="filter">
        <input
          type="text"
          value={store.getState().filter}
          onInput={evt => store.dispatch({
            type: Constant.FILTER,
            data: (evt.target as HTMLInputElement).value,
          })}
        />
        {(Constant.Lines
          .filter(line => line
            .toUpperCase()
            .indexOf(store.getState().filter.toUpperCase()) !== -1
          )
          .map(line => (
            <p>{line}</p>
          ))
        )}
        <br/>
        <button onClick={store.PageDispatcher({ name: Homepage.HOMEPAGE_ROUTE })}>
          Home
        </button>
      </div>
    );
  }
);
