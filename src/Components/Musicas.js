import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Button, Pressable, SectionList } from 'react-native'
import Header from './Header';
import MusicaLista from './MusicaLista';

export default function Musicas({setMusica}) {
    const lista = [
        {
          data: [
            {
              id: 1,
              nome: "Weightless - Marconi Union",
              imagem: require("../../assets/Weightless - Marconi Union.jpg"),
              botao: require("../../assets/botao-play.png")
            },
          ]
        },
        {
          data: [
            {
              id: 2,
              nome: "Weightless - Marconi Union",
              imagem: require("../../assets/Weightless - Marconi Union.jpg"),
              botao: require("../../assets/botao-play.png")
            },
          ]
        },
        {
          data: [
            {
              id: 3,
              nome: "Weightless - Marconi Union",
              imagem: require("../../assets/Weightless - Marconi Union.jpg"),
              botao: require("../../assets/botao-play.png")
            },
          ]
        },
        {
          data: [
            {
              id: 4,
              nome: "Weightless - Marconi Union",
              imagem: require("../../assets/Weightless - Marconi Union.jpg"),
              botao: require("../../assets/botao-play.png")
            },
          ]
        },
        {
            data: [
              {
                id: 5,
                nome: "Weightless - Marconi Union",
                imagem: require("../../assets/Weightless - Marconi Union.jpg"),
                botao: require("../../assets/botao-play.png")
              },
            ]
          },
          {
            data: [
              {
                id: 6,
                nome: "Weightless - Marconi Union",
                imagem: require("../../assets/Weightless - Marconi Union.jpg"),
                botao: require("../../assets/botao-play.png")
              },
            ]
          },
          {
            data: [
              {
                id: 7,
                nome: "Weightless - Marconi Union",
                imagem: require("../../assets/Weightless - Marconi Union.jpg"),
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
            <Text style={css.relaxe} onPress={ () => setMusica( false )}>Relaxe</Text>
            <Text style={css.btnVoltar} onPress={ () => setMusica( false )}> ˃ </Text>
            <Text style={css.relaxe}>Músicas e Sons Relaxantes</Text>
          </View>
          <SectionList
            sections={lista}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <MusicaLista
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
