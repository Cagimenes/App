import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, ScrollView, Image, Pressable } from 'react-native'
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../Context/AuthContext';


export default function Cadastro({ setCadastro, }) {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [campo, setCampo] = useState(false);
    const [incorreto, setIncorreto] = useState(false);
    const [cadastrado, setCadastrado] = useState(false);
    const [isSelected, setSelection] = useState(false);

    const handleSubmit = () => {
        if (!nomeCompleto || !email || !celular || !senha || !confirmarSenha) {
            setCampo(true);
            return;
        }
        if (senha !== confirmarSenha) {
            setIncorreto(true);
            return;
        }
        setCadastrado(true);
    };

    const alertCadastrado = () => {
        setCadastrado(false);
    };

    const alertCampo = () => {
        setCampo(false);
    };

    const alertIncorreto = () => {
        setIncorreto(false);
    };

    const handleCheckboxChange = (newValue) => {
        setIsChecked(newValue);
    };

    function Cadastrar() {
        setCadastro(false);
    }

    function Voltar() {
        setCadastro(false);
    }

    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={css.view}>
            <StatusBar backgroundColor="#D4F2FE" />
            <Image source={require("../../assets/logo-reffuge (2).png")} style={css.logo} />
            <TouchableOpacity style={css.btnVoltar} onPress={Voltar}>
                <Text style={css.voltar}>˂</Text>
            </TouchableOpacity>
            <Text style={css.label}>Nome Completo</Text>
            <TextInput
                style={css.input}
                value={nomeCompleto}
                onChangeText={setNomeCompleto}
            />
            <Text style={css.label}>CPF</Text>
            <TextInput
                style={css.input}
                value={cpf}
                onChangeText={setCpf}
            />
            <Text style={css.label}>Número de Telefone</Text>
            <TextInput
                style={css.input}
                value={celular}
                onChangeText={setCelular}
            />
            <Text style={css.label}>Email</Text>
            <TextInput
                style={css.input}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={css.label}>Senha</Text>
            <TextInput
                style={css.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <Text style={css.label}>Confirmar Senha</Text>
            <TextInput
                style={css.input}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
            />
            <View style={css.reconhecimento}>
                <Image source={require("../../assets/facial.png")} style={css.facial} />
                <View style={css.frase}>
                    <Text style={css.experiencia}>Se desejar uma experiência mais segura em nosso aplicativo, habilite agora o</Text>
                    <Text style={css.recFacial}> Reconhecimento Facial ou sua Digital.</Text>
                </View>
            </View>
            <View style={css.checkboxContainer}>
                <Pressable style={[css.checkbox, { backgroundColor: isSelected ? "#7399AB" : "white" }]} onPress={() => setSelection(current => !current)}>
                    {isSelected && <MaterialCommunityIcons name="check" color="white" size={17}/>}
                </Pressable>
                <Text style={css.checktext}>Reconhecimento Facial / Digital</Text>
            </View>
            <TouchableOpacity onPress={Cadastrar} style={css.btnCadastro}>
                <Text style={css.btnCadastroText} onPress={handleSubmit} >Cadastrar</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={campo}
                onRequestClose={alertCampo}>
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                        <Text style={css.modalTitle}>Preencha todos os campos!</Text>
                        <Text style={css.modalMessage}>Tente Novamente</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertCampo}>
                            <Text style={css.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={incorreto}
                onRequestClose={alertIncorreto}>
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                        <Text style={css.modalTitle}>As senhas não coincidem!</Text>
                        <Text style={css.modalMessage}>Tente Novamente</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertIncorreto}>
                            <Text style={css.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={cadastrado}
                onRequestClose={alertCadastrado}>
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                        <Text style={css.modalTitle}>Cadastro realizado com sucesso!</Text>
                        <Text style={css.modalMessage}>Seja bem-vindo(a)</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertCadastrado}>
                            <Text style={css.modalButtonText} >OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}
const css = StyleSheet.create({
    view: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: "#D4F2FE",
    },
    logo: {
        width: "60%",
        resizeMode: "contain",
        marginTop: -15
    },
    facial: {
        width: "15%",
        resizeMode: "contain",
        marginTop: -90,
        marginBottom: -50
    },
    input: {
        width: '75%',
        height: 50,
        marginBottom: 7,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        padding: 15,
        backgroundColor: "#E1F6FE",
    },
    label: {
        width: '45%',
        marginTop: 10,
        marginRight: 120,
        marginBottom: 5,
        color: '#000'
    },
    account: {
        marginTop: 20
    },
    entrar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 15
    },
    btnVoltar: {
        display: "flex",
        width: '72%',
        marginTop: -60,
        marginBottom: -10
    },
    voltar: {
        color: '#7399AB',
        fontWeight: 'bold',
        fontSize: 35,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: 300,
        height: 200,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    modalMessage: {
        fontSize: 18,
        marginTop: 15
    },
    modalButtonText: {
        color: '#7399AB',
        textAlign: 'right',
        fontSize: 20,
        marginTop: 30
    },
    btnCadastro: {
        width: "75%",
        height: 50,
        borderRadius: 6,
        marginTop: -35,
        backgroundColor: "#7399AB",
        marginBottom: 20
    },
    btnCadastroText: {
        color: "white",
        lineHeight: 50,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    reconhecimento: {
        width: "75%",
        display: "flex",
        flexDirection: "row"
    },
    recFacial: {
        color: "#7399AB",
        fontWeight: "bold",
        marginTop: -3
    },
    experiencia: {
        marginTop: 10,
        marginLeft: 3,
        width: "55%"
    },
    frase: {
        flexDirection: "column",
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 45,
        marginTop:-50,
        width: "73%"
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "black",
        alignSelf: 'center',
        borderRadius: 3
    },
    checktext: {
        margin: 8,
        fontWeight: "bold"
    },
})