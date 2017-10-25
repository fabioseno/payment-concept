import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { MenuItem } from '../../../app/components/menu/MenuItem';
import { AppText } from '../../components';

export class Menu extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} resizeMode="contain" source={require('../../assets/img/aix-logo.png')}></Image>
                    <AppText style={styles.logoName}>AixMobil</AppText>
                </View>
                <View style={ styles.bodyContainer }>
                    <View style={styles.menuArea}>
                        <View style={styles.menuRow}>
                            <MenuItem name="Quick pay" style={'topLeftItem'} icon={'qrcode-scan'}></MenuItem>
                            <MenuItem name="Transações" style={'topMiddleItem'} icon={'shuffle-variant'}></MenuItem>
                            <MenuItem name="Lançamento" style={'topRightItem'} icon={'credit-card'}></MenuItem>
                        </View>
                        <View style={styles.menuRow}>
                            <MenuItem name="Cobranças" style={'bottomLeftItem'} icon={'account-switch'}></MenuItem>
                            <MenuItem name="Carteira" style={'bottomMiddleItem'} icon={'credit-card-multiple'}></MenuItem>
                            <MenuItem name="Configurações" style={'bottomRightItem'} icon={'settings'}></MenuItem>
                        </View>
                    </View>
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
        maxHeight: 100
    },
    logoName: {
        color: '#295185',
        alignItems: 'center',
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold'
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    menuArea: {
        shadowColor: '#295185',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 1
    },
    menuRow: {
        flexDirection: 'row'
    }
 });