/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import MainChat from './src/MainChat';
import MainView from './src/MainView';



export default class App extends Component {
  render() {
    return (
      <MainView />
    );
  }
}
