import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Header from './Header';
import Chat from './Chat';

const MainChat = () => (
  <View style={styles.container}>
      <Chat />
  </View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
      color: "#fff"
    }
})


export default createStackNavigator({
  MainChat: {
    screen: MainChat,
    navigationOptions: {header: Header}
  }
})

