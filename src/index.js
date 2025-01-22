import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Pessoa from './Pessoa'

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}> Menu Pizza</Text>
                <Text style={styles.pizza}>Voce escolheu pizza calabresa</Text>
                <Text style={styles.pizza}>R$70,99</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },

    logo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,

    },
    pizza: {
        marginTop: 15,
        fontSize: 28,
        textAlign: 'center'
    },


})

export default App;
