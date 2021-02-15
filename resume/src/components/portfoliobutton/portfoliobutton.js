import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import Popup from '../../components/popup/popup'

class PortfolioButton extends React.Component {

    constructor(props)  {
        super(props);
        this.state = { showPopup: false };
    }
      
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    changeBackground(e) {
        e.target.style.backgroundColor = 'gray';
    }

    restoreBackground(e) {
        e.target.style.backgroundColor = 'white';
    }

    render() {

        return (
            <View 
            onClick={this.togglePopup.bind(this)}
            onMouseOver={this.changeBackground}
            onMouseLeave={this.restoreBackground}
            class="portfolio-button"
            style={{
                flex: 2,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'white',
                alignItems: 'center'
              }}>
                
                <Image
                    style={{width: 200, height: 200, borderRadius: 200/ 2}}
                    source={{
                        uri: this.props.imageuri
                    }} 
                />
                {this.state.showPopup ?
                    <Popup
                    text='Click "Close Button" to hide popup'
                    closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </View>
        );
    }
  }

export default PortfolioButton;