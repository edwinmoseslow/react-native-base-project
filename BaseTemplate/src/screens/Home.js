import React, { Component } from 'react';
import { Platform, Text, View, Button, Alert } from 'react-native';

// platform :
// https://facebook.github.io/react-native/docs/platform-specific-code.html

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}