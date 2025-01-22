import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Fernando'
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(nome) {
        this.setState({
            nome: nome
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            input: '',
        };
        // this.pegaNome = this.pegaNome.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    pegaNome(texto) {
        if (texto.length > 0) {

            this.setState({ name: texto });
        } else {
            this.setState({ name: '' })
        }
    }

    entrar() {
        if (this.state.input === '') {
            alert('Digite seu nome');
        } else {

            this.setState({ name: 'Bem Vindo ' + this.state.input });
        }
    }
}
const styles = StyleSheet.create({

    // input: {
    //     height: 45,
    //     borderWidth: 1,
    //     borderColor: '#222',
    //     fontSize: 20,
    //     padding: 10,
    //     margin: 10
    // },
    // texto: {
    //     textAlign: 'center',
    //     fontSize: 25
    // }
});

export default App;
