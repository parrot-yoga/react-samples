import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export type Page = (
  { name: 'Homepage' } |
  never
);

export type State = {
  page: Page,
};

export function State(seed: string): State {
  return {
    page: { name: 'Homepage' },
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
  }
}

export type Store = {
  getState: () => State,
  dispatch: (action: Action) => void,
  subscribe: (callback: () => void) => void
};

export function Store(seed: string): Store {
  const initState = State(seed);

  const store = createStore(
    (state, action) => reduce(
      state || initState,
      action as Action,
    ),
    initState,
    composeWithDevTools()
  );

  return {
    getState: () => (
      (store.getState() || initState) as State
    ),
    dispatch: ((action: Action) => store.dispatch(action)),
    subscribe: store.subscribe,
  };
}
