import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function VideosLista({ nome, imagem, botao }) {
    return (
        <View style={css.container}>
            <Text style={css.nome}>{nome}</Text>
            <Image style={css.img} source={imagem} />
            <Pressable style={css.botao}>
                <Image style={css.botaoImg} source={botao} />
            </Pressable>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 250,
        alignItems: "center",
        position: 'relative',
        marginTop: 15
    },
    nome: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
        right: 135
    },
    descricao: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    img: {
        width: 360,
        height: 200,
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
        position: 'absolute',
        top: 80,
        left: 135,
    },
    botaoImg: {
        width: 80,
        height: 80
    }
})