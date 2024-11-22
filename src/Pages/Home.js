import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../Components/Header';

export default function Home() {
  const [isSelected, setSelection] = useState(false);
  
  return (
    <ScrollView contentContainerStyle={css.container}>
      <Header />
      <Text style={css.ola}>Olá,</Text>
      <Text style={css.cliente}>Cliente!</Text>
        <TouchableOpacity style={css.dateButton}>
          <Text style={css.dateText}>01/01</Text> 
        </TouchableOpacity>
      <Text style={css.sentimentoText}>Como está se sentindo hoje?</Text>
      <View style={css.containerBox}>
      <View style={css.box}>
        <View style={css.row}>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/feliz.png")} style={css.emoji} />
            <Text style={css.label}>Feliz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/animado.png")} style={css.emoji}  />
            <Text style={css.label}>Animado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/tranquilo.png")} style={css.emoji}  />
            <Text style={css.label}>Tranquilo</Text>
          </TouchableOpacity>
        </View>
        <View style={css.row}>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/triste.png")} style={css.emoji} />
            <Text style={css.label}>Triste</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/cansado.png")} style={css.emoji} />
            <Text style={css.label}>Cansado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/ansioso.png")} style={css.emoji} />
            <Text style={css.label}>Ansioso</Text>
          </TouchableOpacity>
        </View>
        <View style={css.row}>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/estressado.png")} style={css.emoji} />
            <Text style={css.label}>Estressado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/frustrado.png")} style={css.emoji} />
            <Text style={css.label}>Frustrado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.item}>
            <Image source={require("../../assets/apatico.png")} style={css.emoji} />
            <Text style={css.label}>Apático</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

      <TouchableOpacity style={css.boxEnviar}>
        <Text style={css.enviarText}>Enviar</Text>
      </TouchableOpacity>
      <Text style={css.termometroEmocional}>Termômetro emocional</Text>
      <View style={css.containerStyle}>
      <Image source={require("../../assets/feliz.png")} style={css.emojis} />
      <Image source={require("../../assets/animado.png")} style={css.emojis} />
      <Image source={require("../../assets/tranquilo.png")} style={css.emojis} />
      <Image source={require("../../assets/triste.png")} style={css.emojis} />
      <Image source={require("../../assets/frustrado.png")} style={css.emojis} />
      <Image source={require("../../assets/estressado.png")} style={css.emojis} />
      </View>
      <View style={css.containerNumber}>
        <Text style={css.porcentagem}>50%</Text>
        <Text style={css.porcentagem}>0%</Text>
        <Text style={css.porcentagem}>0%</Text>
        <Text style={css.porcentagem}>0%</Text>
        <Text style={css.porcentagem}>0%</Text>
        <Text style={css.porcentagem}>0%</Text>
      </View>
      <View style={css.linha}>
      </View>
      <Text style={css.consultaText}>Agende uma consulta para começar sua jornada de cuidado emocional. Escolha o profissional que melhor se adapta às suas necessidades, selecione o horário conveniente, e prepare-se para uma sessão focada em seu bem-estar mental.</Text>
      <TouchableOpacity style={css.boxAgendar}>
        <Text style={css.agendarText}>Agendar Consulta</Text>
      </TouchableOpacity>
      <View style={css.linha}>
      </View>
      <Text style={css.tempo}>Gerencie Seu tempo</Text>
      <Text style={css.tempoText}>Planeje sua rotina diariamente</Text>
      <View style={css.boxTempo}>
        <TouchableOpacity style={css.boxTarefa}>
          <Text style={css.tarefaText}>+   Adicionar Tarefa</Text>
      </TouchableOpacity>
      <View style={css.textBox}>
      <Text style={css.textTarefa}>Escovar os dentes</Text>
      <Text style={css.textTarefa}>Limpar a casa</Text>
      </View>
      <View style={css.checkboxContainer}>
        <Pressable style={[css.checkbox, { backgroundColor: isSelected ? "#7399AB" : "white" }]} onPress={() => setSelection(current => !current)}>
          {isSelected && <MaterialCommunityIcons name="check" color="white" size={17}/>}
        </Pressable>
        <Pressable style={[css.checkbox, { backgroundColor: isSelected ? "#7399AB" : "white" }]} onPress={() => setSelection(current => !current)}>
          {isSelected && <MaterialCommunityIcons name="check" color="white" size={17}/>}
        </Pressable>
      </View>
      </View>
      <View style={css.linha}></View>
      <View style={css.containerFonte}>
      <View style={css.educationalSection}>
        <Text style={css.sectionTitle}>Fontes Educacionais</Text>
      </View>
        <View style={css.artigos}>
        <Text style={css.artigosText}>Artigos</Text>
        <View style={css.contentWrapper}>
          <TouchableOpacity style={css.arrowButton}>
            <Text style={css.arrowText}>{"<"}</Text>
          </TouchableOpacity>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={css.card}></View>
            <View style={css.card}></View>
            <View style={css.card}></View>
          </ScrollView>
          <TouchableOpacity style={css.arrowButton}>
            <Text style={css.arrowText}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </ScrollView>
)
}

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#E5F7FF",
    display: "flex"
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
    padding: 10,
    paddingTop: 8,
    marginLeft: 8
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
  containerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: "85%",
    height: 320,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  item: {
    width: 70,
    height: 70,
    borderRadius: 3,
    backgroundColor: "#e0e6e9",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    width: "45%",
    height: 30

  },
  label: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  consultaText: {
    width: "90%",
    paddingLeft: 20,
    marginLeft: 12,
    marginTop: 15
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
  termometroEmocional: {
    width: "70%",
    height: 50,
    marginTop: 20,
    marginLeft: 30,
    fontSize: 17
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
  },
  emojis: {
    width: 34,
    height: 34,
    marginLeft: 30
  }, 
  linha: {
    height: 1, 
    backgroundColor: '#bbc7cd', 
    marginVertical: 10, 
    marginTop: 20
  },
  tempo: {
    width: "100%",
    height: 50,
    marginTop: 20,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold"
  },
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%"
  },
  containerNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginLeft: 28,
  }, 
  porcentagem: {
    width: 35,
    height: 37.8,
    marginRight: 25,
    fontSize: 15,
    marginLeft: 6
  }, 
  tempoText: {
    width: "100%",
    fontSize: 17,
    marginLeft: 90,
    marginTop: -15
  },
  boxTempo: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    height: 320,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 30,
    marginTop: 20
  },
  boxTarefa: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 16,
    marginLeft: 16,
    borderColor: "#4E778B"
  },
  tarefaText: {
    fontSize: 15,
    paddingTop: 12,
    color: "#4E778B",
    paddingLeft: 20
  },
  checkboxContainer: {
    width: "10%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginTop: -56,
    marginLeft: 10
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: 'center',
    borderRadius: 3,
  },
  textBox:{
    width: "80%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginLeft: 60,
    marginTop: 30
  },
  textTarefa: {
    fontSize: 15,
  },
  fonte: {
    width: "100%",
    height: 50,
    marginTop: 20,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold"
  },
  containerFonte: {
    flex: 1,
    
  },
  educationalSection: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  arrowText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  artigos: {
    display: "flex",
    alignItems: "center",
  },
  artigosText: {
    fontSize: 17,
    paddingRight: 270,
    marginBottom: 10
  }
})