import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function MusicaLista({ nome, imagem, botao }) {
    return (
        <View style={css.container}>
            <Image style={css.img} source={imagem} />
            <Text style={css.nome}>{nome}</Text>
            <Image style={css.botaoImg} source={botao} />
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: 375,
        height: 60,
        alignItems: "center",
        marginTop: 15,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#4E778B",
        borderRadius: 13,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 20
    },
    nome: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
        top: 4
    },
    descricao: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 7,
        borderBlockColor: "#4E778B",
    },
    unidade: {
        fontWeight: 'bold',
        fontSize: 11
    },
    botao: {
        marginTop: 12,
    },
    botaoImg: {
        width: 40,
        height: 40,
    }
})
