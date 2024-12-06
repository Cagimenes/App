import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);
    const [profissionalSelecionado, setProfissionalSelecionado] = useState();
    
    const usuario = {
        clienteId: 2,
        nomeCliente: "Luciana",
        fotoCliente: "",
        cpfCliente: "27697450852",
        telefoneCliente: "66666666",
        emailCliente: "l",
        senhaCliente: "1234",
        planosId: 1
      }
    

    return (
        <AuthContext.Provider value={{ logado: logado, error: error, setLogado, profissionalSelecionado, setProfissionalSelecionado, usuario }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;