import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Touchable, Alert } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'Começar',
            ultimo: null,
        };
        this.timer = null;
        this.comecar = this.comecar.bind(this);
        this.limpar = this.limpar.bind(this);
        this.volta = this.volta.bind(this);
    }

    comecar() {
        if (this.timer == null) {
            this.timer = setInterval(() => {
                this.setState({ numero: this.state.numero + 0.1 });
            }, 100);
            this.setState({ botao: 'Parar' });
        } else {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({ botao: 'Continuar' });
        }
    }

    limpar() {
        if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.setState({ numero: 0, botao: 'Começar',ultimo: null, });
    }

    volta(){
        this.setState({ultimo: this.state.numero})
    }


    render() {

        return (
            <View style={styles.conteiner}>
                <Image style={styles.cronometro} source={require('./assets/cronometro.png')} />


                <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.botao} onPress={this.comecar}>
                        <Text style={styles.btnText}>{this.state.botao}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={this.limpar}>
                        <Text style={styles.btnText}>limpar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.areaUltima}>
                    <TouchableOpacity style={[styles.botao, {flex:0,} ]} onPress={this.volta}>
                        <Text style={styles.btnText}>Volta</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.textoCorrida}>
                        {this.state.ultimo == null ? '' : 'Ultimo tempo: '+ this.state.ultimo.toFixed(1) +'s'}
                        </Text>
                </View>
            </View >


        )
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#00aeef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inside: {


    },
    cronometro: {
        width: 300,
        height: 300,
    },
    timer: {
        marginTop: -180,
        backgroundColor: '#00aeef',
        color: 'white',
        fontSize: 65,

    },

    btnArea: {
        flexDirection: 'row',
        marginTop: 100,
        height: 40,

    },
    botao: {
        minWidth:100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 40,
        margin: 17,
        borderRadius: 9,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00aeef',
    },

    areaUltima:{
        marginTop: 40,

    },
    textoCorrida:{
        fontSize: 25,
        fontStyle: 'italic',
        color: 'white',
    }
});

export default App;
