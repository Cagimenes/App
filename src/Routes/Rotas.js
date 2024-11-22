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

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);
    const [cadastro, setCadastro] = useState(false);


    if (!logado && !cadastro) {
        return (<Login setCadastro={setCadastro} />)
    }

    if( !logado && cadastro ) {
        return( <Cadastro setCadastro={setCadastro}/>)
    }


    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#f1fffe',
                    },
                    tabBarActiveTintColor: "black"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                 <Tab.Screen
                    name="Relaxe"
                    component={Relaxe}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Sono"
                    component={Sono}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                 <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}