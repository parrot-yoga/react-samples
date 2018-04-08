import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as Counter from './Components/Counter';
import * as Filter from './Components/Filter';

export type Page = (
  { name: 'Homepage' } |
  { name: 'Counter' } |
  { name: 'Filter' } |
  never
);

export type State = {
  page: Page,
  counter: Counter.State,
  filter: Filter.State,
};

export function State(seed: string): State {
  return {
    page: { name: 'Homepage' },
    counter: Counter.State(),
    filter: Filter.State(),
  };
}

export type Action = (
  {
    type: 'SetWholeState',
    data: State,
  } |
  {
    type: 'SetPage'
    data: Page,
  } |
  {
    type: 'Counter',
    data: Counter.Action,
  } |
  {
    type: 'Filter',
    data: Filter.Action,
  } |
  never
);

export function reduce(state: State, action: Action): State {
  switch (action.type) {
    case 'SetWholeState': {
      return action.data;
    }

    case 'SetPage': {
      return { ...state, page: action.data };
    }

    case 'Counter': {
      return { ...state, counter: Counter.reduce(state.counter, action.data) };
    }

    case 'Filter': {
      return { ...state, filter: Filter.reduce(state.filter, action.data) };
    }
  }
}

export type Store = {
  getState: () => State,
  dispatch: (action: Action) => void,
  Dispatcher: (action: Action) => () => void,
  PageDispatcher: (page: Page) => () => void,
  subscribe: (callback: () => void) => void
};

export function Store(seed: string): Store {
  const initState = State(seed);

  const reduxStore = createStore(
    (state, action) => reduce(
      state || initState,
      action as Action,
    ),
    initState,
    composeWithDevTools()
  );

  const getState = () => (
    (reduxStore.getState() || initState) as State
  );

  const dispatch = (action: Action) => reduxStore.dispatch(action);
  const Dispatcher = (action: Action) => () => dispatch(action);

  const PageDispatcher = (page: Page) => (
    Dispatcher({ type: 'SetPage', data: page })
  );

  const subscribe = reduxStore.subscribe;

  return {
    getState,
    dispatch,
    Dispatcher,
    PageDispatcher,
    subscribe,
  };
}
