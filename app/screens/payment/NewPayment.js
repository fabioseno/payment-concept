import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
                <View style={styles.scan}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scan: {
        backgroundColor: 'blue',
        width: 100,
        height: 100
    }
});