import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={css.header}>
        <Image source={require('../../assets/logo.png')} style={css.logo} />
        <Image source={require('../../assets/boxDiario.png')} style={css.diario} />
    </View>
    );
}; 

const css = StyleSheet.create({
    header: {
        width: "100%",
        height: 170,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
      },
      logo: {
        width: 295, 
        height: 200,
        marginRight: 50,
        resizeMode: 'contain',

      },
      logoSecundaria: {
        width: 150,
        height: 150,
        marginLeft: -120,
        marginRight: 40,
        resizeMode: 'contain',
      },
      diario: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#4E778B', 
        justifyContent: 'center',
        marginRight: 32
      },
})