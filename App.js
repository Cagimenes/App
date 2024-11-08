import { StatusBar } from "expo-status-bar";
import AuthProvider from "./src/Context/AuthContext";
import Rotas from "./src/Routes/Rotas";
import { useState } from "react";
import Login from "./src/Pages/Login";
import Cadastro from "./src/Components/Cadastro"


export default function App() {



  return (
    <AuthProvider>
      <StatusBar style="light" />
      <Rotas />
    </AuthProvider>
  );

}
