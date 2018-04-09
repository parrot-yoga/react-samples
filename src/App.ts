import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Constants from './Constants';

import Counter from './Components/Counter/store';
import Filter from './Components/Filter/store';

const { HOMEPAGE_ROUTE, COUNTER_ROUTE, FILTER_ROUTE } = Constants.Router;
const { SET_WHOLE_STATE, SET_PAGE, COUNTER, FILTER } = Constants.Global;

export type Page = (
  { name: typeof HOMEPAGE_ROUTE } |
  { name: typeof COUNTER_ROUTE } |
  { name: typeof FILTER_ROUTE } |
  never
);

export type State = {
  page: Page,
  counter: Counter.State.Type,
  filter: Filter.State.Type,
};

export function State(seed: string): State {
  return {
    page: { name: HOMEPAGE_ROUTE },
    counter: Counter.State.Create(),
    filter: Filter.State.Create(),
  };
}

export type Action = (
  {
    type: typeof SET_WHOLE_STATE,
    data: State,
  } |
  {
    type: typeof SET_PAGE,
    data: Page,
  } |
  {
    type: typeof COUNTER,
    data: Counter.Actions.Combined,
  } |
  {
    type: typeof FILTER,
    data: Filter.Actions.Combined,
  } |
  never
);

export function reduce(state: State, action: Action): State {
  switch (action.type) {
    case SET_WHOLE_STATE: {
      return action.data;
    }

    case SET_PAGE: {
      return { ...state, page: action.data };
    }

    case COUNTER: {
      return { ...state, counter: Counter.Reduce.create(state.counter, action.data) };
    }

    case FILTER: {
      return { ...state, filter: Filter.Reduce.create(state.filter, action.data) };
    }

    default: return state;
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
    Dispatcher({ type: SET_PAGE, data: page })
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
