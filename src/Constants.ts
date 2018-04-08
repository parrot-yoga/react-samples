export namespace Constants {
    export namespace Counter {
        export const INCREMENT_COUNTER = '@@counter/INCREMENT_COUNTER';
        export const DECREMENT_COUNTER = '@@counter/DECREMENT_COUNTER';
    }

    export namespace Global {
        export const APP_STATE = '@@global/APP_STATE';
        export const SET_WHOLE_STATE = '@@global/SET_WHOLE_STATE';
        export const SET_PAGE = '@@global/SET_PAGE';
        export const COUNTER = '@@global/COUNTER';
        export const FILTER = '@@global/FILTER';
    }

    export namespace Router {
        export const COUNTER_ROUTE = '@@route/COUNTER';
        export const HOMEPAGE_ROUTE = '@@route/HOMEPAGE';
        export const FILTER_ROUTE = '@@route/FILTER';
    }

    export namespace Async {
        const Start = 'start';
        const Finish = 'finish';
        const Success = 'success';
        const Failure = 'failure';
        const Always = 'always';

        export type Status =
        typeof Start |
        typeof Finish |
        typeof Success |
        typeof Failure |
        typeof Always;
    }
}

export default Constants;