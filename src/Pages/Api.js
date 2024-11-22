import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';

export default function Api() {

  const [usuarios, setUsuarios] = useState([]);
  const [erro, setError] = useState(false);
  const [edicao, setEdicao] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userNome, setNome] = useState();
  const [userEmail, setEmail] = useState();
  const [userSenha, setSenha] = useState();

  async function getUsuarios() {
    await fetch('http://10.133.22.24:5251/api/Users/GetAllUsers', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setUsuarios(json))
      .catch(err => setError(true))
  }

  async function getUsuario(id) {
    console.log("aqui");
    await fetch('http://10.133.22.24:5251/api/Users/GetUserId/' + id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
      .then((response) => response.json())
      .then(json => {
        setUserId(json.userId);
        setNome(json.userName);
        setEmail(json.userEmail);
        setSenha(json.userPassword);
      });
  }

  async function editUser() {
    await fetch('http://10.133.22.24:5251/api/Users/UpdateUser/' + userId, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        userId: userId,
        userEmail: userEmail,
        userPassword: userSenha,
        userName: userNome
      })
    })
      .then((response) => response.json())
      .catch(err => console.log(err));
    getUsuarios();
    setEdicao(false)
  }

  function showAlert(id, userName) {
    Alert.alert(
      '',
      'Deseja realmente excluir esse usuário?',
      [
        {text: 'Sim', onPress: () => deleteUsuario(id, userName)},
        {text: 'Não', onPress: () => ('')},
      ],
      {cancelable: false}
    );
  }

  async function deleteUsuario(id, userName){
    await fetch('http://10.133.22.24:5251/api/Users/DeleteUser/' + id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
    })
      .then(res => res.json())
      .then(json => {
        if(json == true)
          {
            Alert.alert(
              '',
              'Usuário ' + userName + ' excluído com sucesso!',
              [
                {text: '', onPress: () => ('')},
                {text: 'Ok', onPress: () => ('')},
              ],
              {cancelable: false}
            );
            getUsuarios();
          }
        else{
          Alert.alert(
            '',
            'Usuário ' + userName + ' não foi excluído.',
              [
                {text: '', onPress: () => ('')},
                {text: 'Ok', onPress: () => ('')},
              ],
              {cancelable: false}
          );
          getUsuarios();
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getUsuarios();
    }, [])
  );

  return (
    <View style={css.container}>
      {edicao == false ?
        <FlatList
          style={css.flat}
          data={usuarios}
          keyExtractor={(item) => item.userId}
          renderItem={({ item }) => (
            <>
              <Text style={css.text}>
                {item.userName}
              </Text>
              <View style={css.box}>
                <TouchableOpacity style={css.btnEdit} onPress={() => { setEdicao(true); getUsuario(item.userId) }}>
                  <Text style={css.btnText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btnDelete} onPress={() => showAlert(item.userId, item.userName)}>
                  <Text style={css.btnText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
        :
        <View>
          <Image style={css.img} source={require('../../assets/logo.png')} />
          <TextInput
            inputMode='text'
            placeholder='Nome Completo'
            style={css.input}
            value={userNome}
            onChangeText={(digitado) => setNome(digitado)}
            placeholderTextColor='white'
          />
          <TextInput
            inputMode='email'
            placeholder='Email'
            style={css.input}
            value={userEmail}
            onChangeText={(digitado) => setEmail(digitado)}
            placeholderTextColor='white'
          />
          <TextInput
            inputMode='text'
            placeholder='Senha'
            secureTextEntry={true}
            style={css.input}
            value={userSenha}
            onChangeText={(digitado) => setSenha(digitado)}
            placeholderTextColor='white'
          />
          <TouchableOpacity onPress={() => editUser()}>
            <Text style={css.btnSalvarText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flexGrow: 1,
    flexDirection: 'row',
    color: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  flat: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 15
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  btnEdit: {
    width: 70,
    height: 30,
    backgroundColor: '#089CFF',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  btnDelete: {
    width: 70,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.7
  },
  btnSalvarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 10,
    backgroundColor: '#089CFF',
    width: 350,
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    width: 350,
    height: 45,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#353535',
    borderRadius: 7,
    padding: 15,
    backgroundColor: '#292929',
    color: 'white',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    marginLeft: 240,
    marginTop: -25
  },
  img: {
    width: '70%',
    height: 75,
    marginBottom: 20,
    marginLeft: 50
  },
})