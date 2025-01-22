import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Pessoa from './Pessoa'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, nome: 'Fernando', idade: 50, email: 'f@f.com' },
                { id: 2, nome: 'João', idade: 23, email: 'j@j.com' },
                { id: 3, nome: 'Henrique', idade: 15, email: 'h@h.com' },
                { id: 4, nome: 'Matheus', idade: 45, email: 'm@m.com' },
                { id: 5, nome: 'Lucas', idade: 30, email: 'l@l.com' },
            ]
        };
    }

    render() {

        return (
            <View style={styles.conteiner}>
                <FlatList
                    //lista de itens que vao entrar na lista
                    data={this.state.feed}
                    //caso não exista pk/////tem que vir antes do render
                    // keyExtractor={({item}) => item.id}
                    //ele quem vai mostrar os itens
                    renderItem={({ item }) =>
                        //passo o atributo que quero que Pessoa receba
                        <Pessoa data={item} />}
                />
            </View >


        )
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1
    },
});

export default App;
