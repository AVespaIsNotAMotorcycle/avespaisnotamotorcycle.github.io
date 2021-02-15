import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import SelfDescription from './components/selfdescription/selfdescription'
import Portfolio from './components/portfolio/portfolio'
import Popup from './components/popup/popup';

class App extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }} className="App">
        <SelfDescription /> 
        <Portfolio />
      </View>
    );
  }
}

export default App;
