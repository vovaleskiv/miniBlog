import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {connect, Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {createAppContainer} from 'react-navigation';
import thunk from 'redux-thunk';
import Spinner from 'react-native-loading-spinner-overlay';

import Navigation from './navigators';
import AppReducer from './reducers';
import NavigationService from './navigators/action'

import ModalAlert from "./components/ModalAlert";

import {clearAlert} from "./reducers/alert";
import {fetchPosts} from "./actions/index";

const AppContainer = createAppContainer(Navigation);

class Layout extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <View style={styles.container}>
            <Spinner visible={this.props.isLoading}/>
            <AppContainer ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}/>
            <ModalAlert title={this.props.alert.title}
                        message={this.props.alert.message}
                        visible={this.props.alert.visible}
                        closeAlert={this.props.closeAlert}/>
        </View>;
    }
}

const LayoutRedux = connect(
    state => ({
        isAppLoad: state.isAppLoad,
        isLoading: state.loading,
        alert: state.alert,
        isLightUp: state.isLightUp
    }),
    dispatch => ({
        closeAlert: () => dispatch(clearAlert()),
        fetchPosts: () => dispatch(fetchPosts()),
    })
)(Layout);

export const AppStore = createStore(AppReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={AppStore}>
        <LayoutRedux/>
    </Provider>
);

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
