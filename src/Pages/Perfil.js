import { Text, TouchableOpacity, StyleSheet, ScrollView, Image, View } from 'react-native'
import React, { useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Header from '../Components/Header';

export default function Perfil() {

    const [foto, setFoto] = useState("");
    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [ddd, setDdd] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    

    return (
        <ScrollView contentContainerStyle={css.container}>
            <Header />
            <Image source={require("../../assets/perfilimg.png")} style={css.perfil} />
            <Text style={css.nomeInfo}>Nome Completo</Text>
            <Text style={css.info}>Júlia Menegassi Ferrer</Text>
            <View style={css.containerEdit}>
                <Text style={css.editar}>Editar</Text>
            </View>
            <Text style={css.nomeInfo}>Data de Nascimento</Text>
            <Text style={css.info}>08/11/2006</Text>
            <View style={css.containerEdit}>
                <Text style={css.editar}>Editar</Text>
            </View>
            <Text style={css.nomeInfo}>CPF</Text>
            <Text style={css.info}>462.834.648-82</Text>
            <View style={css.containerEdit}>
                <Text style={css.editar}>Editar</Text>
            </View>
            <Text style={css.nomeInfo}>Celular</Text>
            <Text style={css.info}>(14)98179-7852</Text>
            <View style={css.containerEdit}>
                <Text style={css.editar}>Editar</Text>
            </View>
            <Text style={css.nomeInfo}>E-mail</Text>
            <Text style={css.info}>julia.menegass159@gmail.com</Text>
            <View style={css.containerEdit}>
                <Text style={css.editar}>Editar</Text>
            </View>
            <TouchableOpacity style={css.btn}>
                <Text style={css.btnText}>Alterar Senha</Text>
                <Image source={require("../../assets/chave.png")} style={css.chave} />
            </TouchableOpacity>
        </ScrollView>
    )
}

const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#E5F7FF",
    },
    perfil: {
        width: "33%",
        resizeMode: "contain",
        marginRight: 3,
        marginTop: -80,
        marginBottom: -20
    },
    nomeInfo: {
        width: "90%",
        height: 50,
        marginBottom: 5,
        padding: 15,
        color: "#4E778B",
        fontSize: 15,

    },
    info: {
        width: "90%",
        height: 50,
        marginBottom: 5,
        padding: 15,
        fontSize: 15
    },
    btn: {
        width: "85%",
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#cde2ec"
    },
    btnText: {
        lineHeight: 45,
        textAlign: "center",
        fontSize: 14,
    },
    chave: {
        width: "10%"
    },
    containerEdit: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "red",
        marginLeft:250
    },
    editar: {
        marginTop: -60
    }
})