import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Diario({ setDiario }) {
  const [textoDiario, setTextoDiario] = useState('');

  return (
    <View style={css.container}>
      <View style={css.containerDiario}>
        <Image source={require("../../assets/loguinho.png")} style={css.logo} />
        <Text style={css.diario}>Diário</Text>
      </View>
      <View style={css.containerVoltar}>
        <TouchableOpacity style={css.btnVoltar} onPress={() => setDiario(null)}>
          <Text style={css.voltar}>˂</Text>
        </TouchableOpacity>
      </View>
      <View style={css.containerDia}>
        <Text style={css.dia}>01 de Janeiro de 2024</Text>
      </View>
      <View>
        <Text style={css.text}>Pause e desabafe. Este é um espaço confortável para registrar suas emoções diárias.</Text>
      </View>
      <TextInput
        style={css.escrever}
        placeholder="Escreva aqui suas emoções..."
        placeholderTextColor="black"
        value={textoDiario}
        onChangeText={setTextoDiario}
      />
      <TouchableOpacity style={css.concluir} onPress={() => alert('Texto salvo!')}>
        <Text style={css.textConcluir}>Concluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#E5F7FF",
  },
  containerDiario: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25
  },
  diario: {
    color: "#4e778b",
    fontSize: 22,
    marginTop: 8,
    marginLeft: 115
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: -150
  },
  containerDia: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    flexDirection: "row"
  },
  dia: {
    fontSize: 16,
    color: "#4e778b",
    marginTop: 10
  },
  text: {
    width: "90%",
    marginLeft: 20,
    fontSize: 16,
    marginTop: 30,
  },
  escrever: {
    width: "90%",
    marginLeft: 20,
    height: 525,
    backgroundColor: "white",
    marginTop: 28,
    borderWidth: 0.8,
    padding: 10,
    textAlignVertical: 'top',
  },
  concluir: {
    width: "25%",
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#c1d9e3",
    marginLeft: "auto",
    marginRight: 20,
  },
  textConcluir: {
    color: "#4E778B",
    textAlign: "center",
    top: 10,
    fontSize: 15,
  },
  containerVoltar: {
    alignItems: "center",
    flexDirection: "row"
  },
  btnVoltar: {
    marginBottom: -85,
    marginLeft: 30
  },
  voltar: {
    fontSize: 30,
    color: "#4E778B"
  }
});