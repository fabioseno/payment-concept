import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import { NewPayment } from './app/screens/payment/NewPayment';
//import { CreditCards } from './app/screens/wallet/CreditCards';
import { CreditCards, Home, NewPayment } from './app/screens';

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  NewPayment: { screen: NewPayment },
  CreditCards: { screen: CreditCards }
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
