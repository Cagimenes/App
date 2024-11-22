import React, { useState } from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import Header from './Header';
import SonoPesadelo from './SonoPesadelo';

export default function SonoHoras({ setProximo }) {
    const [opcao, setOpcao] = useState();
    const [proximoPesadelo, setProximoPesadelo] = useState(false);

    if (proximoPesadelo) {
        return (<SonoPesadelo setProximoPesadelo={setProximoPesadelo} />)
    }

    return (
        <View style={css.cor}>
            <StatusBar backgroundColor="#e5f7ff" />
            <Header />
            <View style={css.container}>
                <Text style={css.sono}>Sono</Text>
            </View>
            <View style={css.boxFrase}>
                <Text style={css.frase}>Quantas horas você dormiu na noite do dia 01/01/2024?</Text>
            </View>
            <View style={css.boxBotao}>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Menos que 6 horas" ? "#4E778B" : "white" }]} onPress={() => setOpcao("Menos que 6 horas")}>
                    <Text style={[css.botaoTexto, { color: opcao == "Menos que 6 horas" ? "white" : "black" }]} onPress={() => setOpcao("Menos que 6 horas")}>Menos que 6 horas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "6 horas" ? "#4E778B" : "white" }]} onPress={() => setOpcao("6 horas")}>
                    <Text style={[css.botaoTexto, { color: opcao == "6 horas" ? "white" : "black" }]} onPress={() => setOpcao("6 horas")}>6 horas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "7 horas" ? "#4E778B" : "white" }]} onPress={() => setOpcao("7 horas")}>
                    <Text style={[css.botaoTexto, { color: opcao == "7 horas" ? "white" : "black" }]} onPress={() => setOpcao("7 horas")}>7 horas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "8 horas" ? "#4E778B" : "white" }]} onPress={() => setOpcao("8 horas")}>
                    <Text style={[css.botaoTexto, { color: opcao == "8 horas" ? "white" : "black" }]} onPress={() => setOpcao("8 horas")}>8 horas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Mais que 8 horas" ? "#4E778B" : "white" }]} onPress={() => setOpcao("Mais que 8 horas")}>
                    <Text style={[css.botaoTexto, { color: opcao == "Mais que 8 horas" ? "white" : "black" }]} onPress={() => setOpcao("Mais que 8 horas")}>Mais que 8 horas</Text>
                </TouchableOpacity>
                <View style={css.boxSetas}>
                    <TouchableOpacity style={css.voltar} onPress={() => setProximo(false)}>
                        <Text style={css.setaVoltar}>➜</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.proximo} onPress={() => setProximoPesadelo(true)}>
                        <Text style={css.setaProximo}>➜</Text>
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
    proximo: {
        width: "20%",
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#4E778B",
    },
    setaProximo: {
        color: "white",
        textAlign: "center",
        top: 5,
        fontSize: 20,
    },
    boxSetas: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})