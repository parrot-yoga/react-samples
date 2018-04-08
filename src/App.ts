import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export namespace App {
  export type Page = (
    { pageName: 'Homepage' } |
    never
  );

  export type Type = {
    page: Page,
  };

  export function create(seed: string): Type {
    return {
      page: { pageName: 'Homepage' },
    };
  }

  export type Action = (
    {
      type: 'SetWholeState',
      data: Type,
    } |
    {
      type: 'SetPage'
      data: Page,
    } |
    never
  );

  export function reduce(appState: Type, action: Action): Type {
    switch (action.type) {
      case 'SetWholeState': {
        return action.data;
      }

      case 'SetPage': {
        return { ...appState, page: action.data };
      }
    }
  }

  export namespace Store {
    export type Type = {
      getState: () => App.Type,
      dispatch: (action: Action) => void,
      subscribe: (callback: () => void) => void
    };

    export function create(seed: string): Type {
      const initState = App.create(seed);

      const store = createStore(
        (state, action) => App.reduce(
          state || initState,
          action as Action,
        ),
        initState,
        composeWithDevTools()
      );

      return {
        getState: () => (
          (store.getState() || initState) as App.Type
        ),
        dispatch: ((action: Action) => store.dispatch(action)),
        subscribe: store.subscribe,
      };
    }
  }
}
