import React from 'react';
import { View, Text } from 'react-native';

export class NewPayment extends React.Component {
    static navigationOptions = {
        title: 'Novo pagamento'
    };

    render() {
        return (
            <View>
                <Text>
                    QR Code reader
                </Text>
            </View>
        );
    }
}