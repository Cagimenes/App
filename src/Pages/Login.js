import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Keyboard } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { AuthContext } from '../Context/AuthContext';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Login({setCadastro}) {
    

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [campo, setCampo] = useState(false);
    const [incorreto, setIncorreto] = useState(false);

    const [isSupported , setIsSupported ] = useState(false);

    const { Login, error, setLogado } = useContext(AuthContext);


    const handleSubmit = () => {
        Keyboard.dismiss();
        if (!email || !senha) {
            setCampo(true);
            return;
        }
        if (senha || email != false) {
            setIncorreto(true);
        }
    };

    const alertCampo = () => {
        setCampo(false);
    };

    const alertIncorreto = () => {
        setIncorreto(false);
    };

    function RealizaLogin() {
        Login(email, senha);
    }
    function Cadastro() {
        setCadastro(true);
    }

    async function verifyHardware()
    {
        const compatible  = await LocalAuthentication.hasHardwareAsync();
        if( compatible ) {
            const teste = await LocalAuthentication.supportedAuthenticationTypesAsync();
            setIsSupported( true );
        }
    }

    async function authentication()
    {
        const biometric = await LocalAuthentication.authenticateAsync();
        if( biometric.success == true ) {
            setLogado( true );
        }
    }

    useEffect( () => {
        verifyHardware();
    }, [] );

    useEffect( () => {
        authentication();
    }, [isSupported])

    return (
        <ScrollView contentContainerStyle={css.container}>
            <StatusBar backgroundColor="#D4F2FE" />
            <Image source={require("../../assets/logo-reffuge (2).png")} style={css.logo} />
            <Text style={css.email}>Email</Text>
            <TextInput
                inputMode="email"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
            />
            <Text style={css.text}>Senha</Text>
            <TextInput
                inputMode="text"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
            />
            <View style={css.forgot}>
                <Text style={css.forgotText}>Esqueci minha senha</Text>
            </View>
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText} onPress={handleSubmit}>Entrar</Text>
            </TouchableOpacity>

            <View style={css.criar}>
                <Text style={css.conta}>Não tem uma conta?</Text>
                <TouchableOpacity style={css.btn} onPress={Cadastro}>
                    <Text style={css.cadastro}> Crie agora!</Text>
                </TouchableOpacity>
            </View>
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
                        <Text style={css.modalTitle}>Senha ou email incorreto!</Text>
                        <Text style={css.modalMessage}>Tente Novamente</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertIncorreto}>
                            <Text style={css.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                </View>
            }
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#D4F2FE"
    },
    logo: {
        width: "60%",
        resizeMode: "contain",
        marginTop: -40
    },
    email: {
        width: "74%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: -40
    },
    text: {
        width: "74%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    input: {
        width: "75%",
        height: 50,
        borderRadius: 6,
        borderWidth: 0.7,
        marginTop: 5,
        marginBottom: 10,
        padding: 15,
        backgroundColor: "#E1F6FE",
    },
    forgot: {
        width: "74%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#7399AB",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "75%",
        height: 50,
        borderRadius: 6,
        marginTop: 20,
        backgroundColor: "#7399AB"
    },
    btnFaceId: {
        width: "75%",
        height: 50,
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: "#7399AB",
        marginTop: 7,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    btnLoginText: {
        color: "white",
        lineHeight: 50,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    btnFaceIdText: {
        color: "#7399AB",
        lineHeight: 50,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    imgFaceId: {
        width: 40,
        height: 40,
        position: "absolute",
        left: 100,
        resizeMode: "cover",
    },
    imgTouchId: {
        width: 30,
        height: 37,
        position: "absolute",
        left: 170,
        resizeMode: "cover",
    },
    ouId: {
        color: "#7399AB",
        fontWeight: "bold",
        fontSize: 16
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    },
    criar: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,

    },
    cadastro: {
        color: "#7399AB",
        fontWeight: "bold"
    },
    ou: {
        marginTop: 7
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
      }
});