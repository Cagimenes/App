import { Text, TouchableOpacity, StyleSheet, ScrollView, Image, View, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Header from '../Components/Header';
import Home from './Home';

export default function Perfil({navigation}) {

  const [foto, setFoto] = useState("");
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [ddd, setDdd] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [home, setHome] = useState(false);
  
  if (home) {
    return (<Home setHome={setHome}/>)
  } 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header setHome={setHome} navigation={navigation}/>
      <View style={styles.containerPerfil}>
        <View style={styles.profileSection}>
          <Image style={styles.profileImage} source={require("../../assets/cliente.jpg")}/>
          <View style={styles.profileActions}>
            <TouchableOpacity>
              <Text style={styles.actionText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.actionText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nome Completo</Text>
            <View style={styles.infoActions}>
              <Text style={styles.value}>Cliente</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Data de Nascimento</Text>
            <View style={styles.infoActions}>
              <Text style={styles.value}>00/00/0000</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>CPF</Text>
            <View style={styles.infoActions}>
              <Text style={styles.value}>000.000.000-00</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Celular</Text>
            <View style={styles.infoActions}>
              <Text style={styles.value}>(14)00000-0000</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.infoActions}>
              <Text style={styles.value}>cliente@gmail.com</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alterar Senha</Text>
          <Image source={require("../../assets/chave.png")} style={styles.chave} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#E5F7FF"
  },
  containerPerfil: {
    flex: 1,
    padding: 20,
    marginTop: -45
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 55
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  actionText: {
    color: '#4E778B',
    fontWeight: 'bold',
  },
  infoSection: {
    marginBottom: 30,
  },
  infoRow: {
    marginBottom: 15,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4E778B',
  },
  infoActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  value: {
    fontSize: 17
  },
  editText: {
    color: '#4E778B',
    fontWeight: 'bold',
    fontSize: 15
  },
  button: {
    backgroundColor: '#cde2ec',
    paddingVertical: 15,
    borderRadius: 7,
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 16,
  },
  chave: {
    width: 23,
    height: 23,
    left: 40
  }
});