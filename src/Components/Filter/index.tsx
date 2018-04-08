import * as React from 'react';
import Constants from '../../Constants';

import * as App from '../../App';

import './style.css';

const { HOMEPAGE_ROUTE } = Constants.Router;
const { FILTER } = Constants.Global;

export type State = string;
export function State() { return ''; }

export type Action = string;

export const reduce = (state: State, action: Action): State => {
  return action;
};

const lines = [
  // tslint:disable
  'The United States of America (USA), commonly known as the United States (U.S.) or America, is a federal republic composed of 50 states, a federal district, five major self-governing territories, and various possessions.',
  'At 3.8 million square miles (9.8 million km2) and with over 325 million people, the United States is the world\'s third- or fourth-largest country by total area[fn 7] and the third-most populous country.',
  'The capital is Washington, D.C., and the largest city by population is New York City.',
  'Forty-eight states and the capital\'s federal district are contiguous and located in North America between Canada and Mexico.',
  'The state of Alaska is in the northwest corner of North America, bordered by Canada to the east and across the Bering Strait from Russia to the west.',
  'The state of Hawaii is an archipelago in the mid-Pacific Ocean.',
  'The U.S. territories are scattered about the Pacific Ocean and the Caribbean Sea, stretching across nine official time zones.',
  'The extremely diverse geography, climate, and wildlife of the United States make it one of the world\'s 17 megadiverse countries.[19]',
  'Paleo-Indians migrated from Siberia to the North American mainland at least 15,000 years ago.[20]',
  'European colonization began in the 16th century.',
  'The United States emerged from the thirteen British colonies established along the East Coast.',
  'Numerous disputes between Great Britain and the colonies following the French and Indian War led to the American Revolution, which began in 1775, and the subsequent Declaration of Independence in 1776.',
  'The war ended in 1783 with the United States becoming the first country to gain independence from a European power.[21]',
  'The current constitution was adopted in 1788, with the first ten amendments, collectively named the Bill of Rights, being ratified in 1791 to guarantee many fundamental civil liberties.',
  'The United States embarked on a vigorous expansion across North America throughout the 19th century, acquiring new territories,[22] displacing Native American tribes, and gradually admitting new states until it spanned the continent by 1848.[22]',
  'During the second half of the 19th century, the Civil War led to the abolition of slavery.[23][24]',
  'By the end of the century, the United States had extended into the Pacific Ocean,[25] and its economy, driven in large part by the Industrial Revolution, began to soar.[26]',
  'The Spanish-American War and World War I confirmed the country\'s status as a global military power.',
  'The United States emerged from World War II as a global superpower, the first country to develop nuclear weapons, the only country to use them in warfare, and a permanent member of the United Nations Security Council.',
  'During the Cold War, the United States and the Soviet Union competed in the Space Race, culminating with the 1969 moon landing.',
  'The end of the Cold War and the collapse of the Soviet Union in 1991 left the United States as the world\'s sole superpower.[27]',
  // tslint:enable
];

export const Component: React.SFC<{ store: App.Store }> = (
  ({store}) => {
    return (
      <div className="filter">
        <input
          type="text"
          value={store.getState().filter}
          onInput={evt => store.dispatch({
            type: FILTER as typeof FILTER,
            data: (evt.target as HTMLInputElement).value,
          })}
        />
        {(lines
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
