import React from 'react'
import { View, Text, StyleSheet, StatusBar, SectionList } from 'react-native'
import Header from '../Components/Header';
import VideosLista from './VideosLista';

export default function Videos({setVideos}) {

  
  const lista = [
    {
      data: [
        {
          id: 1,
          nome: "Depressão",
          imagem: require("../../assets/meditacaoGuiada5min.jpg"),
          botao: require("../../assets/botao-play.png")
        },
      ]
    },
    {
      data: [
        {
          id: 2,
          nome: "Depressão",
          imagem: require("../../assets/meditacaoGuiada5min.jpg"),
          botao: require("../../assets/botao-play.png")
        },
      ]
    },
    {
      data: [
        {
          id: 3,
          nome: " Depressão",
          imagem: require("../../assets/meditacaoGuiada5min.jpg"),
          botao: require("../../assets/botao-play.png")
        },
      ]
    },
    {
      data: [
        {
          id: 4,
          nome: "Depressão",
          imagem: require("../../assets/meditacaoGuiada5min.jpg"),
          botao: require("../../assets/botao-play.png")
        },
      ]
    },
  ]

  return (
    <View style={css.cor}>
    <StatusBar backgroundColor="#e5f7ff" />
    <Header />
    <View style={css.container}>
      <Text style={css.videos} onPress={ () => setVideos( false )}>Fontes Educacionais</Text>
      <Text style={css.btnVoltar} onPress={ () => setVideos( false )}> ˃ </Text>
      <Text style={css.videos}>Vídeos</Text>
    </View>
    <SectionList
      sections={lista}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <VideosLista
          nome={item.nome}
          botao={item.botao}
          imagem={item.imagem}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
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
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  cor: {
    backgroundColor: "#e5f7ff",
    alignItems: "center",
    height: "100%"
  },
  videos: {
    fontSize: 19,
    color: "#4E778B"
  },
  btnVoltar: {
    fontSize: 25,
    marginTop: 7,
    color: "#4E778B"
  },
})