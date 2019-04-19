import {AsyncStorage} from 'react-native';

import {setLoading} from "../reducers/loading";
import {setAlert} from "../reducers/alert";

const domain = 'https://jsonplaceholder.typicode.com';

export const get = (url, options = {}) => {
    return fetch(domain + url, options)
        .then(response => {
            if (response.status === 401 || response.status === 403)
                throw 'Unauthorized';
            if (response.status !== 200)
                throw response.message || response._bodyText || '';
            return response.json();
        })
};

export const catchError = dispatch => error => {
    let action = {
        title: 'Error'
    };
    if (typeof error === "object" && typeof error.message === "object" && typeof error.message.message === "string")
        action.message = error.message.message;
    else if (typeof error === "object" && typeof error.message === "string")
        action.message = error.message;
    else if (typeof error === "object" && typeof error.error === "string") {
        if (error.error === 'User did not share')
            return null;
        action.message = error.error;
    }
    else if (typeof error === "string")
        action.message = error;

    dispatch(setLoading(false));
    dispatch(setAlert(action));
};

export const getItem = () => {
    return AsyncStorage.getItem('comments')
        .then(data => {
            if (data === null)
                return [];
            return JSON.parse(data)
        })
};

export const mergeComment = (postId, comment) => {
    return AsyncStorage.mergeItem('comments', JSON.stringify({[postId]: {[comment.id]: comment}}))
};
