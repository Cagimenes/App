import React from 'react'
import { View, Image, StyleSheet } from 'react-native'


export default function Header2() {
  return (
    <View style={css.header2}>
      <Image source={require('../../assets/loguinho.png')} style={css.logo2} />
    </View>
  );
}
const css = StyleSheet.create({
  header2: {
    width: '100%',
    backgroundColor: "#a2bfcc",
    alignItems: 'center',
    justifyContent: "center",
    height: 110
  },
  logo2: {
    width: 40,
    height:40,
    marginTop: 20
  }
  });