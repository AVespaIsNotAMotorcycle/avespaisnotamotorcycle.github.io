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
        <div class='selfsummary-padder' />
        <div class='headshot-container'>
            <img 
              class='headshot'
              src='https://raw.githubusercontent.com/AVespaIsNotAMotorcycle/avespaisnotamotorcycle.github.io/main/resume/public/images/headshot.PNG' 
            />
        </div>
        <div class="nametag-container">
            <h1 class="nametag">Samuel Ebersole</h1>
        </div>
        <div class="selfsummary-container">
          <p class="selfsummary-p">
              I'm a junior in the Daedalus Honors Scholar Program at Hunter College, and am currently pursuing a double major in Computer Science and History. 
              I currently volunteer with both Microsoft's TEALS program and PortSide NewYork. 
              In the past I have worked for the Brooklyn Kindergarten Society, interned at the New-York Historical Society, and volunteered with the Appalachian Mountain Club.
          </p>
        </div>
      </View>
    );
  };
  
  export default SelfDescription;