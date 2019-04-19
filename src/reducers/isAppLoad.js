import {createReducer, createAction} from 'redux-act';

export const setLoad = createAction('Is app load');

const isAppLoad = createReducer({
    [setLoad]: (state, payload) => payload,
}, false);

export default isAppLoad;