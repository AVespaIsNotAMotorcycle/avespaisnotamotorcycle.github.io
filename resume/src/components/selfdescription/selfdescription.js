import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

const SelfDescription = () => {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
      }}>
        <View style={{flex:1}}>
            <Image
            style={{width: 150, height: 150, borderRadius: 150/ 2}}
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
              }} 
            />
        </View>
        <View style={{flex: 2}}><p>
            I'm a junior in the Daedalus Honors Scholar Program at Hunter College, and am currently pursuing a double major in Computer Science and History. 
            I currently volunteer with both Microsoft's TEALS program and PortSide NewYork. 
            In the past I have worked for the Brooklyn Kindergarten Society, interned at the New-York Historical Society, and volunteered with the Appalachian Mountain Club.
        </p></View>
      </View>
    );
  };
  
  export default SelfDescription;