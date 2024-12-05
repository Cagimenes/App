import { useState } from 'react';
import { Pressable, StatusBar, TouchableOpacity } from 'react-native';
import { View, StyleSheet, Image} from 'react-native'

export default function Header({setDiario, navigation}) {

  return (
    <View style={css.header}>
      <Pressable onPress={() => navigation.navigate( "Home" ) }>
        <Image source={require('../../assets/logo.png')} style={css.logo}  />
      </Pressable>
      
      <TouchableOpacity style={css.diario} onPress={() => setDiario(true)}>
        <Image source={require('../../assets/boxDiario.png')} style={css.diarioImage} />
      </TouchableOpacity>
    </View>
  );
}

const css = StyleSheet.create({
  header: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  logo: {
    width: 280,
    height: 200,
    resizeMode: 'contain',
    zIndex: 99
  },
  diario: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    backgroundColor: '#4E778B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22
  },
  diarioImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});