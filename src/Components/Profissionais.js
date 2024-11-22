import React from 'react'
import { Text } from 'react-native'

export default function Profissionais({setProfissionais}) {
  return (
    <Text onPress={() => setProfissionais(false)}>profissionais</Text>
  )
}
