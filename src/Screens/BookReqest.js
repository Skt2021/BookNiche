import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SubmitButton from '../Components/SubmitButton';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SubmitButton>Request Book</SubmitButton>
      </View>
    );
  }
}
