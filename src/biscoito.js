import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
            img: require('./assets/biscoito-fechado.jpg'),
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
        this.reset = this.reset.bind(this);
        this.frases = [
            'Frase 1',
            'Frase 2',
            'Frase 3',
            'Frase 4',
            'Frase 5',
            'Frase 6',
        ];
    }

    quebraBiscoito() {
        let numeroaleatorio = Math.floor(Math.random() * this.frases.length);

        this.setState({
            textoFrase: '" ' + this.frases[numeroaleatorio] + ' "',
            img: require('./assets/biscoito-aberto.jpg'),
        })
    }

    reset() {
        this.setState({
            img: require('./assets/biscoito-fechado.jpg'),
            textoFrase: '',
        })
    }

    render() {

        return (
            <View style={styles.conteiner}>

                <Image style={styles.img} source={this.state.img} />

                <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
                <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>
                            Abrir biscoito
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={this.reset}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Reset</Text>
                    </View>
                </TouchableOpacity>
            </View >


        )
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        with: 250,
        height: 250,
        resizeMode: 'center',
    },

    textoFrase: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#dd7b22',
        margin: 30,
        textAlign: 'center',

    },
    botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
        marginTop: 20,
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22',
    }
});

export default App;
