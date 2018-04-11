import * as Type from './Types';
import * as Constant from './Constants';

export const reduce = (
    state: Type.State,
    action: Type.Action
): Type.State => {
    const { count } = state;

    switch (action.type) {
        case Constant.INCREMENT:
            return { ...state, count: count + action.data };
        case Constant.DECREMENT:
            return { ...state, count: count - action.data };
        default:
            return state;
    }
};
