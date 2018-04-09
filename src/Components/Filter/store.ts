export namespace Filter {
    export namespace State {
        export type Type = string;

        export function Create() { return ''; }
    }

    export namespace Actions {

        type Action = string;

        export type Combined =
        Action |
        never;
    }

    export namespace Reduce {

        export const create = (state: State.Type, action: Actions.Combined): State.Type => {
            return action;
        };
  }
}

export default Filter;