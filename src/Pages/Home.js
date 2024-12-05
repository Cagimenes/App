import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header';
import Profissionais from '../Components/Profissionais';
import { StatusBar } from 'expo-status-bar';
import Diario from '../Components/Diario';
import Videos from '../Components/Videos';
import Artigos from '../Components/Artigos';

export default function Home({ setHome, navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [profissionais, setProfissionais] = useState(false);
  const [opcao, setOpcao] = useState();
  const [diario, setDiario] = useState(false);
  const [box, setBox] = useState(false);
  const [videos, setVideos] = useState(false);
  const [artigos, setArtigos] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysOfWeek = ['seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.', 'dom.'];

  const getMonthName = (monthIndex) => {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[monthIndex];
  };

  const changeMonth = (direction) => {
    if (direction === 'next') {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  const getDaysInMonth = () => new Date(currentYear, currentMonth + 1, 0).getDate();
  const getFirstDayOfMonth = () => new Date(currentYear, currentMonth, 1).getDay() || 7;
  const generateCalendarData = () => {
    const daysInMonth = getDaysInMonth();
    const firstDay = getFirstDayOfMonth();
    const calendarDays = Array(firstDay - 1).fill(null); 
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }
    return calendarDays;
  };

  


  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas((prevTarefas) => [
        ...prevTarefas,
        { id: Date.now().toString(), texto: novaTarefa, concluida: false },
      ]);
      setNovaTarefa('');
    }
  };

  const alternarConcluida = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const verificarConclusao = () => {
    const todasConcluidas = tarefas.every((tarefa) => tarefa.concluida);
    if (todasConcluidas) {
      Alert.alert('Parabéns!', 'Você concluiu todas as tarefas!');
    } else {
      Alert.alert('Atenção', 'Você ainda não concluiu todas as tarefas.');
    }
  };

  const renderTarefa = ({ item }) => (
    <View style={css.tarefaContainer}>
      <TouchableOpacity
        style={[
          css.checkbox,
          { backgroundColor: item.concluida ? '#7399AB' : 'white' },
        ]}
        onPress={() => alternarConcluida(item.id)}
      >
        {item.concluida && (
          <MaterialCommunityIcons name="check" color="white" size={17} />
        )}
      </TouchableOpacity>
      <Text
        style={[
          css.tarefaTexto,
          { textDecorationLine: item.concluida ? 'line-through' : 'none', color: item.concluida ? '#808080' : '#000' },
        ]}
      >
        {item.texto}
      </Text>
    </View>
  );


  if (profissionais) {
    return <Profissionais setProfissionais={setProfissionais} />;
  }

  if (diario) {
    return <Diario setDiario={setDiario} />;
  }

  if (videos) {
    return <Videos setVideos={setVideos} />;
  }

  if (artigos) {
    return <Artigos setArtigos={setArtigos} />;
  }


  return (
    <ScrollView contentContainerStyle={css.container}>
      <Header setDiario={setDiario} navigation={navigation} />
      <StatusBar backgroundColor='#E5F7FF' />
      <Text style={css.ola}>Olá,</Text>
      <Text style={css.cliente}>Cliente!</Text>
      <TouchableOpacity style={css.dateButton}>
        <Text style={css.dateText}>01/01</Text>
      </TouchableOpacity>
      <Text style={css.sentimentoText}>Como está se sentindo hoje?</Text>

      <View style={css.containerBox}>
        <View style={css.box}>
          {!box ? (
             <>
             <View style={css.row}>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Feliz" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Feliz")}>
                 <Image source={require("../../assets/feliz.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Feliz" ? "#e0e6e9" : "black" }]}>Feliz</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Animado" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Animado")}>
                 <Image source={require("../../assets/animado.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Animado" ? "#e0e6e9" : "black" }]}>Animado</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Tranquilo" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Tranquilo")}>
                 <Image source={require("../../assets/tranquilo.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Tranquilo" ? "#e0e6e9" : "black" }]}>Tranquilo</Text>
               </TouchableOpacity>
             </View>
             <View style={css.row}>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Triste" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Triste")}>
                 <Image source={require("../../assets/triste.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Triste" ? "#e0e6e9" : "black" }]}>Triste</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Cansado" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Cansado")}>
                 <Image source={require("../../assets/cansado.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Cansado" ? "#e0e6e9" : "black" }]}>Cansado</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Ansioso" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Ansioso")}>
                 <Image source={require("../../assets/ansioso.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Ansioso" ? "#e0e6e9" : "black" }]}>Ansioso</Text>
               </TouchableOpacity>
             </View>
             <View style={css.row}>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Estressado" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Estressado")}>
                 <Image source={require("../../assets/estressado.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Estressado" ? "#e0e6e9" : "black" }]}>Estressado</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Frustrado" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Frustrado")}>
                 <Image source={require("../../assets/frustrado.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Frustrado" ? "#e0e6e9" : "black" }]}>Frustrado</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[css.item, { backgroundColor: opcao == "Apatico" ? "#4E778B" : "#e0e6e9" }]} onPress={() => setOpcao("Apatico")}>
                 <Image source={require("../../assets/apatico.png")} style={css.emoji} />
                 <Text style={[css.label, { color: opcao == "Apatico" ? "#e0e6e9" : "black" }]}>Apático</Text>
               </TouchableOpacity>
             </View>
           </>
             ) : (
            <View style={css.calendarContainer}>
              <View style={css.calendarHeader}>
                <TouchableOpacity onPress={() => changeMonth('previous')}>
                  <MaterialCommunityIcons name="chevron-left" size={30} color="#4E778B" />
                </TouchableOpacity>
                <Text style={css.calendarTitle}>
                  {getMonthName(currentMonth)} - {currentYear}
                </Text>
                <TouchableOpacity onPress={() => changeMonth('next')}>
                  <MaterialCommunityIcons name="chevron-right" size={30} color="#4E778B" />
                </TouchableOpacity>
              </View>
              <View style={css.weekDays}>
                {daysOfWeek.map((day) => (
                  <Text key={day} style={css.dayOfWeek}>{day}</Text>
                ))}
              </View>
              <FlatList
                data={generateCalendarData()}
                numColumns={7}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity style={css.dayButton} disabled={!item}>
                    <Text style={css.dayText}>{item || ''}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      </View>
      {!box && (
        <TouchableOpacity style={css.boxEnviar} onPress={() => setBox(true)}>
          <Text style={css.enviarText}>Enviar</Text>
        </TouchableOpacity>
      )}
      <Text style={css.termometroEmocional}>Termômetro emocional</Text>

      <View style={css.containerStyle}>
        <Image source={require("../../assets/feliz.png")} style={css.emojis} />
        <Image source={require("../../assets/animado.png")} style={css.emojis} />
        <Image source={require("../../assets/tranquilo.png")} style={css.emojis} />
        <Image source={require("../../assets/triste.png")} style={css.emojis} />
        <Image source={require("../../assets/frustrado.png")} style={css.emojis} />
        <Image source={require("../../assets/estressado.png")} style={css.emojis} />
      </View>
      
      <View style={css.containerNumber}>
        <Text style={css.porcentagem}>50%</Text>
        <Text style={css.porcentagem}>0%</Text>
        <Text style={css.porcentagem}>0%</Text>
        <Text style={css.porcentagem}>0%</Text>
        <Text style={css.porcentagem}>0%</Text>
        <Text style={css.porcentagem}>0%</Text>
      </View>
      <View style={css.linha}>
      </View>
      <Text style={css.consultaText}>Agende uma consulta para começar sua jornada de cuidado emocional. Escolha o profissional que melhor se adapta às suas necessidades, selecione o horário conveniente, e prepare-se para uma sessão focada em seu bem-estar mental.</Text>
      <TouchableOpacity style={css.boxAgendar}>
        <Text style={css.agendarText} onPress={() => setProfissionais(true)}>Agendar Consulta</Text>
      </TouchableOpacity>
      <View style={css.linha}>
      </View>
      <Text style={css.tempo}>Gerencie Seu tempo</Text>

      <Text style={css.tempoText}>Planeje sua rotina diariamente</Text>
      <View style={css.boxTempo}>
        <View style={css.containerTempo}>
      <View style={css.inputContainer}>
        <TextInput
          style={css.input}
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <TouchableOpacity style={css.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={css.botaoTexto}>+  Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={renderTarefa}
      />
       <TouchableOpacity style={css.botaoConcluir} onPress={verificarConclusao}>
        <Text style={css.botaoTexto}>Concluir</Text>
      </TouchableOpacity>
    </View>
      </View>

      <View style={css.linha}></View>
      <View style={css.containerFonte}>
        <View style={css.educationalSection}>
          <Text style={css.sectionTitle}>Fontes Educacionais</Text>
        </View>
        <View style={css.artigos}>
          <Text style={css.artigosText} onPress={ () => setArtigos( true )}>Artigos</Text>
          <View style={css.contentWrapper}>
            <TouchableOpacity style={css.arrowButton}>
              <Text style={css.arrowText}>{"<"}</Text>
            </TouchableOpacity>
            <View style={css.card}></View>
            <View style={css.card}></View>
            <View style={css.card}></View>
            <TouchableOpacity style={css.arrowButton}>
              <Text style={css.arrowText}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={css.videos}>
          <Text style={css.videosText} onPress={ () => setVideos( true )}>Vídeos</Text>
          <View style={css.contentWrapper}>
            <TouchableOpacity style={css.arrowButton}>
              <Text style={css.arrowText}>{"<"}</Text>
            </TouchableOpacity>
            <View style={css.card}></View>
            <View style={css.card}></View>
            <View style={css.card}></View>
            <TouchableOpacity style={css.arrowButton}>
              <Text style={css.arrowText}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#E5F7FF",
    display: "flex"
  },
  ola: {
    fontSize: 22,
    marginLeft: 30
  },
  cliente: {
    fontSize: 22,
    marginLeft: 30,
    fontWeight: "bold"
  },
  dateButton: {
    width: "20%",
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 290,
    marginTop: -50
  },
  dateText: {
    fontSize: 16,
    padding: 12,
    paddingTop: 10,
    marginLeft: 8
  },
  sentimentoText: {
    fontSize: 17,
    paddingBottom: 30,
    paddingTop: 40,
    marginLeft: 30
  },
  boxSentimento: {
    backgroundColor: 20
  },
  containerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5F7FF",
  },
  box: {
    width: "85%",
    height: 320,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  item: {
    width: 70,
    height: 70,
    borderRadius: 3,
    backgroundColor: "#e0e6e9",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    width: "45%",
    height: 30

  },
  label: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  calendarContainer: {
    borderRadius: 10, 
    padding: 20, 
    marginVertical: 20,
    width: 390, 
    alignSelf: "center", 
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, 
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10, 
    borderColor: "#E5E5E5",
    paddingBottom: 5,
  },
  dayOfWeek: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4E778B", 
    textAlign: "center",
    flex: 1, 
  },
  dayButton: {
    width: 40,
    height: 35,
    borderRadius: 8, 
    justifyContent: "center",
    alignItems: "center",
    margin: 5, 
  },
  dayText: {
    fontSize: 14,
    textAlign: "center",
  },
  dayButtonSelected: {
    backgroundColor: "#FFDA79", 
  },
  dayTextSelected: {
    color: "#FFFFFF", 
  },
  consultaText: {
    width: "90%",
    paddingLeft: 20,
    marginLeft: 12,
    marginTop: 15
  },
  boxEnviar: {
    backgroundColor: "#c1d9e3",
    width: "20%",
    height: 38,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 297
  },
  enviarText: {
    paddingLeft: 19,
    padding: 8,
    fontSize: 16,
    color: "#4E778B"
  },
  termometroEmocional: {
    width: "70%",
    height: 50,
    marginTop: 20,
    marginLeft: 30,
    fontSize: 17
  },
  boxAgendar: {
    width: "40%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
    borderColor: "#4E778B",
    marginLeft: 118
  },
  agendarText: {
    padding: 14,
    fontSize: 15,
    paddingLeft: 20,
    color: "#4E778B",
  },
  emojis: {
    width: 34,
    height: 34,
    marginLeft: 30
  },
  linha: {
    height: 1,
    backgroundColor: '#bbc7cd',
    marginVertical: 10,
    marginTop: 20
  },
  tempo: {
    width: "100%",
    height: 50,
    marginTop: 20,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold"
  },
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%"
  },
  containerNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginLeft: 28,
  },
  porcentagem: {
    width: 35,
    height: 37.8,
    marginRight: 25,
    fontSize: 15,
    marginLeft: 6
  },
  tempoText: {
    width: "100%",
    fontSize: 17,
    marginLeft: 90,
    marginTop: -15
  },
  containerTempo: {
    width: "90%",
    height: 300,
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 16
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bbc7cd',
    borderRadius: 5,
    padding: 9,
    marginRight: 10,
    paddingLeft: 16
  },
  botaoAdicionar: {
    backgroundColor: '#7399AB',
    padding: 14,
    borderRadius: 5,
  },
  botaoTexto: {
    color: 'white',
  },
  tarefaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 3,
  },
  tarefaTexto: {
    fontSize: 16,
  },
  botaoConcluir: {
    marginTop: 20,
    backgroundColor: '#7399AB',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 15,
  },
  fonte: {
    width: "100%",
    height: 50,
    marginTop: 20,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold"
  },
  containerFonte: {
    flex: 1,
  },
  educationalSection: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  arrowText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  artigos: {
    display: "flex",
    alignItems: "center",
  },
  artigosText: {
    fontSize: 17,
    paddingRight: 270,
    marginBottom: 10
  },
  videos: {
    display: "flex",
    alignItems: "center",
    marginTop: 14
  },
  videosText: {
    fontSize: 17,
    paddingRight: 270,
    marginBottom: 10
  },
})