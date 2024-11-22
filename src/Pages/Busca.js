import { View, Text, StyleSheet, ActivityIndicator, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Usuarios from '../Components/Usuarios';

export default function Busca() {

  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");

  async function getUsuarios() {
    await fetch('https://fakestoreapi.com/users', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setUsuarios(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {

    const filtro = usuarios.filter((item) => item.name.firstname == busca);
    if (filtro.length > 0) {
      setUsuarios(filtro);
    }

    if (busca == "") {
      getUsuarios();
    }
  }, [busca]);

  return (
    <View style={css.container}>
      <View>
        <TextInput
          placeholderTextColor="#6C6C6C"
          placeholder='Pesquisar'
          style={css.input}
          TextInput={busca}
          onChangeText={(digitado) => setBusca(digitado)}
        />
        { busca != '' && <ActivityIndicator size='large'/> }
      </View>
      <MaterialCommunityIcons style={css.busca} name="magnify" color="#6C6C6C" size={23} />
      <View style={css.box}>
        <Text style={css.recente}>Recentes</Text>
        <Text style={css.ver}>Ver tudo</Text>
      </View>
      {usuarios.length > 0
        ? <FlatList
          data={usuarios}
          style={css.usuario}
          renderItem={({ item }) => <Usuarios username={item.username} />}
          keyExtractor={(item) => item.id}
        />
        : <ActivityIndicator size="large" color="white" />
      }
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
  text: {
    color: "white"
  },
  input: {
    width: 370,
    height: 40,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#353535',
    borderRadius: 7,
    paddingLeft: 37,
    backgroundColor: '#292929',
    color: '#C4C4C4',
    top: 50,
    fontSize: 17,
  },
  busca: {
    top: 59,
    left: 30,
    position: 'absolute',
    flex: 0.1,
    flexDirection: 'row',
  },
  box: {
    flexDirection: 'row',
    position: 'absolute',
    flex: 0.1,
    top: 105,
    left: 23
  },
  recente: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  ver: {
    color: '#089CFF',
    fontWeight: 'bold',
    marginLeft: 240
  },
  usuario: {
    marginTop: 80,
    marginLeft: -300
  }
})