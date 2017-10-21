import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { QRCode } from './app/components';
import { Home } from './app/screens/home';
import { NewPayment } from './app/screens/payment/NewPayment';

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  NewPayment: { screen: NewPayment }
});

export default class App extends React.Component {
  render() {
    return(
      <SimpleApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
