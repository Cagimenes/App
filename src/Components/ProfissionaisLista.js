import React, { useContext, useState } from 'react'
import { Text, View, Pressable, StyleSheet, Image } from 'react-native'
import { AuthContext } from '../Context/AuthContext'

export default function ProfissionaisLista({ item, setProfissional, foto, nome, especialidade, perfil, botao, setProfissionais }) {

  const {setProfissionalSelecionado} = useContext( AuthContext );

  return (
    <View style={css.container}>
      <View style={css.imgBox}>
        <Image style={css.img} source={foto} />
      </View>
      <View style={css.descricao}>
        <Text style={css.nome}>{nome}</Text>
        <Text style={css.especialidade}>Especialidade:  {especialidade}</Text>
        <Text style={css.perfil} onPress={() => { setProfissional( item ); setProfissionalSelecionado( item.id ) } }>Ver perfil completo</Text>
      </View>
      <Pressable style={css.botao} >
        <Text style={css.botaoText}>{botao}</Text>
      </Pressable>
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    width: 395,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  imgBox: {
    margin: 0
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 80,
    borderWidth: 7,
    borderBlockColor: "#4E778B",
    resizeMode: "cover",
  },
  descricao: {
    width: 200,
    left: 10
  },
  nome: {
    fontSize: 17,
    color: '#000',
    fontWeight: "bold"
  },
  especialidade: {
    fontWeight: "bold"
  },
  perfil: {
    color: "#4E778B"
  },
  botao: {
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#C1D0E3"
  },
  botaoText: {
    color: "#4E778B"
  },
})
