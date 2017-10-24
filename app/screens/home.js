import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>welcome</Text>
                <TouchableHighlight onPress={() => navigate('CreditCards')}>
                    <Text>Pay now</Text>
                </TouchableHighlight>
            </View>
        );
    }
}