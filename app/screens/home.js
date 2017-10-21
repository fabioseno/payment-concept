import React from 'react';
import { View, Text } from 'react-native';

export class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    render() {
        return (
            <View>
                <Text>welcome</Text>
            </View>
        );
    }
}