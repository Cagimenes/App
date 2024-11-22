import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Button, Pressable, SectionList } from 'react-native'
import Header from '../Components/Header';
import GuiaLista from './GuiaLista';

export default function GuiaMeditacao({setGuia}) {

  const lista = [
    {
      data: [
        {
          id: 1,
          nome: "Meditação Guiada 5 Minutos",
          imagem: require("../../assets/meditacaoGuiada5min.jpg"),
          botao: require("../../assets/botao-play.png")
        },
      ]
    },
    {
      data: [
        {
          id: 2,
          nome: "Meditação Guiada 5 Minutos",
          imagem: require("../../assets/meditacaoGuiada5min.jpg"),
          botao: require("../../assets/botao-play.png")
        },
      ]
    },
    {
      data: [
        {
          id: 3,
          nome: "Meditação Guiada 5 Minutos",
          imagem: require("../../assets/meditacaoGuiada5min.jpg"),
          botao: require("../../assets/botao-play.png")
        },
      ]
    },
    {
      data: [
        {
          id: 4,
          nome: "Meditação Guiada 5 Minutos",
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
        <Text style={css.relaxe} onPress={ () => setGuia( false )}>Relaxe</Text>
        <Text style={css.btnVoltar} onPress={ () => setGuia( false )}> ˃ </Text>
        <Text style={css.relaxe}>Guias de Meditação</Text>
      </View>
      <SectionList
        sections={lista}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <GuiaLista
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
  relaxe: {
    fontSize: 19,
    color: "#4E778B"
  },
  btnVoltar: {
    fontSize: 25,
    marginTop: 7,
    color: "#4E778B"
  },
})