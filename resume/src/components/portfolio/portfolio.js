import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import PortfolioButton from '../../components/portfoliobutton/portfoliobutton'

class Portfolio extends React.Component {

  constructor(props)  {
      super(props);
  }

  render () {
    return (
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
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'blue'
          }}>
            <PortfolioButton 
            imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/logo.png' 
            onClick={this.props.togglePopup}
            />
          </View>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'blue'
          }}>
            <PortfolioButton 
            imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/logo.png' 
            //togglePopup={this.props.togglePopup}
            />
          </View>
        </View>
        <View style={{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
        }}>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'blue'
          }}>
            <PortfolioButton 
            imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/logo.png' 
            //onClick={this.props.togglePopup}
            />
          </View>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'blue'
          }}>
            <PortfolioButton 
            imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/logo.png' 
            //togglePopup={this.props.togglePopup}
            />
          </View>
        </View>

      </View>
      
    );
  };
};

export default Portfolio;