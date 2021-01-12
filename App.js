/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </>
  );
};


export default App;
