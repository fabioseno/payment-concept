import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MenuItem } from '../../../app/components/menu/MenuItem';
import { StackNavigator } from 'react-navigation';

export class Menu extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} resizeMode="contain" source={require('../../assets/img/aix-logo.png')}></Image>
                    <Text style={styles.logoName}>AixMobil</Text>
                </View>
                <View style={ styles.menu }>
                    {/* <View style={{ flex:1, backgroundColor: '#0000ff' }}> */}
                        <View style={styles.menuRow}>
                            <MenuItem name="Wallet" style={'topLeftItem'}></MenuItem>
                            <MenuItem name="Quick pay" style={'topMiddleItem'}></MenuItem>
                            <MenuItem name="Lançamento" style={'topRightItem'}></MenuItem>
                        </View>
                        <View style={styles.menuRow}>
                            <MenuItem name="Cobranças" style={'bottomLeftItem'}></MenuItem>
                            <MenuItem name="Settings" style={'bottomMiddleItem'}></MenuItem>
                            <MenuItem name="Settings" style={'bottomRightItem'}></MenuItem>
                        </View>
                    {/* </View> */}
                </View>
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#eaeaea',
        flex: 1
    },
    logoContainer: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    },
    logo: {
        flex: 1,
        maxHeight: 60
    },
    logoName: {
        color: '#295185',
        alignItems: 'center',
        fontSize: 16,
        marginTop: 10
    },
    menu: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    menuRow: {
        flexDirection: 'row'
    }
 });