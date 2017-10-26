import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Settings extends React.Component {
    render() {
        //const { navigate } = this.props.navigation;

        return (
            // onPress={() => this.props.navigation.navigate('NewPayment')}
            <TouchableHighlight style={styles.settings} onPress={() => alert('')}>
                <Icon style={styles.icon} name={'settings'} size={32} color="#295185" />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    settings: {
        position: 'absolute',
        top: 30,
        right: 15,
        zIndex: 1
    }
})