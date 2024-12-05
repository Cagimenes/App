import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import Header from '../Components/Header';

export default function Sono() {
  const [respostas, setRespostas] = useState({
    qualidade: '',
    horas: '',
    pesadelos: '',
  });

  const [etapa, setEtapa] = useState(1);

  const avancarEtapa = (campo, valor) => {
    setRespostas({ ...respostas, [campo]: valor });
    setEtapa(etapa + 1);
  };

  const reiniciar = () => {
    setRespostas({ qualidade: '', horas: '', pesadelos: '' });
    setEtapa(1);
  };

  return (
    <View style={css.container}>
      <Header />
      {etapa === 1 && (
        <Pergunta
          titulo="Como você dormiu na noite do dia 01/01/2024?"
          opcoes={['Muito bem', 'Bem', 'Nem bem, nem mal', 'Mal', 'Muito mal']}
          onSelecionar={(valor) => avancarEtapa('qualidade', valor)}
        />
      )}

      {etapa === 2 && (
        <Pergunta
          titulo="Quantas horas você dormiu na noite do dia 01/01/2024?"
          opcoes={['Menos que 6 horas', '6 horas', '7 horas', '8 horas', 'Mais que 8 horas']}
          onSelecionar={(valor) => avancarEtapa('horas', valor)}
        />
      )}

      {etapa === 3 && (
        <Pergunta
          titulo="Você teve pesadelos na noite do dia 01/01/2024?"
          opcoes={['Nenhum', 'Leve', 'Moderado', 'Intenso', 'Não lembro']}
          onSelecionar={(valor) => avancarEtapa('pesadelos', valor)}
        />
      )}

      {etapa === 4 && (
        <Resultado respostas={respostas} onReiniciar={reiniciar} />
      )}
    </View>
  );
}

const Pergunta = ({ titulo, opcoes, onSelecionar }) => {
  return (
    <View style={css.container}>
      <View style={css.containerSono}>
        <Text style={css.sono}>Sono</Text>
      </View>
      <Text style={css.titulo}>{titulo}</Text>
      {opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={css.botao}
          onPress={() => onSelecionar(opcao)}
        >
          <Text style={css.textoBotao}>{opcao}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Resultado = ({ respostas, onReiniciar }) => {
  const valores = {
    qualidade: {
      'Muito bem': 136,
      'Bem': 116,
      'Nem bem, nem mal': 68,
      'Mal': 40,
      'Muito mal': 20,
    },
    horas: {
      'Menos que 6 horas': 20,
      '6 horas': 40,
      '7 horas': 68,
      '8 horas': 116,
      'Mais que 8 horas': 136,
    },
    pesadelos: {
      'Nenhum': 1,
      'Leve': 40,
      'Moderado': 68,
      'Intenso': 136,
      'Não lembro': 20,
    },
  };

  return (
    <ScrollView>
      <View style={css.container}>
        <View style={css.containerSono}>
          <Text style={css.sono}>Sono</Text>
        </View>
        <Text style={css.titulo}>Resumo do Sono</Text>

        <View style={css.graficoContainer}>
          {['qualidade', 'horas', 'pesadelos'].map((campo, index) => (
            <View key={index} style={css.barraContainer}>
              <View style={css.barraFixa}>
                <View
                  style={[
                    css.barra,
                    { height: (valores[campo][respostas[campo] || ''] || 0) * 2 },
                  ]}
                />
              </View>
              <Text style={css.label}>{campo}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={css.botaoReiniciar} onPress={onReiniciar}>
          <Text style={css.textoBotao}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const css = StyleSheet.create({
  container: {
    backgroundColor: '#e5f7ff',
    flexGrow: 1,
    height: 600,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 40,
    width: "80%",
    left: 40
  },
  botao: {
    backgroundColor: '#4E778B',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: "80%",
    left: 40
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
  graficoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    top: 30
  },
  barraContainer: {
    alignItems: 'center',
    height: 300,
  },
  barraFixa: {
    flex: 1,
    justifyContent: 'flex-end',
    width: 50, 
    height: 100,
    backgroundColor: "#BDE8FD", // Cor de fundo para contraste, se necessário
    borderRadius: 5, 
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.3, // Opacidade fixa
    shadowRadius: 5, // Raio de desfoque
    elevation: 6, // Sombra para Android
  },
  barra: {
    width: '100%',
    backgroundColor: "#85BBD6",
    borderRadius: 5,
  },
  label: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  containerSono: {
    alignItems: 'center',
  },
  sono: {
    fontSize: 19,
    color: '#4E778B',
  },
  botaoReiniciar: {
    backgroundColor: '#4E778B',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: "80%",
    left: 40,
    top: 50
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});