import {createReducer, createAction} from 'redux-act';

export const setLoading = createAction('loading page');

const loading = createReducer({
    [setLoading]: (state, payload) => payload,
}, false);

export default loading;