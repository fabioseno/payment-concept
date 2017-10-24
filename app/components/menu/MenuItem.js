import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

export class MenuItem extends React.Component {
    render() {
        return (
            <TouchableHighlight style={[styles.menuItem, this.props.style]}>
                <Text style={styles.menuItemText}>{ this.props.name }</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        //borderRadius: 10,
        borderWidth: 1,
        //borderColor: '#f7f7f7',
        backgroundColor: '#295185',
        flex: 1,
        height: 130,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'

        // shadowColor: '#6b8db9',
        // shadowOffset: {
        //     width: 0,
        //     height: 0
        // },
        // shadowRadius: 0,
        // shadowOpacity: 0.6
    },
    menuItemText: {
        color: '#ffffff',
        fontSize: 12
    }
});