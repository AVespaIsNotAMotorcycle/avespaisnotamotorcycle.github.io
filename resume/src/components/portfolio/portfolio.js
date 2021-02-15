import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import PortfolioButton from '../../components/portfoliobutton/portfoliobutton'

const Portfolio = () => {
  return (
    // Try setting `justifyContent` to `center`.
    // Try setting `flexDirection` to `row`.
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
          <PortfolioButton imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/avatars/user-08.jpg' />
        </View>
        <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue'
        }}>
          <PortfolioButton imageuri='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/avatars/user-07.jpg' />
        </View>
      </View>
    </View>
  );
};

export default Portfolio;