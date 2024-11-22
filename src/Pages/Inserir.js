import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

export default function Inserir() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function postUser() {
    fetch('http://10.133.22.24:5251/api/Users/CreateUser', {
      method: 'POST',
      body: JSON.stringify({
        userEmail: email,
        userPassword: senha,
        userName: nome,
      }),
      headers: {
          'content-type': 'application/json; charset=UTF-8'
      },
    })
    .then((response) => response.json())
    .then((json) => console.log( json ));
  }

  return (
    <View style={css.container}>
      <Image style={css.img} source={require('../../assets/logo.png')}/>
      <TextInput
        inputMode='text'
        placeholder='Nome Completo'
        style={css.input}
        value={nome}
        onChangeText={(digitado) => setNome(digitado)}
        placeholderTextColor='white'
      />
      <TextInput
        inputMode='email'
        placeholder='Email'
        style={css.input}
        value={email}
        onChangeText={(digitado) => setEmail(digitado)}
        placeholderTextColor='white'
      />
      <TextInput
        inputMode='text'
        placeholder='Senha'
        secureTextEntry={true}
        style={css.input}
        value={senha}
        onChangeText={(digitado) => setSenha(digitado)}
        placeholderTextColor='white'
      />
      <TouchableOpacity style={css.btnCreate} onPress={postUser}>
        <Text style={css.btnLoginText}>CADASTRAR USUÁRIO</Text>
      </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: '85%',
    height: 45,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#353535',
    borderRadius: 7,
    padding: 15,
    backgroundColor:'#292929',
    color:'white'
  },
  btnCreate: {   
    paddingTop: 10,
    backgroundColor: '#089CFF',
    width: 350,
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 7,
  },
  btnLoginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  img: {
    width: '50%',
    height: 75,
    marginBottom: 20
},
})