import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Settings extends React.Component {
    render() {
        return (
            <View style={styles.settings}>
                <Icon style={styles.icon} name={'settings'} size={32} color="#295185" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    settings: {
        position: 'absolute',
        top: 30,
        right: 15
    }
})