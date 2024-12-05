import { StatusBar } from "expo-status-bar";
import AuthProvider from "./src/Context/AuthContext";
import Rotas from "./src/Routes/Rotas";
import { useState } from "react";

export default function App() {



  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );

}
