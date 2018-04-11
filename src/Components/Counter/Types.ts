// State type
export type State = {
  count: number;
};

// Initial state
export function createInitialState(): State {
  return {
    count: 0
  };
}
