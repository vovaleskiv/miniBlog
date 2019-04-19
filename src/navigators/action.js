import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function push(routeName, params) {
    _navigator.dispatch(StackActions.push({routeName, params}));
}

function reset(routeName, params) {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName, params})]
        })
    );
}

function back() {
    _navigator.dispatch(NavigationActions.back());
}

export default {
    push,
    reset,
    back,
    setTopLevelNavigator,
};