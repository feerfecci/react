import React, {
    //state
    useState, 
    //quando comeca
    useEffect, 
    //evita reenderizacao
    useMemo, 
    //passar uma ação para um elemento referencial
    useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

    const [nome, setNome] = useState('');
    const [input, setInput] = useState('');
    const nomeInput =useRef(null);

    // component DidMount. Usado para pegar Preferences
    async function getStorage() {
        const nomeGeted = await AsyncStorage.getItem('nomes');
        if (nomeGeted !== null) {
            setNome(nomeGeted);
        }else{}
    }
    useEffect(() => {
        getStorage();
        // return() => {

        // };
    }, []);


    //component DidUpdate. Usado para guarda Preferences
    useEffect(() => {

        async function saveStorage() {
            await AsyncStorage.setItem('nomes', nome);
        }
       
        saveStorage();
    }, [nome])

    function alteraNome() {
        setNome(input);
        setInput('');
    }

    
    ////quando clica faz uma ação com o elemente que foi referenciado por ref={}
    ////Ref usa também para Views,Texts, etc
    function novoNome() {
        nomeInput.current.focus();
    }

    ////useMemo serve para previnivir a atualição a cada letra input mais de uma vez
    const letrasNome = useMemo(()=>{
        return nome.length
    },[nome]);


    return (
        <View style={styles.conteiner}>
            <TextInput placeholder="Seu nome" value={input} onChangeText={(texto) => { setInput(texto) }}
            ref={nomeInput} />
            <TouchableOpacity style={styles.btn} onPress={alteraNome}>
                <Text style={styles.btnText}>Altera Nome</Text>
            </TouchableOpacity>
            <Text style={styles.texto}>{nome}</Text>
            <Text style={styles.texto}>Tem {letrasNome} letra(s)</Text>
            <TouchableOpacity style={styles.btn} onPress={novoNome}>
                <Text style={styles.btnText}>Novo Nome</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        marginTop: 30,
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
