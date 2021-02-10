import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

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
        }} />
        <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red'
        }} />
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
        backgroundColor: 'red'
        }} />
        <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue'
        }} />
      </View>
    </View>
  );
};

export default Portfolio;