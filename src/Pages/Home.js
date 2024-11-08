import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Header from './Header';


export default function Home() {

  return (
    <View style={css.container}>
      <Text style={css.ola}>Olá,</Text>
      <Text style={css.cliente}>Cliente!</Text>
      <TouchableOpacity style={css.dateButton}>
        <Text style={css.dateText}>01/01</Text>
      </TouchableOpacity>
      <Text style={css.mapaText}>Mapa mensal</Text>
      <Text style={css.termometroText}>Termômetro Emocional</Text>
      <Image source={require("../../assets/emojis.png")} style={css.emojis} />
      <Text style={css.porcentagem}>50%</Text>
      <Text style={css.porcentagem}>0%</Text>
      <Text style={css.porcentagem}>0%</Text>
      <Text style={css.porcentagem}>0%</Text>
      <Text style={css.porcentagem}>0%</Text>
      <Text style={css.porcentagem}>0%</Text>
      <Text style={css.consultaText}>Agende uma consulta para começar sua jornada de cuidado emocional. Escolha o profissional que melhor se adapta às suas necessidades, selecione o horário conveniente, e prepare-se para uma sessão focada em seu bem-estar mental.</Text>
      <Text style={css.agendar}>Agendar Consulta</Text>
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
    backgroundColor: "#E5F7FF",
  },
  ola: {
    width: "20%",
    height: 50,
    fontSize: 20,
    marginTop: -500,
    paddingTop: 20,
    marginLeft: -240
  },
  cliente: {
    width: "20%",
    height: 50,
    fontSize: 20,
    paddingBottom: 14,
    marginLeft: -240,
    fontWeight: "bold"
  },
  mapaText: {
    width: "30%",
    height: 40,
    fontSize: 17,
    marginLeft: -200,
    paddingTop: 12,
  },
  dateButton: {
    width: "19%",
    height: 45,
    borderRadius: 5,
    marginRight: -200,
    marginTop: -70,
    borderWidth: 1
  },
  dateText: {
    padding: 10,
    paddingLeft: 17,
    fontSize: 17,
  },
  termometroText: {
    width: "80%",
    fontSize: 17
  },
  emojis: {
    width: "80%",
    height: 30,
    marginTop: 15
  },
  porcentagem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  }
});
