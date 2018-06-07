import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Header from './Header';
import Chat from './Chat';

const MainChat = () => (
  <View style={styles.container}>
    <StatusBar 
        translucent={true}
        backgroundColor="rgba(0,0,0,.4)"
        barStyle="light-content"
      />
      <Header title="#lolis"/>
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


export default MainChat;

