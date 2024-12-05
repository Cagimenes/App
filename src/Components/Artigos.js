import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Header from './Header';

const articles = Array(6).fill({ title: 'Artigo' }); // Exemplo de dados

export default function Artigos({setArtigos}) {
  const renderArticleCard = ({ item }) => (
    <TouchableOpacity style={css.card}>
      <Text style={css.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={css.cor}>
    <StatusBar backgroundColor="#e5f7ff" />
    <Header />
    <View>
        <Text style={css.artigos} onPress={ () => setArtigos( false )}>Fontes Educacionais</Text>
        <Text style={css.btnVoltar} onPress={ () => setArtigos( false )}> ˃ </Text>
        <Text style={css.artigos}>Artigos</Text>
    </View>
      <FlatList
        data={articles}
        renderItem={renderArticleCard}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={css.row}
        contentContainerStyle={css.listContent}
      />
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    marginBottom: 15
  },
  cor: {
    backgroundColor: "#e5f7ff",
    alignItems: "center",
    height: "100%"
  },
  artigos: {
    fontSize: 19,
    color: "#4E778B",
  },
  btnVoltar: {
    fontSize: 25,
    marginTop: 7,
    color: "#4E778B"
  },
  listContent: {
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 300,
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 30,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
  },
});