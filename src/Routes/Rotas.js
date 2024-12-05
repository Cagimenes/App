import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Relaxe from '../Pages/Relaxe';
import Sono from '../Pages/Sono';
import Perfil from '../Pages/Perfil';
import Cadastro from '../Components/Cadastro';
import { Image, StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);
    const [cadastro, setCadastro] = useState(false);

    if (!logado && !cadastro) {
        return (<Login setCadastro={setCadastro} />)
    }

    if (!logado && cadastro) {
        return (<Cadastro setCadastro={setCadastro} />)
    }


    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#f1fffe',
                        height: 70,
                    },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: 'gray', 
                    tabBarLabelStyle: {
                        fontSize: 12, 
                        fontWeight: 'bold', 
                        bottom: 5
                    }
                }}
                    >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require("../../assets/home.png")} style={css.iconCasa} color={color} />
                        )
                    }}
                    
                />
                <Tab.Screen
                    name="Relaxe"
                    component={Relaxe}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require("../../assets/relaxe.png")} style={css.icon} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Sono"
                    component={Sono}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require("../../assets/sono.png")} style={css.icon} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require("../../assets/perfil.png")} style={css.icon} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    )
}
const css = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    },
    iconCasa: {
        width: 29.5,
        height: 29.5
    }
});