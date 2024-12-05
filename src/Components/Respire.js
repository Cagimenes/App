import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Button, Pressable, SectionList, Dimensions } from 'react-native'
import Header from '../Components/Header';
import Animated, { ReduceMotion, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';

export default function Respire({ setRespire }) {
  const [etapa, setEtapa] = useState('inspire');

  useEffect(() => {
    const intervalo = setInterval(() => {
      setEtapa((atual) => (atual === 'inspire' ? 'expire' : 'inspire'));
    }, 4100);

    return () => clearInterval(intervalo);
  }, []);

  const scale = useSharedValue(0.10);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animation = () => {
    scale.value = withRepeat(
      withTiming(1.8, { duration: 4000 }),
      -1,
      true
    );
  };

  useEffect(() => {
    animation();
  }, [])

  return (
    <View style={css.cor}>
      <StatusBar backgroundColor="#e5f7ff" />
      <Header />
      <View style={css.container}>
        <Text style={css.relaxe} onPress={() => setRespire(false)}>Relaxe</Text>
        <Text style={css.btnVoltar} onPress={() => setRespire(false)}> ˃ </Text>
        <Text style={css.relaxe}>Respire Fundo</Text>
      </View>
      <View style={css.circuloContainer}>
        <View style={css.circulo}></View>
        <Animated.View style={[css.circuloAcima, animatedStyle]}></Animated.View>
      </View>
      <View style={css.frase}>
        <Text
          style={[
            css.textoRespiracao,
            etapa === 'inspire' ? css.ativo : css.inativo,
          ]}
        >
          Inspire
        </Text>
        <Text
          style={[
            css.textoRespiracao,
            etapa === 'expire' ? css.ativo : css.inativo,
          ]}
        >
          Expire
        </Text>
      </View>
    </View>
  );
}
const css = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  cor: {
    backgroundColor: "#e5f7ff",
    alignItems: "center",
    height: "100%"
  },
  relaxe: {
    fontSize: 19,
    color: "#4E778B"
  },
  btnVoltar: {
    fontSize: 25,
    marginTop: 7,
    color: "#4E778B"
  },
  circuloContainer: {
    paddingVertical: 20,
    width: "80%"
  },
  circulo: {
    width: "80%",
    height: 265,
    alignSelf: "center",
    borderRadius: 500,
    backgroundColor: "#BDE8FD",
    zIndex: -1,
    position: "absolute",
    top: 0
  },
  circuloAcima: {
    width: "40%",
    height: 130,
    alignSelf: "center",
    borderRadius: 500,
    backgroundColor: "#85BBD6",
    zIndex: 1,
    position: "absolute",
    top: 65
  },
  frase: {
    top: 350
  },
  textoRespiracao: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: "center"
  },
  ativo: {
    color: 'black', 
  },
  inativo: {
    color: 'gray',
  },
})