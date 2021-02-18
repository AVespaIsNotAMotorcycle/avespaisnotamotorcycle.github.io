import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import SelfDescription from './components/selfdescription/selfdescription'
import PortfolioButton from './components/portfoliobutton/portfoliobutton'
import Popup from './components/popup/popup';

class App extends Component {

  constructor(props)  {
    super(props);
    this.state = { showPopup: false };
  }
    
  togglePopup() {
      this.setState({
          showPopup: !this.state.showPopup
      });
  }

  render() {
    return (
      <div>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }} className="App">
          <SelfDescription /> 
          <View style={{
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'white'
          }}>
            <View style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white'
            }}>
              <PortfolioButton 
                imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/logo.png' 
                togglePopup={this.togglePopup.bind(this)}
              />
              <PortfolioButton 
                imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/logo.png' 
                togglePopup={this.togglePopup.bind(this)}
              />              
            </View>
            <View style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white'
            }}>
              <PortfolioButton 
                imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/logo.png' 
                togglePopup={this.togglePopup.bind(this)}
              />
              <PortfolioButton 
                imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/logo.png' 
                togglePopup={this.togglePopup.bind(this)}
              />              
            </View>
          </View>
        </View>
        <View>
          {this.state.showPopup ?
            <Popup
            style={{zIndex:2}}
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </View>
      </div>
    );
  }
}

export default App;
