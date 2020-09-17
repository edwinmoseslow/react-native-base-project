import React, { Component } from 'react';
import { Platform, Text, View, Button, Alert, TouchableNativeFeedback } from 'react-native';
import { styles } from '../styles/StyleSheet.js'

// platform :
// https://facebook.github.io/react-native/docs/platform-specific-code.html

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Login'),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, flewDirection: "column", alignItems: "center", alignContent: "space-between", justifyContent: "center" }}>
        
        <TouchableNativeFeedback onPress={() => navigate('Home', { name: 'Home' })}>
          <View style={styles.button_container}>
              <Text style={styles.button_text}>
                Login
              </Text>
          </View>
        </TouchableNativeFeedback>
        
        {/* <TouchableNativeFeedback onPress={() => navigate('SignUp', { name: 'Sign Up' })}>
          <View style={styles.button_container}>
            
              <Text style={styles.button_text}>
                Sign Up
              </Text>
          </View>
        </TouchableNativeFeedback> */}

        {/* <TouchableNativeFeedback onPress={() => navigate('ResetPassword', { name: 'Reset Password' })}>
          <View style={styles.button_container}>
            
              <Text style={styles.button_text}>
                Reset Password
              </Text>
          </View>
        </TouchableNativeFeedback> */}
      </View>
    );
  }
}