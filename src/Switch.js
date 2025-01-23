import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {

    constructor(props) {
        super()
        this.state = {
            boolean: true,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Switch value={this.state.boolean}
                onValueChange={(valorSelecionado)=>{
                    this.setState({boolean: valorSelecionado})
                }}
                //cor bolinha
                thumbColor={"red"}
                />
                <Text >{this.state.boolean ? "ativo" : "inativo"}</Text>
            </View >
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },

})

export default App;
