import React from 'react';
import { Platform,StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

export class CreditCards extends React.Component {
    static navigationOptions = {
        header: (
        <View
            style={{
                flexDirection: "row",
                height: 80,
                marginTop: Platform.OS == "ios" ? 20 : 0 // only for IOS to give StatusBar Space
                }}
            >
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> BACK </Text>
            </TouchableOpacity>
            <Text> My Header </Text>
        </View>
        )};

    listCreditCards() {
        let creditCards = [{
            owner: 'Fábio Akira Yoshida',
            finalNumber: '**** **** **** 1234',
            validity: '12/2018',
            type: 'Visa'
        },
        {
            owner: 'Fábio Akira Yoshida 2',
            finalNumber: '**** **** **** 5678',
            validity: '12/2019',
            type: 'Mastercard'
        }];

        return creditCards.map(card => {
            return (
                <View style={styles.cardSlot} key={card.finalNumber}>
                    <TouchableHighlight style={styles.card}>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardType}>{card.type}</Text>
                            <Text style={styles.cardNumber}>{card.finalNumber}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        })
    };

    render() {
        let creditCardsRendered = [];

        return (
            <View style={styles.screen}>
                { this.listCreditCards() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    cardSlot: {
        backgroundColor: '#f7f7f7',
        // shadowColor: '#000',
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.6
        overflow: 'hidden'
    },
    card: {
        backgroundColor: '#777777',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#777777',
        borderWidth: 3,
        height: 80,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 12,

        shadowColor: '#000',
        shadowOffset: { width: 6, height: 1 },
        shadowOpacity: 0.6,
        elevation: 2
    },
    cardInfo: {
        
    },
    cardNumber: {
        color: '#ffffff',
        alignSelf: 'flex-end',
        fontSize: 18
        //fontFamily: 'CreditCard'
    }
});