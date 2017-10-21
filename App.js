import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { QRCode } from './app/components';
import { Home } from './app/screens/home';

const SimpleApp = StackNavigator({
  Home: { screen: Home }
});

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    //const { navigate } = this.props.navigation;

    return(
      <SimpleApp />
    );
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      //   <QRCode></QRCode>

      //   <Button onPress={ () => navigate('Home') } title="Go">Go</Button>
      // </View>

      
    
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
