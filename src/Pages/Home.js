import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Header from './Header';


export default function Home() {

  return (
    <ScrollView contentContainerStyle={css.container}>
      <Header />
      <Text style={css.ola}>Olá,</Text>
      <Text style={css.cliente}>Cliente!</Text>
        <TouchableOpacity style={css.dateButton}>
          <Text style={css.dateText}>01/01</Text>
        </TouchableOpacity>
      <Text style={css.sentimentoText}>Como está se sentindo hoje?</Text>
      <Text style={css.boxx}></Text>
      <TouchableOpacity style={css.boxEnviar}>
        <Text style={css.enviarText}>Enviar</Text>
      </TouchableOpacity>
      <Text style={css.consultaText}>Agende uma consulta para começar sua jornada de cuidado emocional. Escolha o profissional que melhor se adapta às suas necessidades, selecione o horário conveniente, e prepare-se para uma sessão focada em seu bem-estar mental.</Text>
      <TouchableOpacity style={css.boxAgendar}>
        <Text style={css.agendarText}>Agendar Consulta</Text>
      </TouchableOpacity>
      
    </ScrollView>
)
}

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#E5F7FF",
  },
  ola: {
    fontSize: 22,
    marginLeft: 30
  },
  cliente: {
    fontSize: 22,
    marginLeft: 30,
    fontWeight: "bold"
  },
  dateButton: {
    width: "20%",
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 290,
    marginTop: -50
  }, 
  dateText: {
    fontSize: 18,
    padding: 16,
    paddingTop: 8,
  },
  sentimentoText: {
    fontSize: 17,
    paddingBottom: 30,
    paddingTop: 40,
    marginLeft: 30
  },
  boxSentimento: {
    backgroundColor: 20
  },
  boxx: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    height: 320,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 30,
  },
  consultaText: {
    width: "90%",
    paddingLeft: 20,
    marginLeft: 12,
    marginTop: 20
  },
  boxEnviar: {
    backgroundColor: "#c1d9e3",
    width: "20%",
    height: 38,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 297
  },
  enviarText: {
    paddingLeft: 19,
    padding: 8,
    fontSize: 16,
    color: "#4E778B"
  },
  emojis: {
    width: "100%",
    height: 2
  },
  boxAgendar: {
    width: "40%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
    borderColor: "#4E778B",
    marginLeft: 118
  },
  agendarText: {
    padding: 14,
    fontSize: 15,
    paddingLeft: 20,
    color: "#4E778B",
  }
})