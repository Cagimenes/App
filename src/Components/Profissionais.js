import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Button, Pressable, SectionList, FlatList, ScrollView } from 'react-native'
import ProfissionaisLista from './ProfissionaisLista';
import Header from '../Components/Header';
import { useState } from 'react';

export default function Profissionais({ setProfissionais }) {

  const [profissional, setProfissional] = useState();

  const lista = [
    {
      id: 1,
      foto: require("../../assets/psic1.jpg"),
      nome: "Dra. Melissa Gonçalves",
      especialidade: "Acomp. terapêutico",
      perfil: "Ver perfil completo",
      descricao: "Sou Melissa Gonçalves, psicóloga especializada em acompanhamento terapêutico. Minha missão é oferecer suporte emocional e psicológico. Acredito que o processo terapêutico é uma jornada de autoconhecimento e crescimento, e estou aqui para te ajudar a enfrentar desafios pessoais e emocionais, sempre respeitando o seu ritmo.",
      botao: "Agendar"
    },
    {
      id: 2,
      foto: require("../../assets/psic2.jpg"),
      nome: "Dr. Lucas Oliveira",
      especialidade: "Ansiedade",
      perfil: "Ver perfil completo",
      descricao: "Sou o Dr. Lucas Oliveira, psicólogo especializado no tratamento da ansiedade. Meu foco é ajudar meus pacientes utilizando a Terapia Cognitivo-Comportamental (TCC). Trabalho para identificar e modificar padrões de pensamento e comportamentos que contribuem para o sofrimento, promovendo uma melhor qualidade de vida.",
      botao: "Agendar"
    },
    {
      id: 3,
      foto: require("../../assets/psic3.jpg"),
      nome: "Dra. Vanessa Carvalho",
      especialidade: "Autismo",
      perfil: "Ver perfil completo",
      descricao: "Sou a Dra. Vanessa Carvalho, psicóloga especializada no acompanhamento de pessoas com autismo. Tenho como objetivo oferecer suporte individualizado, ajudando no desenvolvimento emocional, social e comportamental, utilizando abordagens terapêuticas adequadas a cada necessidade. Trabalho para promover a inclusão, o bem-estar e a qualidade de vida, para que cada pessoa possa evoluir de acordo com seu potencial único.",
      botao: "Agendar"
    },
    {
      id: 4,
      foto: require("../../assets/psic4.jpg"),
      nome: "Dr. Eduardo Lima ",
      especialidade: "Depressão",
      perfil: "Ver perfil completo",
      descricao: "Sou o Dr. Eduardo Lima, psicólogo especializado no tratamento da depressão. Meu trabalho é ajudar meus pacientes a entenderem e enfrentarem os desafios emocionais trazidos pela depressão, utilizando abordagens terapêuticas eficazes e personalizadas. Com empatia e dedicação, busco apoiar cada pessoa no processo de recuperação, promovendo o autoconhecimento e para que possam retomar seu equilíbrio emocional.",
      botao: "Agendar"
    },
    {
      id: 5,
      foto: require("../../assets/psic5.jpg"),
      nome: "Dra. Beatriz Santos ",
      especialidade: "Casais",
      perfil: "Ver perfil completo",
      descricao: "Sou a Dra. Beatriz Santos, psicóloga especializada em terapia de casais. Meu trabalho é ajudar casais a compreenderem e superarem desafios emocionais e de comunicação, promovendo uma relação mais saudável e harmoniosa. Utilizo abordagens terapêuticas personalizadas para fortalecer o vínculo afetivo, resolver conflitos e melhorar a convivência. Meu objetivo é apoiar os casais a redescobrirem o equilíbrio e a satisfação em sua relação.",
      botao: "Agendar"
    },
    {
      id: 6,
      foto: require("../../assets/psic6.jpg"),
      nome: "Dr. Bruno Almeida",
      especialidade: "TDAH",
      perfil: "Ver perfil completo",
      descricao: "Sou o Dr. Bruno Almeida, psicólogo especializado no tratamento do Transtorno de Déficit de Atenção com Hiperatividade. Meu objetivo é ajudar meus pacientes a compreenderem o impacto do TDAH em suas vidas e a desenvolver estratégias eficazes para melhorar o foco, a organização e o controle emocional. Utilizo abordagens terapêuticas adaptadas às necessidades individuais, buscando promover uma maior qualidade tanto no ambiente pessoal quanto profissional.",
      botao: "Agendar"
    }
  ]

  return (
    <View style={css.cor}>
      <StatusBar backgroundColor="#e5f7ff" />
      <Header />
      <View style={css.container}>
        <Text style={css.seta} onPress={() => setProfissionais(false)}> ˂ </Text>
        <Text style={css.agenda}>Agende sua consulta</Text>
      </View>
      {profissional ?
        <>
          <View style={css.perfil}>
            <View style={css.boxPerfil}>
              <Text style={css.nome}>{profissional.nome}</Text>
              <Text style={css.especialidade}>Especialidade: {profissional.especialidade}</Text>
              <Image style={css.foto} source={profissional.foto} />
            </View>
            <View style={css.boxDescricao}>
              <Text style={css.descricao}>{profissional.descricao}</Text>
              <Pressable style={css.botao}>
                <Text style={css.botaoText}>{profissional.botao}</Text>
              </Pressable>
              <Pressable style={css.voltar} onPress={() => setProfissional(null)}>
                <Text style={css.voltarText}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </>
        :

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProfissionaisLista
              item={item}
              foto={item.foto}
              nome={item.nome}
              especialidade={item.especialidade}
              botao={item.botao}
              setProfissional={setProfissional}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      }
    </View>
  );
}
const css = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    bottom: 10,
  },
  cor: {
    backgroundColor: "#e5f7ff",
    alignItems: "center",
    height: "100%"
  },
  agenda: {
    fontSize: 19,
    color: "#4E778B",
    right: 13
  },
  btnVoltar: {
    fontSize: 25,
    marginTop: 7,
    color: "#4E778B"
  },
  seta: {
    color: "#4E778B",
    fontSize: 30,
    right: 60
  },
  perfil: {
    width: "100%"
  },
  boxPerfil: {
    width: "100%",
    alignItems: "center"
  },
  nome: {
    fontWeight: "bold",
    fontSize: 20,
  },
  especialidade: {
    fontWeight: "bold"
  },
  foto: {
    width: 290,
    height: 290,
    borderRadius: 400,
    marginTop: 13,
    marginBottom: 13
  },
  boxDescricao: {
    alignItems: "center",
    height: 300
  },
  descricao: {
    width: "85%",
    textAlign: "center",
    fontWeight: "bold",
  },
  botao: {
    width: 200,
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#C1D0E3",
    marginTop: 13,
  },
  botaoText: {
    color: "#4E778B"
  },
  voltar: {
    top: 10
  },
})