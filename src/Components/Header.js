import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet, Image} from 'react-native'
import Diario from './Diario';
export default function Header() {

  const [diario, setDiario] = useState(false);

  if (diario) {
    return (<Diario setDiario={setDiario}/>)
  }

  return (
    <View style={css.header}>
      <Image source={require('../../assets/logo.png')} style={css.logo} />
      <TouchableOpacity style={css.diario} onPress={() => setDiario(false)}>
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