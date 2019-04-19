import {createReducer, createAction} from 'redux-act';

export const setAlert = createAction('Alert message');
export const clearAlert = createAction('Clear alert');

const alert = createReducer({
    [setAlert]: (state, payload) => {
        const {title, message} = payload;
        return {title, message, visible: true};
    },
    [clearAlert]: (state, payload) => ({})
}, {});

export default alert;