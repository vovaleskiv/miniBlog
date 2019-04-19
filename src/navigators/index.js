import React from 'react';
import {StyleSheet} from "react-native";
import {createStackNavigator} from 'react-navigation';

import HomeScreen from '../containers/HomeScreen';
import PostScreen from '../containers/PostScreen';
import AddCommentScreen from '../containers/AddCommentScreen';

import {
    HOME,
    BLOG_POST,
    ADD_COMMENT,
} from "../constants/navigation";

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#f00',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        height: 45,
    },
    headerBackTitleStyle: {
        fontSize: 15,
    },
    headerTitleStyle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'center',
    }
});


const Navigation = createStackNavigator({
        [BLOG_POST]: {
            screen: PostScreen
        },
        [HOME]: {
            screen: HomeScreen
        },
        [ADD_COMMENT]: {
            screen: AddCommentScreen
        },
    },
    {
        initialRouteName: HOME,
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerTintColor: "#fff",
            headerBackTitle: null,
            headerStyle: styles.headerStyle,
            headerBackTitleStyle: styles.headerBackTitleStyle,
            headerTitleStyle: styles.headerTitleStyle,
        },
    }
);

export default Navigation;