import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         nome: 'Fernando'
    //     };

    //     this.entrar = this.entrar.bind(this);
    // }

    // entrar(nome){
    //     this.setState({
    //         nome: nome
    //     })
    // }

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            input: '',
        }
        // this.pegaNome = this.pegaNome.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    // pegaNome(texto){
    //     if(texto.length > 0){

    //         this.setState({nome: texto});
    //     }else{
    //         this.setState({nome: ''})
    //     }
    // }

    entrar() {
this.setState({name: 'Bem Vindo '+this.state.input })
    }

    render() {

        return (
            <View style={styles.conteiner}>
                <TextInput style={styles.input} placeholder="Digite seu nome"
                    underlineColorAndroid='transparent' onChangeText={(texto) => this.setState({input: texto})}
                ></TextInput>

                <Button title="Entrar" onPress={this.entrar} />
                <Text style={styles.texto}>Bem vindo {this.state.nome}</Text>
            </View >


        )
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        fontSize: 20,
        padding: 10,
        margin: 10
    },
    texto: {
        textAlign: 'center',
        fontSize: 25
    }
});

export default App;
