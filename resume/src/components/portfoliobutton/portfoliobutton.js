import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import Popup from '../../components/popup/popup'

class PortfolioButton extends React.Component {

    //constructor(props)  {
    //    super(props);
    //    this.state = { showPopup: false };
    //}
      
    //togglePopup() {
    //    this.setState({
    //        showPopup: !this.state.showPopup
    //    });
    //}

    changeBackground(e) {
        e.target.style.backgroundColor = 'lightgray';
    }

    restoreBackground(e) {
        e.target.style.backgroundColor = 'white';
    }

    render() {

        return (
            <View 
            onClick={this.props.togglePopup.bind(this)}
            onMouseOver={this.changeBackground}
            onMouseLeave={this.restoreBackground}
            class="portfolio-button"
            style={{
                flex: 2,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'white',
                alignItems: 'center',
                zIndex: 1
              }}>
                
                <Image
                    style={{width: 200, height: 200, resizeMode: 'contain'}}
                    source={{
                        uri: this.props.imageuri
                    }} 
                />
            </View>
        );
    }
  }

export default PortfolioButton;