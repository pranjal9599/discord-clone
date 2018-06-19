import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import { 
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';

import Header from './Header';
import Tabs from './Tabs';
import SideMenu from './SideMenu';
import MainChat from './MainChat';


const MainView = createStackNavigator({
    MyTab: {
        screen: Tabs,
        navigationOptions: {header : Header}
    }
});


export default createDrawerNavigator({
    Main: {
        screen: MainView,
    },
    ServerChat: {
        screen: MainChat
    }
}, {
    contentComponent: ({ navigation }) => (
        <SideMenu navigation={navigation} />
    ),
    drawerWidth: 340
});