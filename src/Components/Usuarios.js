import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Usuarios({username}) {
  return (
    <View style={css.container}>
        <Text style={css.nome}>{username}</Text>
    </View>
  )
}
const css = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    nome: {
        color: 'white'
    },
    avatar: {
        width: '15%',
        height: 60,
        backgroundColor: 'white',
        borderRadius: 100,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
})