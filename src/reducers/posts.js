import {createReducer, createAction} from 'redux-act';
import {combineReducers} from "redux";

export const setPosts = createAction('Set post list');
export const setCurrentPost = createAction('Set current post');
export const setComments = createAction('Set comments of post');

const list = createReducer({
    [setPosts]: (state, payload) => payload,
}, []);

const currentPost = createReducer({
    [setCurrentPost]: (state, payload) => payload,
}, []);

const comments = createReducer({
    [setComments]: (state, payload) => payload,
}, []);

export default combineReducers({
    list,
    currentPost,
    comments,
})