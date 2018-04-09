import * as React from 'react';
import Constants from '../../Constants';
import * as App from '../../App';

import './style.css';

const { HOMEPAGE_ROUTE } = Constants.Router;
const { FILTER } = Constants.Global;
const { Lines } = Constants.Misc;

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    return (
      <div className="filter">
        <input
            type="text"
            value={store.getState().filter}
            onInput={evt => store.dispatch({
            type: FILTER,
            data: (evt.target as HTMLInputElement).value,
          })}
        />
        {(Lines
          .filter(line => line
            .toUpperCase()
            .indexOf(store.getState().filter.toUpperCase()) !== -1
          )
          .map(line => (
            <p>{line}</p>
          ))
        )}
        <br/>
        <button onClick={store.PageDispatcher({ name: HOMEPAGE_ROUTE })}>
          Home
        </button>
      </div>
    );
  }
);