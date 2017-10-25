import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppText } from '../index';

export class MenuItem extends React.Component {
    onPress() {

    }

    render() {
        return (
            <TouchableHighlight onPress={this.onPress} underlayColor="#ff0000" style={[styles.menuItem, styles[this.props.style]]}>
                <View style={styles.menuContainer}>
                    <Icon name={this.props.icon} size={36} color="#fff" />
                    <AppText style={styles.menuItemText}>{this.props.label}</AppText>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        borderWidth: 0,
        borderColor: '#eaeaea',

        backgroundColor: '#295185',
        flex: 1,
        height: 120,
        padding: 10
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuItemText: {
        marginTop: 8,
        color: '#ffffff',
        fontSize: 13
    },
    topLeftItem: {
        borderRightWidth: 1
    },
    topMiddleItem: {
        
    },
    topRightItem: {
        borderLeftWidth: 1
    },
    bottomLeftItem: {
        borderTopWidth: 1,
        borderRightWidth: 1
    },
    bottomMiddleItem: {
        borderTopWidth: 1
    },
    bottomRightItem: {
        borderTopWidth: 1,
        borderLeftWidth: 1
    },
});