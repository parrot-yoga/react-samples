import * as React from 'react';

import { App } from '../../App';

import './style.css';

const logo = require('../../logo.svg');

export const Homepage: React.SFC<{ store: App.Store.Type }> = (
  ({store}) => {
    return (
      <div className="homepage">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">App</h1>
        </header>
      </div>
    );
  }
);
