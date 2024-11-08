import React, { useState } from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import Header from './Header';

export default function Sono() {

  return (
    <View style={css.cor}>
      <StatusBar backgroundColor="#e5f7ff" />
      <Header />
      <View style={css.container}>
      <Text style={css.sono}>Sono</Text>
      </View>
      <View style={css.boxFrase}>
        <Text style={css.frase}>Como você dormiu na noite do dia 08/11/2024?</Text>
      </View>
      <View style={css.boxBotao}>
        <TouchableOpacity style={css.botao}>
          <Text style={css.botaoTexto}>Muito bem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.botao}>
          <Text style={css.botaoTexto}>Bem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.botao}>
          <Text style={css.botaoTexto}>Nem bem, nem mal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.botao}>
          <Text style={css.botaoTexto}>Mal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.botao}>
          <Text style={css.botaoTexto}>Muito mal</Text>
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
  sono: {
    fontSize: 19,
    color: "#4E778B"
  },
  boxFrase: {
    width: "100%",
    display: "flex",
    height: 120,
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
    borderRadius: 6,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1
  },
  boxBotao: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  }, 

})

