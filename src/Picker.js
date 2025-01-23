import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pizzaSelecionada: 0,
            listaPizza: [
                { value: 1, preco: '53', label: "Calabresa" },
                { value: 2, preco: '24', label: "Chocolate" },
                { value: 3, preco: '63', label: "Frango" },
                { value: 4, preco: '15', label: "Queijo" },
                { value: 5, preco: '26', label: "Carne" },
            ]

        }
    }


    render() {

        let pizzasItem = this.state.listaPizza.map((v, k) => {
         return   <Picker.Item key={1} value={v} label={v.label} />
        })
        return (
            <View style={styles.container}>
                <Text style={styles.logo}> Menu Pizza</Text>
                <Picker
                    selectedValue={this.state.pizzaSelecionada}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({ pizzaSelecionada: itemIndex })
                    }}
                >
                    {pizzasItem}
                    {/* <Picker.Item key={1} value={2} label="Calabresa" />
                    <Picker.Item key={2} value={2} label="Chocolate" />
                    <Picker.Item key={3} value={3} label="Frango" />
                    <Picker.Item key={4} value={4} label="Queijo" />
                    <Picker.Item key={5} value={5} label="Carne" /> */}

                </Picker>
                <Text style={styles.pizza}>Voce escolheu: { this.state.listaPizza[this.state.pizzaSelecionada].label }</Text>
                <Text> {this.state.pizza} </Text>
                <Text style={styles.pizza}>Preço: {this.state.listaPizza[this.state.pizzaSelecionada].preco}</Text>
                <Text style={styles.pizza}>{this.state.pizzaSelecionada}</Text>
            </View >
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
        fontSize: 28
    },
    pizza: {
        marginTop: 15,
        fontSize: 28,
        textAlign: 'center'
    },


})

export default App;
