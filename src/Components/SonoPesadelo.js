import React, { useState } from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import Header from './Header';

export default function SonoPesadelo({ setProximoPesadelo }) {

    const [opcao, setOpcao] = useState();

    return (
        <View style={css.cor}>
            <StatusBar backgroundColor="#e5f7ff" />
            <Header />
            <View style={css.container}>
                <Text style={css.sono}>Sono</Text>
            </View>
            <View style={css.boxFrase}>
                <Text style={css.frase}>Obteve pesadelos na noite do dia 01/01/2024?</Text>
            </View>
            <View style={css.boxBotao}>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Nenhum pesadelo" ? "#4E778B" : "white" }]} onPress={() => setOpcao("Nenhum pesadelo")}>
                    <Text style={[css.botaoTexto, { color: opcao == "Nenhum pesadelo" ? "white" : "black" }]} onPress={() => setOpcao("Nenhum pesadelo")}>Nenhum pesadelo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Sim, pesadelo leve" ? "#4E778B" : "white" }]} onPress={() => setOpcao("Sim, pesadelo leve")}>
                    <Text style={[css.botaoTexto, { color: opcao == "Sim, pesadelo leve" ? "white" : "black" }]} onPress={() => setOpcao("Sim, pesadelo leve")}>Sim, pesadelo leve</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Sim, pesadelo moderado" ? "#4E778B" : "white" }]} onPress={() => setOpcao("Sim, pesadelo moderado")}>
                    <Text style={[css.botaoTexto, { color: opcao == "Sim, pesadelo moderado" ? "white" : "black" }]} onPress={() => setOpcao("Sim, pesadelo moderado")}>Sim, pesadelo moderado</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Sim, pesadelo intenso" ? "#4E778B" : "white" }]} onPress={() => setOpcao("Sim, pesadelo intenso")}>
                    <Text style={[css.botaoTexto, { color: opcao == "Sim, pesadelo intenso" ? "white" : "black" }]} onPress={() => setOpcao("Sim, pesadelo intenso")}>Sim, pesadelo intenso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Não me lembro" ? "#4E778B" : "white" }]} onPress={() => setOpcao("Não me lembro")}>
                    <Text style={[css.botaoTexto, { color: opcao == "Não me lembro" ? "white" : "black" }]} onPress={() => setOpcao("Não me lembro")}>Não me lembro</Text>
                </TouchableOpacity>
                <View style={css.boxSetas}>
                    <TouchableOpacity style={css.voltar} onPress={() => setProximoPesadelo(false)}>
                        <Text style={css.setaVoltar}>➜</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.concluir}>
                        <Text style={css.textConcluir}>Concluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    cor: {
        backgroundColor: "#e5f7ff",
        alignItems: "center",
    },
    sono: {
        fontSize: 19,
        color: "#4E778B"
    },
    boxFrase: {
        width: "100%",
        display: "flex",
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    frase: {
        width: "80%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15.7
    },
    botaoTexto: {
        color: "black",
        lineHeight: 50,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    botao: {
        width: "75%",
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderWidth: 1
    },
    boxBotao: {
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    voltar: {
        width: "20%",
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#4E778B",
    },
    setaVoltar: {
        color: "white",
        textAlign: "center",
        top: 5,
        fontSize: 20,
        transform: [{ scaleX: -1 }],
    },
    concluir: {
        width: "30%",
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#4E778B",
    },
    textConcluir: {
        color: "white",
        textAlign: "center",
        top: 10,
        fontSize: 15,
    },
    boxSetas: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
