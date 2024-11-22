import React, { useState } from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import Header from '../Components/Header';
import SonoHoras from '../Components/SonoHoras';

export default function Sono() {

  const [ opcao, setOpcao ] = useState();
  const [proximo, setProximo] = useState(false);

  if (proximo) {
    return (<SonoHoras setProximo={setProximo} />)
}

  return (
    <View style={css.cor}>
      <StatusBar backgroundColor="#e5f7ff" />
      <Header />
      <View style={css.container}>
      <Text style={css.sono}>Sono</Text>
      </View>
      <View style={css.boxFrase}>
        <Text style={css.frase}>Como você dormiu na noite do dia 01/01/2024?</Text>
      </View>
      <View style={css.boxBotao}>
        <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Muito bem" ? "#4E778B" : "white"}]} onPress={() => setOpcao( "Muito bem" )}>
          <Text style={[css.botaoTexto, { color: opcao == "Muito bem" ? "white" : "black"}]} onPress={() => setOpcao( "Muito bem" )}>Muito bem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Bem" ? "#4E778B" : "white"}]} onPress={() => setOpcao( "Bem" )}>
          <Text style={[css.botaoTexto, { color: opcao == "Bem" ? "white" : "black"}]} onPress={() => setOpcao( "Bem" )}>Bem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Nem bem, nem mal" ? "#4E778B" : "white"}]} onPress={() => setOpcao( "Nem bem, nem mal" )}>
          <Text style={[css.botaoTexto, { color: opcao == "Nem bem, nem mal" ? "white" : "black"}]} onPress={() => setOpcao( "Nem bem, nem mal" )}>Nem bem, nem mal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Mal" ? "#4E778B" : "white"}]} onPress={() => setOpcao( "Mal" )}>
          <Text style={[css.botaoTexto, { color: opcao == "Mal" ? "white" : "black"}]} onPress={() => setOpcao( "Mal" )}>Mal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[css.botao, { backgroundColor: opcao == "Muito mal" ? "#4E778B" : "white"}]} onPress={() => setOpcao( "Muito mal" )}>
          <Text style={[css.botaoTexto, { color: opcao == "Muito mal" ? "white" : "black"}]} onPress={() => setOpcao( "Muito mal" )}>Muito mal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.proximo} onPress={() => setProximo(true)}>
          <Text style={css.seta}>➜</Text>
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
    height: 100,
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
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1
  },
  boxBotao: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  }, 
  proximo: {
    width: "15%",
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#4E778B",
    left: 123
  },
  seta: {
    color: "white",
    textAlign: "center",
    top: 5,
    fontSize: 20
  }
})

