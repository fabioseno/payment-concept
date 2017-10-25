import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

import { AppText } from '../index';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const myIcon = (<Icon name="credit-card" size={30} color="#900" />)

export class MenuItem extends React.Component {
    render() {
        return (
            <TouchableHighlight style={[styles.menuItem, styles[this.props.style]]}>
                <View style={styles.menuContainer}>
                    <Icon style={styles.icon} name={this.props.icon} size={30} color="#900" />
                    <AppText style={styles.menuItemText}>{this.props.name}</AppText>
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
        height: 130,
        padding: 10
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: '#ffffff',
        fontSize: 36
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