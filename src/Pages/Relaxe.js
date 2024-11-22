import React, { useState } from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import Header from './Header';
import GuiaMeditacao from '../Components/GuiaMeditacao';

export default function Relaxe() {
  const [guia, setGuia] = useState(false);

  if (guia) {
    return (<GuiaMeditacao setGuia={setGuia} />)
}


  return (
    <View style={css.cor}>
      <StatusBar backgroundColor="#e5f7ff" />
      <Header />
      <View style={css.container}>
        <Text style={css.relaxe}>Relaxe</Text>
      </View>
      <View style={css.boxFrase}>
        <Text style={css.frase}>Hora de relaxar! Aqui, você encontrará diferentes métodos que podem ser praticados diariamente para melhorar sua saúde mental e bem-estar,
          ajudando a reduzir a ansiedade, equilibrar o humor e aumentar o foco.</Text>
      </View>
      <View style={css.boxBotao}>
        <TouchableOpacity style={css.botao} onPress={() => setGuia(true)}>
          <Image source={require("../../assets/emoji-meditacao.png")} style={css.meditacao} />
          <Text style={css.botaoTexto}>Guias de Meditação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.botao}>
          <Image source={require("../../assets/emoji-musica.png")} style={css.musica} />
          <Text style={css.botaoTexto}>Músicas e Sons Relaxantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.botao}>
          <Image source={require("../../assets/emoji-respiracao.png")} style={css.respiracao} />
          <Text style={css.botaoTexto}>Respire Fundo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
  relaxe: {
    fontSize: 19,
    color: "#4E778B"
  },
  boxFrase: {
    width: "100%",
    display: "flex",
    height: 200,
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
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 80
  },
  botao: {
    width: "75%",
    height: 50,
    borderRadius: 6,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1
  },
  meditacao: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 35,
    top: 5,
    resizeMode: "cover",
  },
  musica: {
    width: 35,
    height: 35,
    position: "absolute",
    left: 38,
    top: 8,
    resizeMode: "cover",
  },
  respiracao: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 35,
    top: 5,
    resizeMode: "cover",
  },
  boxBotao: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  }
})
