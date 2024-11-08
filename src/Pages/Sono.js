import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Sono() {

  return (
    <View style={css.container}>
      <Text>teste</Text>
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
    backgroundColor: "#E5F7FF",
  }
})

