import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class Pessoa extends Component {
    render() {
        return (
            <View style={styles.areaPessoa}>
                
                
                <Text style={styles.pessoa}
                ///Pessoa já tem aquela propriedade data que passamos no component que recebe a pessoa, então já chamamos direto com o this.props.
                >Nome: {this.props.data.nome} </Text>
                <Text style={styles.pessoa}>Idade: {this.props.data.idade} </Text>
                <Text style={styles.pessoa}>Email: {this.props.data.email} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    areaPessoa: {
        backgroundColor: '#222',
        height: 200,
        marginBottom: 15,
    },
    pessoa: {
        color: 'white',
        fontSize: 20,
    }
})

export default Pessoa;