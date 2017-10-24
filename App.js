import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Home } from './app/screens/home';
import { NewPayment } from './app/screens/payment/NewPayment';
import { CreditCards } from './app/screens/wallet/CreditCards';
import { Menu } from './app/screens/menu/Menu';

const SimpleApp = StackNavigator({
  Menu: { screen: Menu},
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
