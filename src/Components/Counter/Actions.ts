import { INCREMENT, DECREMENT } from './Constants';

export type Increment = {
  type: typeof INCREMENT;
  data: number;
};

export const Increment = (amount: number): Increment => ({
  type: INCREMENT,
  data: amount
});

export type Decrement = {
  type: typeof DECREMENT;
  data: number;
};

export const Decrement = (amount: number): Decrement => ({
  type: DECREMENT,
  data: amount
});

// Combined action type
export type Action =
  | Increment
  | Decrement
;
