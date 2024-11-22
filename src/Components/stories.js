import React from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native'

export default function stories({produtos}) {

    return (
        <FlatList
            data={produtos}
            renderItem={ ({item}) => 
            <View style={css.story}>
                <Image source={{ uri: item.image }} style={css.image}/>
            </View>
            }
            keyExtractor={ (item) => item.id }
            contentContainerStyle={[ css.container, {width: produtos.length * 70 }]}
            horizontal={true}
        />
    )
}
const css = StyleSheet.create({
    container: {
        height: 130,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 20,
        gap: 5,
        marginBottom: 20,
    },
    story: {
        width: 65,
        height: 65,
        backgroundColor: 'white',
        borderRadius: 35,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    }
})