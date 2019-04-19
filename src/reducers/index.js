import {combineReducers} from 'redux';

import loading from './loading';
import isAppLoad from './isAppLoad';
import alert from './alert';
import posts from './posts';

export default combineReducers({
    loading,
    isAppLoad,
    alert,
    posts,
});