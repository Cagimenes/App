import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Produto({title, image, description, price, category}) {

  return (
    <View style={css.container}>
        <View style={css.titulo}>
            <View style={css.perfil}></View>
            <Text style={css.title}>{title}</Text>
        </View>
        <Image source={ {uri: image }} style={css.image} />
        <View style={css.icones}>
            <MaterialCommunityIcons style={css.icon} name="cards-heart-outline" color="#ffff" size={30}/>
            <MaterialCommunityIcons style={css.icon} name="chat-outline" color="#ffff" size={30}/>
            <MaterialCommunityIcons style={css.icon} name="navigation-variant-outline" color="#ffff" size={30}/>
            <MaterialCommunityIcons style={css.salvar} name="book-outline" color="#ffff" size={30}/>
        </View>
        <Text style={css.category}>{category}</Text>
        <Text style={css. desc}>{description}</Text>
        <Text style={css.price}>{price}</Text>
    </View>
  )
}
const css = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexGrow: 1,
        color: "white",
        marginTop: 50,
        display: "flex",
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        width: 350,
        marginLeft: 10, 
        textAlign: 'left',
        marginTop: 12
    },
    image: {
        width: 420,
        height: 390,
        borderWidth: 1,
        borderColor: '#353535',
        borderRadius: 3
    },
    desc: {
        color: 'white',
        marginBottom: 10,
        marginTop: 5,
        fontSize: 15,
        width: 400,
        textAlign: 'center',
        textAlign: 'left',
        marginLeft: 10
    },
    price: {
        color: 'white',
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 17,
        width: 350,
        textAlign: 'center',
        textAlign: 'left',
        marginLeft: 10
    },
    category: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        width: 350,
        textAlign: 'left',
        marginLeft: 10
    },
    titulo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    perfil: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 35,
        display: 'flex',
        marginLeft: 10,
    },
    curtir: {
        marginTop: 10,
        marginLeft: 10
    }, 
    icones: {
        flexDirection: 'row',
        marginTop: 7
    },
    icon: {
        marginLeft: 10
    },
    salvar: {
        marginLeft: 260
    }
})
